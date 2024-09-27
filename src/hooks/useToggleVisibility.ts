import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

export interface useToggleVisibilityProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  useVisibilityRef: MutableRefObject<HTMLDivElement | null>;
  handleToggleVisibility: () => void;
}

const useToggleVisibility = (initialState: boolean): useToggleVisibilityProps => {
  const useVisibilityRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(initialState);

  const handleToggleVisibility = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (useVisibilityRef.current && !useVisibilityRef.current.contains(e.target as Node))
        setIsVisible(false);
    };

    if (isVisible) {
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isVisible]);

  return {
    isVisible,
    setIsVisible,
    useVisibilityRef,
    handleToggleVisibility,
  };
};

export default useToggleVisibility;
