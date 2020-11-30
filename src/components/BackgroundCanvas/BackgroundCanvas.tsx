import React from 'react'
import './BackgroundCanvas.css'
import { Layer, Stage } from 'react-konva'
import DynamicText from '../DynamicText/DynamicText'
import { useSizeState } from '../../utils/hooks-utils'

const BackgroundCanvas: React.FC = (props) => {
    const [size] = useSizeState(() => {
        const rect = document.documentElement.getBoundingClientRect()
        return {
            height: rect.height,
            width: rect.width,
        }
    })
    return (
        <>
            <div className="BackgroundCanvas" data-testid="BackgroundCanvas">
                <Stage
                    width={size.width}
                    height={size.height}
                    className="stage"
                >
                    <Layer>
                        {Array(24)
                            .fill(undefined)
                            .map((_, index) => (
                                <DynamicText
                                    key={`${index}:dynamic-text`}
                                    width={size.width}
                                    height={size.height}
                                />
                            ))}
                    </Layer>
                </Stage>
            </div>
            {props.children}
        </>
    )
}

export default BackgroundCanvas
