import React from 'react';
import { Save, X } from 'lucide-react';

interface SaveConfirmationDialogProps {
  isOpen: boolean;
  onSave: () => void;
  onCancel: () => void;
  isSaving: boolean;
}

const SaveConfirmationDialog: React.FC<SaveConfirmationDialogProps> = ({ isOpen, onSave, onCancel, isSaving }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
        {/* 제목 */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">保存確認</h3>

        {/* 메시지 */}
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">設定した観光地スポットを保存しますか？</p>
          <p className="text-sm text-gray-500">
            保存するとバックエンドサーバーに永続的に保存され、
            <br />
            保存しないと設定した観光地が削除されます。
          </p>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-3 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
            disabled={isSaving}
          >
            <X className="w-4 h-4" />
            キャンセル
          </button>
          <button
            onClick={onSave}
            className="flex-1 px-3 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                保存中...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                保存
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveConfirmationDialog;
