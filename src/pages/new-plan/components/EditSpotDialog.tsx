import React from 'react';
import { Spot } from '@/lib/type';

interface EditSpotDialogProps {
  isOpen: boolean;
  spot: Spot | null;
  spots: Record<number, Spot[]>;
  activeDay: number;
  onClose: () => void;
  onChangeSpot: () => void;
  onUpdateTransportMode: (spotId: number, mode: 'walking' | 'driving' | 'transit') => void;
  onUpdateDuration: (newDuration: string) => void;
}

const EditSpotDialog: React.FC<EditSpotDialogProps> = ({
  isOpen,
  spot,
  spots,
  activeDay,
  onClose,
  onChangeSpot,
  onUpdateTransportMode,
  onUpdateDuration,
}) => {
  if (!isOpen || !spot) return null;

  const currentSpots = spots[activeDay] || [];
  const spotIndex = currentSpots.findIndex((s) => s.id === spot.id);
  const isFirstSpot = spotIndex === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">観光地編集</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{spot.location}</h4>
            <p className="text-sm text-gray-600 mb-4">{spot.address}</p>
          </div>
          {/* 첫 번째 스팟(호텔)이 아닐 때만 이동 방법과 체류시간 선택 표시 */}
          {isFirstSpot ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">移動手段</label>
                <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500">
                  🏨 ホテル (移動手段不要)
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">滞在時間</label>
                <div className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500">
                  🏨 ホテル (滞在時間自動設定)
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">移動手段</label>
                <select
                  value={spot.transportMode || 'walking'}
                  onChange={(e) => {
                    const newMode = e.target.value as 'walking' | 'driving' | 'transit';
                    onUpdateTransportMode(spot.id, newMode);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="walking">🚶 徒歩</option>
                  <option value="driving">🚗 車</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">滞在時間</label>
                <select
                  value={spot.duration}
                  onChange={(e) => onUpdateDuration(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="30分">30分</option>
                  <option value="1時間">1時間</option>
                  <option value="1時間30分">1時間30分</option>
                  <option value="2時間">2時間</option>
                  <option value="2時間30分">2時間30分</option>
                  <option value="3時間">3時間</option>
                  <option value="3時間30分">3時間30分</option>
                  <option value="4時間">4時間</option>
                  <option value="4時間30分">4時間30分</option>
                  <option value="5時間">5時間</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onChangeSpot}
            className="px-3 py-2 text-sm text-blue-600 border border-blue-300 rounded-md hover:bg-blue-50 transition-colors"
          >
            📍 観光地変更
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button onClick={onClose} className="px-3 py-2 text-sm bg-pink-500 text-white rounded-md hover:bg-pink-600">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSpotDialog;
