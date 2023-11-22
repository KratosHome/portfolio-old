"use client"
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import "./ThemeChange.scss";
import Moon from "@/svg/Moon/Moon";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {toggleTheme} from "@/store/themeSlice/themeSlice";

const ThemeChange = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {theme} = useSelector((state: RootState) => state.theme);


    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        dispatch(toggleTheme(storedTheme !== null ? storedTheme : systemTheme))
    }, []);

    useLayoutEffect(() => {
        gsap.to(document.documentElement, {
            '--background-color': theme === 'light' ? [/* light gradient values */] : [/* dark gradient values */],
            duration: 0.5,
            ease: "power1.out"
        });
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const changeTheme = () => {
        dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
    };

    return (
        <div className="container-theme-change" onClick={changeTheme} data-ison={theme === 'dark'}>
            <motion.div className="handle" layout transition={{type: "spring", stiffness: 500, damping: 25}}>
            </motion.div>
        </div>
    );
};

export default ThemeChange;

/*
                <motion.img
                    src={theme === 'light' ? "./icons/moon.png" : "./icons/sun.png"}
                    animate={theme}
                    variants={{light: {rotate: 0}, dark: {rotate: 180}}}
                    transition={{duration: 0.5}}
                />
 */