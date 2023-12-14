import type {Metadata} from 'next'
import './globals.css'
import NavBar from "@/components/NavBar/NavBar";
import localFont from 'next/font/local'
import {Locale} from "../../../i18n.config";
import ReduxProvider from "@/app/[lang]/provider";
import {getDictionary} from "../lib/dictionary";
import Footer from "@/components/Footer/Footer";
import { Amplify } from 'aws-amplify';
import amplifyConfig from '@/amplifyconfiguration.json';

Amplify.configure(
    amplifyConfig,
    { ssr: true }
);
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

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
        <ReduxProvider>
            <body className={`${JetBrainsMono.variable} ${consolas.variable} ${JetBrainsMonoBold.variable}`}>
            <NavBar navigation={navigation}/>
            <main>
                {children}
            </main>
            </body>
            <Footer/>
        </ReduxProvider>
        </html>
    )
}
