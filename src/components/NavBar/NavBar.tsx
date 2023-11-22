import "./navbar.scss"
import ThemeChange from "@/components/ThemeChange/ThemeChange";
import LanguageChange from "@/components/LanguageChange/LanguageChange";
import Link from 'next/link'
import {getDictionary} from "../../../lib/dictionary";
import {Locale} from "../../../i18n.config";
import Image from "next/image";

import Button from "@/components/UI/Button/Button";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";
import MainTitle from "@/components/MainTitle/MainTitle";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import HeroSection from "@/components/HeroSection/HeroSection";

export default async function NavBar({lang}: { lang: Locale }) {
    const {navigation} = await getDictionary(lang)

    return (
        <>
            <header className="container-background-main">
                <div className="inner-container">
                    <nav className="container-nav">
                        <div>
                            <MobileMenu/>
                            <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                            <ul>
                                {Object.entries(navigation).slice(0, -2).map(([key, value]) => (
                                    <li key={key}>
                                        <Link href={`/${lang}#${key}`}>{value}</Link>
                                    </li>
                                ))}
                                <li className="menu">
                                    <span>{navigation.menu}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-bar-toggle">
                            <LanguageChange/>
                            <ThemeChange/>
                            <Button>
                                Hire me
                            </Button>
                        </div>
                    </nav>
                    <HeroSection navigation={navigation}/>
                </div>
            </header>
        </>
    );
};
