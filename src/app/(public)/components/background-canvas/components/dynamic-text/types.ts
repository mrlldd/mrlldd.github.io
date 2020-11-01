export interface DynamicTextPosition {
    x: number;
    y: number;
}

export enum DynamicTextStages {
    Start,
    End,
    BeforeStart,
}

export interface DynamicTextConfig {
    duration: number;
    opacity: number;
    fontSize: number;
    rotation: number;
    side: number;
    position: DynamicTextPosition;
    pathLength: number;
    value: string;
}