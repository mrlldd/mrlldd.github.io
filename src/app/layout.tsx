import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";
import {jetBrainsMono} from "@/app/fonts";
import Providers from "@/app/Providers";
import SiteFooter from "@/components/meta/SiteFooter";

export const metadata: Metadata = {
    title: "Ivan Yeremenko",
    description: "Ivan Yeremenko personal site",
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
        <body className={`${jetBrainsMono.className} antialiased w-full h-screen`}>
        <Providers/>
        {children}
        <SiteFooter/>
        </body>
        </html>
    );
}
