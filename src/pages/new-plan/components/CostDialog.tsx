import React from 'react';
import { Spot } from '@/lib/type';

interface CostDialogProps {
  isOpen: boolean;
  spot: Spot | null;
  expenseInputs: {
    amount: number;
    category: string;
  };
  setExpenseInputs: React.Dispatch<
    React.SetStateAction<{
      amount: number;
      category: string;
    }>
  >;
  onSave: () => void;
  onClose: () => void;
  isLoading: boolean;
}

const CostDialog: React.FC<CostDialogProps> = ({
  isOpen,
  spot,
  expenseInputs,
  setExpenseInputs,
  onSave,
  onClose,
  isLoading,
}) => {
  if (!isOpen || !spot) return null;

  const categories = [
    { key: 'LODGING', icon: 'lodging', label: '宿泊' },
    { key: 'AVIATION', icon: 'airplane', label: '航空' },
    { key: 'TRANSPORT', icon: 'traffic', label: '交通' },
    { key: 'FOOD', icon: 'restaurant', label: '食費' },
    { key: 'SHOPPING', icon: 'shopping', label: '買い物' },
    { key: 'SIGHTSEEING', icon: 'ticket', label: '観光' },
    { key: 'OTHER', icon: 'etc', label: 'その他' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
        {/* 제목 */}
        <h3 className="text-xl font-bold text-orange-500 mb-6 text-center">費用修正</h3>

        {/* 金額入力 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">金額入力(円)</label>
          <input
            type="text"
            value={expenseInputs.amount || ''}
            onChange={(e) => {
              const value = e.target.value.replace(/[^\d]/g, '');
              setExpenseInputs((prev) => ({ ...prev, amount: parseInt(value) || 0 }));
            }}
            placeholder="1,000"
            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* カテゴリ選択 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">カテゴリ</label>
          <div className="grid grid-cols-7 gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setExpenseInputs((prev) => ({ ...prev, category: category.key }))}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  expenseInputs.category === category.key
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <img
                  src={
                    import.meta.env.PROD
                      ? `https://storage.googleapis.com/tabilog-dev/svg/${category.icon}.svg`
                      : `./svg/${category.icon}.svg`
                  }
                  alt={category.label}
                  className={`w-6 h-6 mb-1 ${expenseInputs.category === category.key ? 'brightness-0 invert' : ''}`}
                />
                <span className="text-xs font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            disabled={isLoading}
          >
            キャンセル
          </button>
          <button
            onClick={onSave}
            className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? '修正中...' : '修正'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostDialog;
