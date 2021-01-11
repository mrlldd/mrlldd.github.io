import { useEffect, useState } from 'react';

export interface Size {
  width: number;
  height: number;
}

export function useSizeState(sizeFactory: () => Size): [Size] {
  const [size, setSize] = useState<Size>(sizeFactory);
  useEffect(() => {
    function resizeEventListener() {
      setSize(sizeFactory());
    }

    function performEventListenerAction(
      action: (type: string, listener: () => void) => void
    ) {
      action('resize', resizeEventListener);
      action('orientationchange', resizeEventListener);
    }

    performEventListenerAction(window.addEventListener);
    return () => performEventListenerAction(window.removeEventListener);
  }, [sizeFactory]);
  return [size];
}
