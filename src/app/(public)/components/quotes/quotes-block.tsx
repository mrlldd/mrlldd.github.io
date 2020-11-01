'use client';
import TextTransition, {presets} from "react-text-transition";
import {getRandomQuoteValue} from "@/app/(public)/components/quotes/quote-values";
import {getRandomEnergyValue} from "@/app/(public)/components/quotes/energy-values";
import useIntervalValue from "@/app/(public)/components/quotes/use-interval-value";

const quoteInterval = {
    intervalMs: 3000
} as const;

const energyInterval = {
    intervalMs: quoteInterval.intervalMs * 5,
    defaultValue: 'Using force to'
} as const;

export default function Quotes() {

    const quote = useIntervalValue(getRandomQuoteValue, quoteInterval);
    const energy = useIntervalValue(getRandomEnergyValue, energyInterval);

    return <div className='text-sm text-center flex flex-col items-center'>
        <TextTransition inline direction='down'
                        className='max-w-full flex justify-center text-center text-nowrap font-extralight'
                        springConfig={presets.default}>
            {energy}
        </TextTransition>
        <TextTransition springConfig={presets.default}
                        direction='down'
                        inline
                        className='max-w-full italic font-light flex justify-center text-center'>
            {quote}
        </TextTransition>
    </div>
}