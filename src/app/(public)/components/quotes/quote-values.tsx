import {ReactNode} from "react";
import createPseudoRandomPicker from "@/app/(public)/components/quotes/create-pseudo-random-picker";

const quotes: ReadonlyArray<ReactNode> = [
    'make electrons do math',
    'design that feature',
    'make your life easier',
    'solve that bug',
    'isolate that context',
    'await that promise',
    'research that thing',
    'cover that code with tests',
    'deep-dive in the logs',
    'log every disturbance in the stack trace',
    <span key='refactor-dark-side'>
        refactor the{' '}
        <span className='font-bold text-red-600'>
            dark side
        </span>{' '}
        out of that codebase
    </span>,
    'catch that exception before it strikes back',
    'refactor that mess',
    'ship that feature',
    'document that function',
    'integrate that service',
    'integrate with that API',
    'optimize that loop',
    'rebase that branch',
    'review that PR',
    'mount that component',
    'optimize that handler',
    <span key='deploy-to-prod'>
        deploy to prod...{' '}
        <span className='font-extralight text-[12px]'>
            *this is the way*
        </span>
    </span>,
    'test what others fear to test',
    'bring balance to that feature set',
    'make that feature bizarre, but fabulous',
    'spin that logic into something beautiful',
    'learn new stuff',
    'expand knowledge',
    'help you',
    'provide status of that task',
    'transform tech debt into clarity',
    'commit with the strength of someone who knows they’ve grown',
    <span key='black-flash'>write code that lands like a perfectly timed{' '}
        <span className='font-bold text-red-600 text-shadow-black text-shadow-sm'>
            Black Flash
        </span>
    </span>,
    <span key='team-jjk-meme'>stand by your team like a three-man formation:{' '}
        <span className='font-bold text-purple-600'>sharp</span>,{' '}
        <span className='font-bold text-blue-600'>focused</span>,{' '}
        <span className='font-bold text-red-600'>unshakable</span>
    </span>
] as const;

const picker = createPseudoRandomPicker(0, quotes.length - 1);

export const getRandomQuoteValue = () => {
    return quotes[picker()]
}


