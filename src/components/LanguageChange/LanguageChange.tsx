"use client"
import React from 'react';
import {i18n} from "../../../i18n.config";
import {usePathname} from "next/navigation";
import Link from "next/link";


export default function LanguageChange() {

    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <section>
            {
                pathName === "/ua" ? <>en</> : <>ua</>
            }
            <ul>
                {i18n.locales.map(locale => {
                    return (
                        <li key={locale}>
                            <Link
                                href={redirectedPathName(locale)}
                            >
                                {locale}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

