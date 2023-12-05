import {Locale} from "../../../i18n.config";
import {getDictionary} from "../../../lib/dictionary";
import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import AboutMe from "@/components/AboutMe/AboutMe";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";

export default async function Home({
                                       params: {lang}
                                   }: {
    params: { lang: Locale }
}) {
    const {navigation} = await getDictionary(lang)

    return (
        <div>
            <section id="section1">
                <HeroSection navigation={navigation}/>
            </section>
            <section id="about">
                <AboutMe/>
            </section>
            <section id="projects">
                <SelectedProjects/>
            </section>
            <section id="services">
                services
            </section>
            <section id="experience">
                experience
            </section>
            <section id="trustedBy">
                experience
            </section>
            <section id="connect">
                connect
            </section>
        </div>
    )
}
