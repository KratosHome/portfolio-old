'use client'
import React, {FC} from 'react';
import {motion, useAnimation} from 'framer-motion';

interface ButtonType {
    children: React.ReactNode;
}

const ButtonAnimation: FC<ButtonType> = ({children}) => {
    const controls = useAnimation();

    const handleMouseEnter = () => {
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

    return (
        <motion.div
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
        >
            {children}
        </motion.div>
    );
};


export default ButtonAnimation;