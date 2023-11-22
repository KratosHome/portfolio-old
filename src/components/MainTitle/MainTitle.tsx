"use client"
import React, {useState, useEffect} from 'react';
import './MainTitle.scss';
import {Typewriter} from 'react-simple-typewriter';

const MainTitle = ({navigation}: any) => {
    const [showReactText, setShowReactText] = useState(false);

    const [showDevText, setShowDevText] = useState(false);

    useEffect(() => {
        const totalTime = ('Front-end'.length * 100) + 1000; // adjust based on your typeSpeed and delaySpeed
        const timer = setTimeout(() => setShowReactText(true), totalTime);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const totalTime = ('developer'.length * 100) + 1000; // adjust based on your typeSpeed and delaySpeed
        const timer = setTimeout(() => setShowDevText(true), totalTime);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"container-main-title"}>
            <h1>
                <div>
                    <Typewriter
                        words={['Front-end']}
                        loop={1}
                        cursor={!showReactText}
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                    {showReactText && (
                        <Typewriter
                            words={['dev', 'react']}
                            loop={1}
                            cursor={!showDevText}
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    )}
                </div>
                {showDevText && (
                    <Typewriter
                        words={['developer']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                )}
            </h1>
            <h2>{navigation.mainH2}</h2>
        </div>
    );
};

export default MainTitle;

