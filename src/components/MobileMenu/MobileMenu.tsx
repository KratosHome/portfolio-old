"use client"
import * as React from "react";
import {useRef} from "react";
import {motion, sync, useCycle} from "framer-motion";
import {MenuToggle} from "./MenuToggle";
import {useDimensions} from "@/hooks/useDimensions";
import "./MobileMenu.scss"
import {MenuItem} from "@/components/MobileMenu/MenuItem";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const MobileMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);

    const variants = {
        open: {
            transition: {staggerChildren: 0.07, delayChildren: 0.2}
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1}
        }
    };

    const itemIds = [0, 1, 2, 3, 4];
    return (
        <div className="mobile-menu">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div className="background" variants={sidebar}/>
                <motion.ul variants={variants}>
                    {itemIds.map(i => (
                        <MenuItem
                            key={i}
                            i={i}
                        />
                    ))}
                </motion.ul>
                <MenuToggle toggle={() => toggleOpen()}/>
            </motion.nav>
        </div>
    );
};

export default MobileMenu;