import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg 브레이크포인트 (1024px)
    };

    // 초기 체크
    checkIsMobile();

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', checkIsMobile);

    // 클린업
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};
