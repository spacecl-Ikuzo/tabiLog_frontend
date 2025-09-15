import React from 'react';

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed left-2 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        isOpen ? 'rotate-180' : ''
      }`}
      title={isOpen ? '사이드바 닫기' : '마이페이지 열기'}
    >
      <svg 
        className="w-4 h-4 text-gray-600 transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>
  );
};

export default SidebarToggleButton;
