"use client"
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import "./ThemeChange.scss"

const ThemeChange = () => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(systemTheme);

    useEffect(() => {
        gsap.to(document.documentElement, {
            '--background-color': theme === 'light' ?
                "linear-gradient(180deg, rgb(195, 196, 199) 0%, rgb(196, 195, 203) 10%, rgb(199, 192, 210) 20%, rgb(203, 191, 222) 30%, rgb(207, 197, 241) 40%, rgb(206, 212, 246) 50%, rgb(209, 233, 250) 60%, rgb(207, 209, 245) 70%, rgb(205, 215, 228) 80%, rgb(204, 197, 187) 90%, rgb(196, 195, 201) 100%)" :
                "linear-gradient(180deg, rgb(15, 16, 19) 0%, rgb(16, 15, 23) 10%, rgb(19, 12, 30) 20%, rgb(23, 11, 42) 30%, rgb(27, 17, 61) 40%, rgb(26, 32, 86) 50%, rgb(29, 53, 110) 60%, rgb(27, 29, 105) 70%, rgb(25, 35, 78) 80%, rgb(24, 17, 37) 90%, rgb(16, 15, 21) 100%)",
            duration: 0.5,
            ease: "power1.out"
        });
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setIsOn(!isOn);
    };

    const [isOn, setIsOn] = useState(false);


    //  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    return (
        <div
            className="container-theme-change"
            onClick={toggleTheme}
            data-isOn={isOn}
        >
            <motion.div
                className="handle"
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25
                }}
            >
                <motion.img
                    src={isOn ? "./icons/sun.png" : "./icons/moon.png"}
                    animate={theme}
                    variants={{
                        light: {rotate: 0},
                        dark: {rotate: 180},
                    }}
                    transition={{duration: 0.5}}
                />
            </motion.div>
        </div>
    );
};

export default ThemeChange;
