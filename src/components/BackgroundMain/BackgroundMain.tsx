"use client";
import React from 'react';
import "./BackgroundMain.scss"

const BackgroundMain = ({children}: any) => {
    return (
        <header style={{height: '100vh', overflow: 'hidden',}} className="container-background-main">
            <div style={{position: 'relative'}}>
                {children}
            </div>
        </header>
    );
};

export default BackgroundMain;
