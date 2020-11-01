'use client'
import dynamic from "next/dynamic";
import {ComponentProps} from "react";

const Quotes = dynamic(() => import("./quotes-block"), {ssr: false});

export default function WrappedQuotes(props: ComponentProps<typeof Quotes>) {
    return <Quotes {...props} />;
}