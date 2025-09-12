import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';

interface CommonPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  maxWidth?: string;
}

export default function CommonPopup({
  open,
  onOpenChange,
  title,
  children,
  onConfirm,
  onCancel,
  confirmText = '登録',
  cancelText = 'キャンセル',
  confirmButtonColor = 'bg-[#FF5722] hover:bg-[#E64A19]',
  cancelButtonColor = 'bg-gray-400 hover:bg-gray-500',
  maxWidth = 'max-w-sm',
}: CommonPopupProps) {
  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${maxWidth} rounded-[24px] bg-white p-6`}>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center text-[#FF5722] font-bold text-lg">{title}</DialogTitle>

          <div className="flex flex-col items-center space-y-3">{children}</div>
        </DialogHeader>

        <DialogFooter className="flex flex-row gap-3 mt-6">
          <Button
            variant="outline"
            onClick={handleCancel}
            className={`flex-1 ${cancelButtonColor} text-white border-none rounded-lg py-3`}
          >
            {cancelText}
          </Button>
          <Button
            onClick={handleConfirm}
            className={`flex-1 ${confirmButtonColor} text-white border-none rounded-lg py-3`}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
