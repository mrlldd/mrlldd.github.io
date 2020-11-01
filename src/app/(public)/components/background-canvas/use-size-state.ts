import {useEffect, useState} from 'react';
import {ScreenSize} from "@/app/(public)/components/background-canvas/types";

export function useSizeState(sizeFactory: () => ScreenSize): [ScreenSize] {
    const [size, setSize] = useState<ScreenSize>(sizeFactory);
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
