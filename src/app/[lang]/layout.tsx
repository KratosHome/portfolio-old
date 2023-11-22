import type {Metadata} from 'next'
import './globals.css'
import NavBar from "@/components/NavBar/NavBar";
import localFont from 'next/font/local'
import {Locale} from "../../../i18n.config";
import ReduxProvider from "@/app/[lang]/provider";

const JetBrainsMono = localFont({
    src: '../fonts/webfonts/JetBrainsMono-Light.woff2',
    variable: '--font-jetbrains-mono',
});

const consolas = localFont({
    src: '../fonts/consolas/consolas.ttf',
    variable: '--font-consolas',
});

const JetBrainsMonoBold = localFont({
    src: '../fonts/webfonts/JetBrainsMono-Bold.woff2',
    variable: '--font-jetbrains-mono-bold',
});


export const metadata: Metadata = {
    title: 'Frontend-End',
    description: 'Development of complex and interesting projects',
}

export default function RootLayout({
                                       children,
                                       params
                                   }: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    return (
        <html lang={params.lang}>
        <ReduxProvider>
            <body className={`${JetBrainsMono.variable} ${consolas.variable} ${JetBrainsMonoBold.variable}`}>
            <NavBar lang={params.lang}/>
            <main>
                {children}
            </main>
            </body>
        </ReduxProvider>
        </html>
    )
}
