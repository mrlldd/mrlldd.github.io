import React, {useEffect, useState} from 'react';
import './BackgroundCanvas.css';
import {Layer, Stage, Text} from "react-konva";

interface Size {
    width: number;
    height: number;
}

const textValues = [
    "void",
    "public",
    "private",
    "protected",
    "int",
    "observable$",
    "class",
    "struct",
    ".Equals()",
    "Task<TResult>",
    "Task",
    "typeof(Startup).Assembly",
    "store",
    "dispatch",
    "useState",
    "useEffect",
    "[] != []",
    "async",
    "await"
]

interface DynamicTextProps {
    id: number;
    value: string;
    nonce: number;
    layerSize: Size;
}

function calculateDeltaVector(rads: number, sign: number): { x: number, y: number } {
    const sin = Math.sin(rads);
    const cos = Math.cos(rads);
    return {
        x: sign * cos * pathLength,
        y: sign * sin * pathLength
    };
}

enum DynamicTextStages {
    Start,
    End,
    BeforeStart
}

interface DynamicTextConfig {
    duration: number;
    opacity: number;
    fontSize: number;
    rotation: number;
    side: boolean;
    position: {
        x: number;
        y: number;
    }
}

function calculateDynamicTextConfig(nonce: number, layerSize: Size): DynamicTextConfig {
    const opacityWithNonce = nonce + 0.35;
    return {
        duration: nonce * 1.5 + 1.5,
        fontSize: 20 + nonce * 16,
        opacity: opacityWithNonce > 1 ? 0.7 : opacityWithNonce,
        position: {
            x: layerSize.width * Math.random(),
            y: layerSize.height * Math.random()
        },
        rotation: nonce * 720 - 360 * Math.PI / 180,
        side: nonce - 0.5 > 0
    }
}

const pathLength = 100;

const DynamicText: React.FC<DynamicTextProps> = (props: DynamicTextProps) => {
    const [state, setter] = useState<DynamicTextStages>(DynamicTextStages.Start);
    const [config, setConfig] = useState(calculateDynamicTextConfig(Math.random(), props.layerSize))
    return (<Text
        ref={text => {
            if (!text) {
                return;
            }
            const delta = calculateDeltaVector(text.rotation() * Math.PI / 180, config.side ? 1 : -1);
            switch (state) {
                case DynamicTextStages.Start:
                    text.to({
                        opacity: config.opacity,
                        x: config.position.x + delta.x / 2,
                        y: config.position.y + delta.y / 2,
                        onFinish: () => setter(DynamicTextStages.End),
                        duration: config.duration / 2
                    })
                    break;
                case DynamicTextStages.End:
                    text.to({
                        opacity: 0,
                        x: config.position.x + delta.x,
                        y: config.position.y + delta.y,
                        onFinish: () => setter(DynamicTextStages.BeforeStart),
                        duration: config.duration / 2
                    })
                    break;
                case DynamicTextStages.BeforeStart:
                    const newPosition = {
                        x: props.layerSize.width * Math.random(),
                        y: props.layerSize.height * Math.random()
                    };
                    text.to({
                        x: newPosition.x,
                        y: newPosition.y,
                        onFinish() {
                            setter(DynamicTextStages.Start);
                            setConfig(calculateDynamicTextConfig(Math.random(), props.layerSize));
                        },
                        duration: 0
                    })
                    break;

            }


        }}
        text={props.value}
        y={config.position.y}
        x={config.position.x}
        opacity={0}
        fontSize={config.fontSize}
        rotation={config.rotation * 180 / Math.PI}
        fill={'rgb(255, 255, 255, 0.5)'}
    />);
}


const BackgroundCanvas: React.FC = () => {
    const [size, setSize] = useState<Size>({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(() => {
        function resizeEventListener() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", resizeEventListener);
        return () => window.removeEventListener("resize", resizeEventListener)
    }, []);


    return (
        <div className='BackgroundCanvas' data-testid="BackgroundCanvas">
            <Stage width={size.width} height={size.height}>
                <Layer>
                    {textValues
                        .map((x, index) =>
                            <DynamicText
                                key={`${index}:${x}`}
                                layerSize={size}
                                id={index}
                                nonce={Math.random()}
                                value={x}/>)}
                </Layer>
            </Stage>
        </div>
    );
};

export default BackgroundCanvas;
