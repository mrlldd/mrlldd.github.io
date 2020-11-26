import React, { useEffect, useState } from 'react'
import './DynamicText.css'
import Konva from 'konva'
import { Text } from 'react-konva'
import { getRandomTextValue } from './dynamic-text-values'
import { Size } from '../../utils/hooks-utils'

interface Position {
    x: number
    y: number
}

function calculateDeltaVector(
    rads: number,
    sign: number,
    pathLength: number
): Position {
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
    position: Position
    pathLength: number
    value: string
}

function calculatePosition(layerSize: Size): Position {
    return {
        x: layerSize.width * Math.random(),
        y: layerSize.height * Math.random(),
    }
}

function calculateDynamicTextConfig(
    nonce: number,
    layerSize: Size
): DynamicTextConfig {
    const opacityWithNonce = nonce + 0.35
    return {
        duration: nonce * 1.5 + 2.5,
        fontSize: 14 + nonce * 22,
        opacity: opacityWithNonce > 1 ? 0.7 : opacityWithNonce,
        position: calculatePosition(layerSize),
        rotation: ((nonce * 180 - 90) * Math.PI) / 180,
        side: nonce % 0.02 > 0.01,
        pathLength: nonce * 100 + 100,
        value: getRandomTextValue(),
    }
}

const DynamicText: React.FC<Size> = (props: Size) => {
    const [stage, setStage] = useState<DynamicTextStages>(
        DynamicTextStages.Start
    )
    const [config, setConfig] = useState(
        calculateDynamicTextConfig(Math.random(), props)
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
                const newPosition = calculatePosition(props)
                textFigure.to({
                    x: newPosition.x,
                    y: newPosition.y,
                    duration: 0,
                    onFinish() {
                        setStage(DynamicTextStages.Start)
                        setConfig(
                            calculateDynamicTextConfig(Math.random(), props)
                        )
                    },
                })
                break
        }
    }, [config, stage, textFigure])
    return (
        <Text
            ref={(text) => text && setTextFigure(text)}
            text={config.value}
            y={config.position.y}
            x={config.position.x}
            opacity={0}
            fontSize={config.fontSize}
            fontFamily={'JetBrains Mono'}
            rotation={(config.rotation * 180) / Math.PI}
            fill={'rgba(140,140,140,0.6)'}
        />
    )
}

export default DynamicText
