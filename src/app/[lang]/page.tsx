import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import AboutMe from "@/components/AboutMe/AboutMe";
import SelectedProjects from "@/components/SelectedProjects/SelectedProjects";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import TrustedBy from "@/components/TrustedBy /TrustedBy";
import {fetchReviews} from "@/app/lib/date";
import Connect from "@/components/Connect/Connect";

export default async function Home() {
    const reviews = await fetchReviews()

    return (
        <div>
            <section id="section1">
                <HeroSection/>
            </section>
            <section id="about">
                <AboutMe/>
            </section>
            <section id="projects">
                <SelectedProjects/>
            </section>
            <section id="services">
                <Services/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
            <section id="trustedBy">
                <TrustedBy reviews={reviews}/>
            </section>
            <section id="connect">
                <Connect/>
            </section>
        </div>
    )
}
