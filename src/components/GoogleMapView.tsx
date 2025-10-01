import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

// Google Maps API 타입 선언
declare global {
  interface Window {
    google: typeof google;
  }
}

interface Spot {
  id: number;
  latitude?: number;
  longitude?: number;
  location: string;
  address: string;
  time?: string;
  duration?: string;
}

interface TravelSegment {
  duration: string;
  fromSpot?: Spot;
  toSpot?: Spot;
}

interface GoogleMapViewProps {
  spots: Spot[];
  travelSegments: TravelSegment[];
  activeDay: number;
}

const GoogleMapView: React.FC<GoogleMapViewProps> = ({ spots, travelSegments, activeDay }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

  // Google Maps 초기화
  useEffect(() => {
    if (!mapRef.current) return;

    const initializeMap = () => {
      try {
        console.log('Google Maps 초기화 시작...');

        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: { lat: 35.6762, lng: 139.6503 }, // 도쿄 기본 위치
          zoom: 15, // 줌 레벨을 13에서 10으로 조정 (더 줌 아웃)
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        const directionsServiceInstance = new google.maps.DirectionsService();
        const directionsRendererInstance = new google.maps.DirectionsRenderer({
          draggable: false,
          suppressMarkers: true, // 기본 마커 숨기고 커스텀 마커만 사용
        });

        directionsRendererInstance.setMap(mapInstance);

        setMap(mapInstance);
        setDirectionsService(directionsServiceInstance);
        setDirectionsRenderer(directionsRendererInstance);

        console.log('Google Maps 초기화 완료');
      } catch (error) {
        console.error('Google Maps 초기화 실패:', error);
      }
    };

    // Google Maps API 로드 확인
    if (window.google && window.google.maps) {
      console.log('Google Maps API가 로드됨');
      initializeMap();
    } else {
      console.log('Google Maps API 로드 대기 중...');
      // API가 아직 로드되지 않았으면 잠시 후 다시 시도
      const timer = setTimeout(() => {
        if (window.google && window.google.maps) {
          console.log('Google Maps API 로드 완료 (지연)');
          initializeMap();
        } else {
          console.warn('Google Maps APIがロードされていません。モック地図を表示します。');
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // 観光地マーカー更新
  useEffect(() => {
    if (!map || !spots.length) return;

    // 座標がある観光地のみフィルタリング
    const validSpots = spots.filter((spot) => spot.latitude && spot.longitude);
    if (!validSpots.length) return;

    // 기존 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];

    // 新しいマーカー追加
    validSpots.forEach((spot, index) => {
      try {
        const marker = new google.maps.Marker({
          position: { lat: spot.latitude!, lng: spot.longitude! },
          map: map,
          title: spot.location,
          label: {
            text: (index + 1).toString(),
            color: 'white',
            fontWeight: 'bold',
          },
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="white" stroke-width="2"/>
                <text x="20" y="26" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${
                  index + 1
                }</text>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(40, 40),
          },
          zIndex: 1000 + index, // 마커를 가장 위에 표시 (순서대로 zIndex 증가)
        });

        // 마커 클릭 시 정보창 표시
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold text-gray-900">${spot.location}</h3>
              <p class="text-sm text-gray-600">${spot.address}</p>
              ${spot.time ? `<p class="text-sm text-blue-600 mt-1">⏰ ${spot.time}</p>` : ''}
              ${spot.duration ? `<p class="text-sm text-green-600">⏱️ ${spot.duration}</p>` : ''}
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        newMarkers.push(marker);
      } catch (error) {
        console.error('마커 생성 실패:', error);
      }
    });

    setMarkers(newMarkers);

    // すべてのマーカーを含むように地図範囲調整
    if (newMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      newMarkers.forEach((marker) => {
        const position = marker.getPosition();
        if (position) bounds.extend(position);
      });

      // fitBounds 대신 setCenter와 적절한 줌 레벨 사용
      if (newMarkers.length === 1) {
        // 관광지가 1개일 때는 해당 위치로 이동하되 너무 확대하지 않음
        map.setCenter(bounds.getCenter());
        map.setZoom(14); // 적당한 줌 레벨
      } else {
        // 관광지가 여러 개일 때는 fitBounds 사용하되 최대 줌 레벨 제한
        map.fitBounds(bounds);
        // 너무 확대되지 않도록 최대 줌 레벨 제한
        const currentZoom = map.getZoom();
        if (currentZoom && currentZoom > 18) {
          map.setZoom(18);
        }
      }
    }
  }, [map, spots]);

  // 경로 표시
  useEffect(() => {
    if (!directionsService || !directionsRenderer || spots.length < 2) {
      if (directionsRenderer) {
        // 빈 DirectionsResult 객체로 경로 초기화
        directionsRenderer.setDirections({
          routes: [],
          request: {} as google.maps.DirectionsRequest,
        });
      }
      return;
    }

    // 座標がある観光地のみフィルタリング
    const validSpots = spots.filter((spot) => spot.latitude && spot.longitude);
    if (validSpots.length < 2) {
      if (directionsRenderer) {
        // 빈 DirectionsResult 객체로 경로 초기화
        directionsRenderer.setDirections({
          routes: [],
          request: {} as google.maps.DirectionsRequest,
        });
      }
      return;
    }

    const waypoints = validSpots.slice(1, -1).map((spot) => ({
      location: { lat: spot.latitude!, lng: spot.longitude! },
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin: { lat: validSpots[0].latitude!, lng: validSpots[0].longitude! },
      destination: {
        lat: validSpots[validSpots.length - 1].latitude!,
        lng: validSpots[validSpots.length - 1].longitude!,
      },
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
      optimizeWaypoints: true,
    };

    directionsService.route(
      request,
      (result: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          directionsRenderer.setDirections(result);

          // 경로 표시 후 지도가 너무 확대되지 않도록 조정
          setTimeout(() => {
            if (map) {
              const currentZoom = map.getZoom();
              if (currentZoom && currentZoom > 18) {
                map.setZoom(18);
              }
            }
          }, 500);
        } else {
          console.warn('경로 표시 실패:', status);
        }
      },
    );
  }, [directionsService, directionsRenderer, spots]);

  // 이동 시간 계산 및 표시
  const calculateTotalTravelTime = () => {
    return travelSegments.reduce((total, segment) => {
      const duration = segment.duration.replace(/[^\d]/g, '');
      return total + parseInt(duration || '0');
    }, 0);
  };

  return (
    <div className="h-full flex flex-col">
      {/* 지도 헤더 */}
      <div className="p-4 bg-white border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Day {activeDay} 地図</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{spots.length}件の観光地</span>
            </div>
            {travelSegments.length > 0 && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>総移動時間: {calculateTotalTravelTime()}分</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 地図コンテナ */}
      <div className="flex-1 relative">
        <div ref={mapRef} className="w-full h-full" />

        {/* 地図ローディングオーバーレイ */}
        {!map && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">地図を読み込み中...</h3>
              <p className="text-sm">Google Mapsを読み込んでいます</p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-xs text-gray-400">地図データ ©2025 Google</p>
              </div>
            </div>
          </div>
        )}

        {/* 観光地がない時表示 */}
        {map && spots.length === 0 && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">観光地を追加してみてください</h3>
              <p className="text-sm">
                Google Mapsで観光地を検索して追加すると
                <br />
                地図に表示されます
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMapView;
