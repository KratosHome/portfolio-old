'use client'
import React, {useState} from 'react';
import {motion} from "framer-motion";
import "./ExperienceList.scss"

const ExperienceList = ({item}: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const containerVariants = {
        open: {backgroundColor: '#000000'},
        closed: {backgroundColor: '#6D24C9'},
    };

    // Варіанти анімації для тексту
    const textVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0}
    };


    return (
        <motion.div
            layout
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={containerVariants}
            transition={{duration: 0.5}}
            className="wrapper-experience-list"
            onClick={toggleOpen}
            data-isOpen={isOpen}
        >
            <motion.div layout className="child">
                <div className="wrapper-title">
                    <div>{item.titleEn}</div>
                    <div>{item.company}</div>
                </div>
                <div>
                    <span>{item.date}</span>
                    <span>+</span>
                </div>
            </motion.div>
            {isOpen && (
                <motion.div
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={textVariants}
                    transition={{duration: 0.3}} // Тривалість анімації для тексту
                    className="additional-content"
                >
                    <div>Контент, що з'являється при відкритому положенні</div>
                    <div className="wrapper-technologies">
                        {
                            item.technologies.map((item: any) =>
                                <span>{item}</span>
                            )
                        }
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ExperienceList;