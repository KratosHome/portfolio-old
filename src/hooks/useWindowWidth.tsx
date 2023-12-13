"use client"
import {useState, useEffect} from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState<any>(window.innerWidth ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};
