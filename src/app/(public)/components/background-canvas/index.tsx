'use client';
import dynamic from "next/dynamic";
import {ComponentProps} from "react";

const Canvas = dynamic(() => import("./canvas"), {ssr: false});

export default function BackgroundCanvas(props: ComponentProps<typeof Canvas>) {
    return <Canvas {...props} />;
}