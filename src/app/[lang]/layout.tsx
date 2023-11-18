import type {Metadata} from 'next'
import './globals.css'
import NavBar from "@/components/NavBar/NavBar";
import {Locale} from "../../../i18n.config";


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
        <body>
        <NavBar lang={params.lang}/>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}
