import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --------- 스무스 스크롤 유틸 ---------
export function smoothScrollTo(targetY: number, duration = 600, container: HTMLElement | Window = window): void {
  const startY = container instanceof Window ? window.scrollY : (container as HTMLElement).scrollTop;
  const changeY = targetY - startY;
  const startTime = performance.now();

  const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    const newY = startY + changeY * eased;

    if (container instanceof Window) {
      window.scrollTo(0, newY);
    } else {
      (container as HTMLElement).scrollTop = newY;
    }

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}
