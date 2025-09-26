import React from 'react';

interface DepartureTime {
  hour: number;
  minute: number;
}

interface DepartureTimeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onTimeChange?: (time: DepartureTime) => void;
  departureTime: DepartureTime;
  setDepartureTime: React.Dispatch<React.SetStateAction<DepartureTime>>;
}

const DepartureTimeDialog: React.FC<DepartureTimeDialogProps> = ({
  isOpen,
  onClose,
  onSave,
  departureTime,
  setDepartureTime,
}) => {
  const handleTimeChange = (newTime: DepartureTime) => {
    setDepartureTime(newTime);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">出発時間設定</h3>

        {/* 현재 선택된 시간 표시 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg text-center">
          <div className="text-sm text-gray-600 mb-1">選択された出発時間</div>
          <div className="text-2xl font-bold text-pink-600">
            {departureTime.hour.toString().padStart(2, '0')}:{departureTime.minute.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">時間</label>
            <select
              value={departureTime.hour}
              onChange={(e) => handleTimeChange({ ...departureTime, hour: parseInt(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">分</label>
            <select
              value={departureTime.minute}
              onChange={(e) => handleTimeChange({ ...departureTime, minute: parseInt(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button onClick={onSave} className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartureTimeDialog;
