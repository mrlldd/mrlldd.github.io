import React, { useCallback, useEffect, useState } from 'react'
import './BackgroundCanvas.css'
import { Layer, Stage, Text } from 'react-konva'
import Konva from 'konva'
import DynamicText from '../DynamicText/DynamicText'

export interface Size {
    width: number
    height: number
}

const BackgroundCanvas: React.FC = () => {
    const [size, setSize] = useState<Size>({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    useEffect(() => {
        function resizeEventListener() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        function performEventListenerAction(
            action: (type: string, listener: () => void) => void
        ) {
            action('resize', resizeEventListener)
        }

        performEventListenerAction(window.addEventListener)
        return () => performEventListenerAction(window.removeEventListener)
    }, [])

    return (
        <div className="BackgroundCanvas" data-testid="BackgroundCanvas">
            <Stage width={size.width} height={size.height}>
                <Layer>
                    {Array(10)
                        .fill(undefined)
                        .map((_, index) => (
                            <DynamicText
                                key={`${index}:dynamic-text`}
                                layerSize={size}
                            />
                        ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default BackgroundCanvas
