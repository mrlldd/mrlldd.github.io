import React, { useEffect, useState } from 'react'
import './BackgroundCanvas.css'
import { Layer, Stage } from 'react-konva'
import DynamicText from '../DynamicText/DynamicText'

export interface Size {
    width: number
    height: number
}

const BackgroundCanvas: React.FC = () => {
    const [size, setSize] = useState<Size>(() => {
        const rect = document.documentElement.getBoundingClientRect()
        return {
            width: rect.width,
            height: rect.height,
        }
    })
    useEffect(() => {
        function resizeEventListener() {
            const rect = document.documentElement.getBoundingClientRect()
            const size: Size = {
                width: rect.width,
                height: rect.height,
            }
            setSize(size)
        }

        function performEventListenerAction(
            action: (type: string, listener: () => void) => void
        ) {
            action('resize', resizeEventListener)
            action('orientationchange', resizeEventListener)
        }

        performEventListenerAction(window.addEventListener)
        return () => performEventListenerAction(window.removeEventListener)
    }, [])

    return (
        <div className="BackgroundCanvas" data-testid="BackgroundCanvas">
            <Stage width={size.width} height={size.height} className="stage">
                <Layer>
                    {Array(24)
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
