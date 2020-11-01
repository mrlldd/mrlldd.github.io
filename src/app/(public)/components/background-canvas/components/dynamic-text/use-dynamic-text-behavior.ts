import {useEffect, useRef, useState} from "react";
import Konva from "konva";
import {
    DynamicTextConfig,
    DynamicTextPosition, DynamicTextStages
} from "@/app/(public)/components/background-canvas/components/dynamic-text/types";
import {ScreenSize} from "@/app/(public)/components/background-canvas/types";
import {
    getPseudoRandomTextValue
} from "@/app/(public)/components/background-canvas/components/dynamic-text/dynamic-text-values";


function calculateDeltaVector(
    rads: number,
    sign: number,
    pathLength: number,
): DynamicTextPosition {
    return {
        x: sign * Math.cos(rads) * pathLength,
        y: sign * Math.sin(rads) * pathLength,
    };
}

function pseudoRandomPosition(layerSize: ScreenSize): DynamicTextPosition {
    return {
        x: layerSize.width * Math.random(),
        y: layerSize.height * Math.random(),
    };
}

function calculateDynamicTextConfig(
    nonce: number,
    layerSize: ScreenSize,
): DynamicTextConfig {
    const opacityWithNonce = nonce + 0.35;
    return {
        duration: nonce * 1.5 + 3,
        fontSize: 14 + nonce * 22,
        opacity: opacityWithNonce > 1 ? 0.7 : opacityWithNonce,
        position: pseudoRandomPosition(layerSize),
        rotation: nonce * 180 - 90,
        side: nonce % 0.02 > 0.01 ? 1 : -1,
        pathLength: nonce * 100 + 200,
        value: getPseudoRandomTextValue(nonce),
    };
}

export default function useDynamicTextBehavior(defaultSize: ScreenSize) {
    const [stage, setStage] = useState<DynamicTextStages>(DynamicTextStages.BeforeStart);
    const textRef = useRef<Konva.Text>(null);
    const sizeRef = useRef<ScreenSize>(defaultSize)

    const configRef = useRef<DynamicTextConfig>(null)

    useEffect(() => {
        const textFigure = textRef.current;
        if (!textFigure) {
            return;
        }

        const size = sizeRef.current;
        const config = configRef.current!;

        const calculateDelta = () => {
            return calculateDeltaVector(
                (textFigure.rotation() * Math.PI) / 180,
                config.side,
                config.pathLength
            );
        }

        switch (stage) {
            case DynamicTextStages.BeforeStart:
                textFigure.to({
                    ...pseudoRandomPosition(size),
                    duration: 0,
                    onFinish() {
                        configRef.current = calculateDynamicTextConfig(Math.random(), size);
                        setStage(DynamicTextStages.Start);
                    },
                });
                break;
            case DynamicTextStages.Start:
                const startDelta = calculateDelta();
                textFigure.to({
                    opacity: config.opacity,
                    x: config.position.x + startDelta.x / 2,
                    y: config.position.y + startDelta.y / 2,
                    onFinish: () => setStage(DynamicTextStages.End),
                    duration: config.duration / 2,
                });
                break;
            case DynamicTextStages.End:
                const endDelta = calculateDelta();
                textFigure.to({
                    opacity: 0,
                    x: config.position.x + endDelta.x,
                    y: config.position.y + endDelta.y,
                    onFinish: () => setStage(DynamicTextStages.BeforeStart),
                    duration: config.duration / 2,
                });
                break;

        }
    }, [stage]);

    return {
        textRef,
        sizeRef,
        config: configRef.current,
    };
}