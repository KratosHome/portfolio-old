"use client"
import React from 'react';
import MainTitle from "@/components/MainTitle/MainTitle";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";
import "./HeroSection.scss";
import SocialLicks from "@/components/SocialLicks /SocialLicks";
import Swim from "@/components/UIA/Swim/Swim";

const HeroSection = ({navigation}: any) => {

    return (
        <div className="container-3d">
            <SocialLicks/>
            <MainTitle navigation={navigation}/>
            <Swim className={"computer"}>
                <ComputersCanvas/>
            </Swim>
        </div>
    );
};

export default HeroSection;
