import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimation, MotionProps } from 'framer-motion';

type SwimProps = {
    children: React.ReactNode;
} & Omit<MotionProps, 'onAnimationStart'>;

const Swim: FC<SwimProps> = ({ children, ...props }) => {
    const controls = useAnimation();
    const [isFloating, setIsFloating] = useState(true);

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
            controls.stop();
        }
    }, [isFloating, controls]);

    const handleMouseDown = () => setIsFloating(false);
    const handleMouseUp = () => setIsFloating(true);

    return (
        <motion.div
            animate={controls}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Swim;
