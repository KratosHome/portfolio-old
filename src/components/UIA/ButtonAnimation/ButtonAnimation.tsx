'use client'
import React, {FC, HTMLAttributes, AnchorHTMLAttributes, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import PulseComponent from "@/components/UIA/PulseComponent/PulseComponent";

type ButtonType = HTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    isPulse: boolean
};

const ButtonAnimation: FC<ButtonType> = ({children, as = 'div', isPulse, ...props}) => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseLeave = () => setIsHovered(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
        controls.start({
            scale: 0.9,
            transition: {duration: 0.2}
        }).then(() => {
            controls.start({
                scale: 1.0,
                transition: {duration: 0.3}
            });
        });
    };

    const Component = motion(as);

    //      onMouseLeave={handleMouseLeave}
    return (
        <Component
            initial={{scale: 1}}
            animate={controls}
            onMouseEnter={handleMouseEnter}
            whileTap={{
                scale: 0.9,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            }}
            {...props}
        >
            {
                isPulse &&  <PulseComponent
                    isHovered={isHovered}
                    delay={0.05}
                    duration={0.9}
                />
            }
            {children}
        </Component>
    );
};

export default ButtonAnimation;
