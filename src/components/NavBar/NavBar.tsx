import "./navbar.scss"
import ThemeChange from "@/components/ThemeChange/ThemeChange";
import LanguageChange from "@/components/LanguageChange/LanguageChange";
import Link from 'next/link'
import {getDictionary} from "../../../lib/dictionary";
import {Locale} from "../../../i18n.config";
import Image from "next/image";

import BackgroundMain from "@/components/BackgroundMain/BackgroundMain";
import Button from "@/components/Button/Button";

export default async function NavBar({lang}: { lang: Locale }) {
    const {navigation} = await getDictionary(lang)

    return (
        <BackgroundMain>
            <nav className="container-nav">
                <div>
                    <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                    <ul>
                        {Object.entries(navigation).slice(0, -1).map(([key, value]) => (
                            <li key={key}>
                                <Link href={`/${lang}#${key}`}>{value}</Link>
                            </li>
                        ))}
                        <li>
                            <span>{navigation.menu}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <LanguageChange/>
                    <ThemeChange/>
                    <Button>
                        Hire me
                    </Button>
                </div>
            </nav>
            <section>
                3d model
            </section>
        </BackgroundMain>
    );
};
