import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

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

const GoogleMapView: React.FC<GoogleMapViewProps> = ({
  spots,
  travelSegments,
  activeDay
}) => {
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
        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: { lat: 35.6762, lng: 139.6503 }, // 도쿄 기본 위치
          zoom: 13,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        const directionsServiceInstance = new google.maps.DirectionsService();
        const directionsRendererInstance = new google.maps.DirectionsRenderer({
          draggable: false,
          suppressMarkers: false,
        });

        directionsRendererInstance.setMap(mapInstance);

        setMap(mapInstance);
        setDirectionsService(directionsServiceInstance);
        setDirectionsRenderer(directionsRendererInstance);
      } catch (error) {
        console.error('Google Maps 초기화 실패:', error);
      }
    };

    // Google Maps API 로드 확인
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      // API 키가 없으면 Mock 지도 표시
      console.warn('Google Maps API 키가 설정되지 않았습니다. Mock 지도를 표시합니다.');
    }
  }, []);

  // 관광지 마커 업데이트
  useEffect(() => {
    if (!map || !spots.length) return;

    // 좌표가 있는 관광지만 필터링
    const validSpots = spots.filter(spot => spot.latitude && spot.longitude);
    if (!validSpots.length) return;

    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));
    const newMarkers: google.maps.Marker[] = [];

    // 새로운 마커 추가
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
                <text x="20" y="26" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${index + 1}</text>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(40, 40),
          },
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

    // 모든 마커를 포함하도록 지도 범위 조정
    if (newMarkers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      newMarkers.forEach(marker => {
        const position = marker.getPosition();
        if (position) bounds.extend(position);
      });
      map.fitBounds(bounds);
    }
  }, [map, spots]);

  // 경로 표시
  useEffect(() => {
    if (!directionsService || !directionsRenderer || spots.length < 2) {
      if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
      }
      return;
    }

    // 좌표가 있는 관광지만 필터링
    const validSpots = spots.filter(spot => spot.latitude && spot.longitude);
    if (validSpots.length < 2) {
      if (directionsRenderer) {
        directionsRenderer.setDirections({ routes: [] });
      }
      return;
    }

    const waypoints = validSpots.slice(1, -1).map(spot => ({
      location: { lat: spot.latitude!, lng: spot.longitude! },
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin: { lat: validSpots[0].latitude!, lng: validSpots[0].longitude! },
      destination: { lat: validSpots[validSpots.length - 1].latitude!, lng: validSpots[validSpots.length - 1].longitude! },
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
      optimizeWaypoints: true,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        directionsRenderer.setDirections(result);
      } else {
        console.warn('경로 표시 실패:', status);
      }
    });
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
          <h3 className="font-semibold text-gray-900">Day {activeDay} 지도</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{spots.length}개 관광지</span>
            </div>
            {travelSegments.length > 0 && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>총 이동시간: {calculateTotalTravelTime()}분</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 지도 컨테이너 */}
      <div className="flex-1 relative">
        <div ref={mapRef} className="w-full h-full" />
        
        {/* 지도 로딩 오버레이 */}
        {!map && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">지도 뷰</h3>
              <p className="text-sm">Google Maps 연동 예정</p>
              <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-xs text-gray-400">지도 데이터 ©2025 Google 약관 200미터</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 관광지 목록 (모바일용) */}
      {spots.length > 0 && (
        <div className="lg:hidden p-4 bg-white border-t max-h-48 overflow-y-auto">
          <h4 className="font-medium text-gray-900 mb-2">오늘의 일정</h4>
          <div className="space-y-2">
            {spots.map((spot, index) => (
              <div key={spot.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{spot.location}</p>
                  <p className="text-xs text-gray-600">{spot.address}</p>
                </div>
                {spot.time && (
                  <div className="text-xs text-blue-600">{spot.time}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapView;
