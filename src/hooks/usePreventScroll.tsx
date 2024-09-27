import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

export interface usePreventScrollProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  useOpenRef: MutableRefObject<HTMLDivElement | null>;
  handleToggleOpen: () => void;
}

const usePreventScroll = (initialState: boolean): usePreventScrollProps => {
  const [isOpened, setIsOpened] = useState(initialState);
  const useOpenRef = useRef<HTMLDivElement>(null);

  const handleToggleOpen = useCallback(() => {
    setIsOpened((isOpened) => !isOpened);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (useOpenRef.current && !useOpenRef.current.contains(e.target as Node)) setIsOpened(false);
    };

    if (isOpened) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('mouseup', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isOpened]);

  return { isOpened, setIsOpened, useOpenRef, handleToggleOpen };
};

export default usePreventScroll;
