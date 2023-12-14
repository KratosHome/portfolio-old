"use client"
import React from 'react';
import MainTitle from "@/components/MainTitle/MainTitle";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";
import "./HeroSection.scss";
import Swim from "@/components/UIA/Swim/Swim";
import Button from "@/components/UI/Button/Button";
import MyModal from "@/components/UI/MyModal/MyModal";
import FormHireMe from "@/components/FormHireMe/FormHireMe";
import {usePathname} from "next/navigation";
import SocialLicks from "@/components/SocialLicks /SocialLicks";

const HeroSection = () => {
    const pathName = usePathname();

    return (
        <div className="container-3d">
            <SocialLicks/>
            <MainTitle/>
            <div className="wrapper-hire-me">
                <MyModal
                    childrenOpen={
                        <Button>
                            {pathName === "/ua" ? "Найняти мене" : "Hire me"}
                        </Button>
                    }
                    childrenModal={<FormHireMe/>}
                    layoutId={"hireMe1"}
                />
            </div>
            <Swim className="computer">
                <ComputersCanvas/>
            </Swim>
        </div>
    );
};

export default HeroSection;
