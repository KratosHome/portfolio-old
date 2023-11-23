"use client"
import React, {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import MainTitle from "@/components/MainTitle/MainTitle";
import ComputersCanvas from "@/components/ComputersCanvas/ComputersCanvas";
import "./HeroSection.scss";

const HeroSection = ({navigation}: any) => {
    const [isFloating, setIsFloating] = useState(true);
    const controls = useAnimation();

    const floatAnimation = {
        x: ["0%", "0.5%", "-0.5%", "0%", "-0.5%", "0.5%", "0%"],
        y: ["0%", "-0.5%", "0.5%", "0%", "-0.5%", "0.5%", "0%"],
        transition: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
        }
    };

    useEffect(() => {
        if (isFloating) {
            controls.start(floatAnimation);
        } else {
            controls.stop();  // Зупинка анімації
        }
    }, [isFloating, controls]);

    const handleMouseDown = () => setIsFloating(false);

    return (
        <div className="container-3d">
            <MainTitle navigation={navigation}/>
            <motion.div
                className="computer"
                initial={floatAnimation}  // Початковий стан анімації
                animate={controls}  // Контроль анімації через controls
                onMouseDown={handleMouseDown}
                onMouseUp={() => setIsFloating(true)}
            >
                <ComputersCanvas/>
            </motion.div>
        </div>
    );
};

export default HeroSection;
