import SocialLinks from "./components/social-links";
import Link from "next/link";
import Quotes from "@/app/(public)/components/quotes";
import ContextWrapper from "@/app/(public)/components/context-wrapper";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-center gap-4 text-xl p-4">
            <div className="flex flex-col items-center justify-center gap-1">
                <div
                    className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] dark:before:bg-linear-to-br dark:before:from-transparent dark:before:to-blue-700 dark:before:opacity-10 dark:after:from-sky-900 dark:after:via-[#0141ff] dark:after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] lg:before:h-[360px]">
                    <div className='text-center'>
                        <h1 className='font-extrabold text-2xl'>Ivan Yeremenko</h1>
                    </div>
                </div>
                <Suspense fallback={<Loading/>}>
                    <Quotes/>
                    <SocialLinks/>
                </Suspense>
            </div>
            <Link href='./cv'>
                <ContextWrapper>
                    <span className='font-bold text-xl'>CV</span>
                </ContextWrapper>
            </Link>
        </main>
    );
}
