import React from 'react';
import MainTitle from "@/components/MainTitle/MainTitle";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";

const HeroSection = ({navigation}: any) => {
    return (
        <div>
            <MainTitle navigation={navigation}/>
            <ComputersCanvas/>
        </div>
    );
};

export default HeroSection;