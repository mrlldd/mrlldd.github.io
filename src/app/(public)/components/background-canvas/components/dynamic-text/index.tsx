'use client';
import React, {useEffect} from 'react';
import {Text} from 'react-konva';
import useDynamicTextBehavior
    from "@/app/(public)/components/background-canvas/components/dynamic-text/use-dynamic-text-behavior";
import {ScreenSize} from "@/app/(public)/components/background-canvas/types";

interface DynamicTextProps {
    size: ScreenSize;
}

function DynamicText(props: DynamicTextProps) {

    const {sizeRef, textRef, config} = useDynamicTextBehavior(props.size)
    useEffect(() => {
        sizeRef.current = props.size;
    }, [props.size, sizeRef]);


    return (
        <Text
            ref={textRef}
            text={config?.value}
            y={config?.position.y}
            x={config?.position.x}
            opacity={0}
            fontSize={config?.fontSize}
            fontFamily='JetBrains Mono'
            rotation={config?.rotation}
            fill={'rgba(140,140,140,0.6)'}
        />
    );
};

export default DynamicText;
