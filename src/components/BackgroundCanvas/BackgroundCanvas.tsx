import React from 'react'
import './BackgroundCanvas.css'
import { Layer, Stage } from 'react-konva'
import DynamicText from '../DynamicText/DynamicText'
import { useSizeState } from '../../utils/hooks-utils'

function deviceDetectionNotifier(device: 'desktop' | 'mobile'): void {
    console.log(`detected ${device} device!`)
}
function isMobile(): boolean {
    const result = 'ontouchstart' in document.documentElement
    deviceDetectionNotifier(result ? 'mobile' : 'desktop')
    return result
}

const valuesCount = isMobile() ? 12 : 24

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
                        {Array(valuesCount)
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
