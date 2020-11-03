import React, { useEffect, useState } from 'react'
import './DynamicText.css'
import Konva from 'konva'
import { Text } from 'react-konva'
import { Size } from '../BackgroundCanvas/BackgroundCanvas'

const textValues = [
    'void',
    'public',
    'private',
    'protected',
    'int',
    'observable$',
    'class',
    'struct',
    '.Equals()',
    'Task<TResult>',
    'Task',
    'typeof(Startup).Assembly',
    'store',
    'dispatch',
    'useState',
    'useEffect',
    '[] != []',
    'async',
    'await',
]

interface DynamicTextProps {
    layerSize: Size
}

function calculateDeltaVector(
    rads: number,
    sign: number,
    pathLength: number
): { x: number; y: number } {
    return {
        x: sign * Math.cos(rads) * pathLength,
        y: sign * Math.sin(rads) * pathLength,
    }
}

enum DynamicTextStages {
    Start,
    End,
    BeforeStart,
}

interface DynamicTextConfig {
    duration: number
    opacity: number
    fontSize: number
    rotation: number
    side: boolean
    position: {
        x: number
        y: number
    }
    pathLength: number
    value: string
}

function calculateDynamicTextConfig(
    nonce: number,
    layerSize: Size
): DynamicTextConfig {
    const opacityWithNonce = nonce + 0.35
    return {
        duration: nonce * 1.5 + 1.5,
        fontSize: 20 + nonce * 16,
        opacity: opacityWithNonce > 1 ? 0.7 : opacityWithNonce,
        position: {
            x: layerSize.width * Math.random(),
            y: layerSize.height * Math.random(),
        },
        rotation: ((nonce * 180 - 90) * Math.PI) / 180,
        side: nonce % 0.02 > 0.01,
        pathLength: nonce * 100 + 100,
        value: textValues[Math.round(Math.random() * textValues.length) - 1],
    }
}

const DynamicText: React.FC<DynamicTextProps> = (props: DynamicTextProps) => {
    const [stage, setStage] = useState<DynamicTextStages>(
        DynamicTextStages.Start
    )
    const [config, setConfig] = useState(
        calculateDynamicTextConfig(Math.random(), props.layerSize)
    )
    const [textFigure, setTextFigure] = useState<Konva.Text>()
    useEffect(() => {
        if (!textFigure) {
            return
        }
        const delta = calculateDeltaVector(
            (textFigure.rotation() * Math.PI) / 180,
            config.side ? 1 : -1,
            config.pathLength
        )
        switch (stage) {
            case DynamicTextStages.Start:
                textFigure.to({
                    opacity: config.opacity,
                    x: config.position.x + delta.x / 2,
                    y: config.position.y + delta.y / 2,
                    onFinish: () => setStage(DynamicTextStages.End),
                    duration: config.duration / 2,
                })
                break
            case DynamicTextStages.End:
                textFigure.to({
                    opacity: 0,
                    x: config.position.x + delta.x,
                    y: config.position.y + delta.y,
                    onFinish: () => setStage(DynamicTextStages.BeforeStart),
                    duration: config.duration / 2,
                })
                break
            case DynamicTextStages.BeforeStart:
                const newPosition = {
                    x: props.layerSize.width * Math.random(),
                    y: props.layerSize.height * Math.random(),
                }
                textFigure.to({
                    x: newPosition.x,
                    y: newPosition.y,
                    duration: 0,
                    onFinish() {
                        setStage(DynamicTextStages.Start)
                        setConfig(
                            calculateDynamicTextConfig(
                                Math.random(),
                                props.layerSize
                            )
                        )
                    },
                })
                break
        }
    }, [config, config.position, stage, textFigure])
    return (
        <Text
            ref={(text) => text && setTextFigure(text)}
            text={config.value}
            y={config.position.y}
            x={config.position.x}
            opacity={0}
            fontSize={config.fontSize}
            rotation={(config.rotation * 180) / Math.PI}
            fill={'rgb(255, 255, 255, 0.5)'}
        />
    )
}

export default DynamicText
