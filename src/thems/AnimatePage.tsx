"use client"

import {AnimatePresence} from 'framer-motion'
import {motion} from 'framer-motion'

export default function AnimatePage({children}: any) {

    return (
        <AnimatePresence initial={true} mode="popLayout">
            <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}