"use client"
import React from 'react';
import Image from "next/image";
import {useRouter} from 'next/navigation';
import {usePathname} from 'next/navigation';
import "./LanguageChange.scss"
import ButtonAnimation from "@/components/Animation/ButtonAnimation/ButtonAnimation";

export default function LanguageChange() {
    const router = useRouter();
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        const newPath = pathName.replace(/^\/[a-z]{2}/, `/${locale}`);
        router.push(newPath);
    }

    return (
        <ButtonAnimation>
            <section
                className={"container-language-change"}
                onClick={() => redirectedPathName(pathName === "/ua" ? "en" : "ua")}
            >
                <Image src={pathName === "/ua" ? "/icons/ua.gif" : "/icons/usa.gif"}
                       width={70}
                       height={40}
                       alt={pathName === "/ua" ? "UA Flag" : "US Flag"}
                />
            </section>
        </ButtonAnimation>
    )
}
