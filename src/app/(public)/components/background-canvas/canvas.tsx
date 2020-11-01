"use client";
import React, {useEffect, useState} from 'react';
import {Layer, Stage} from 'react-konva';
import DynamicText from './components/dynamic-text';
import {useSizeState} from './use-size-state';


type Device = 'mobile' | 'desktop';

const deviceQuery = window.matchMedia('(min-width: 768px)');

const defineDevice = ({matches}: {matches: boolean}) =>  {
    return matches ? 'desktop' : 'mobile';
}

function Canvas() {
    const [size] = useSizeState(() => {
        const rect = document.documentElement.getBoundingClientRect();
        return {
            height: rect.height,
            width: rect.width,
        };
    });
    const [device, setDevice] = useState<Device>(() => defineDevice(deviceQuery));

    useEffect(() => {
        const listener = (e: MediaQueryListEvent) => setDevice(defineDevice(e))
        deviceQuery.addEventListener('change', listener);
        return () => deviceQuery.removeEventListener('change', listener);
    })
    const valuesCount = device === 'mobile' ? 12 : 24;

    return (
        <div className="fixed top-0 left-0 z-[-2000]" data-testid="Canvas">
            <Stage width={size.width} height={size.height} className="bg-[--background-rgb]">
                <Layer>
                    {Array(valuesCount)
                        .fill(undefined)
                        .map((_, index) => (
                            <DynamicText
                                key={`${index}:dynamic-text`}
                                size={size}
                            />
                        ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default Canvas;
