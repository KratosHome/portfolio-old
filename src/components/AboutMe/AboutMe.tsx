"use client"
import React from 'react';
import "./AboutMe.scss";
import Image from "next/image";
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import Swim from "@/components/UIA/Swim/Swim";
import {usePathname} from "next/navigation";

const AboutMe = () => {
    const pathName = usePathname();

    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const [refLeft, inViewLeft] = useInView();
    const [refRight, inViewRight] = useInView();

    useEffect(() => {
        if (inViewLeft) {
            controlsLeft.start("visibleLeft");
        } else {
            controlsLeft.start("hiddenLeft");
        }

        if (inViewRight) {
            controlsRight.start("visibleRight");
        } else {
            controlsRight.start("hiddenRight");
        }
    }, [controlsLeft, inViewLeft, controlsRight, inViewRight]);

    const variantsLeft = {
        visibleLeft: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                damping: 10,
                stiffness: 100,
            }
        },
        hiddenLeft: {x: -200, opacity: 2.5}
    };

    const variantsRight = {
        visibleRight: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                damping: 10,
                type: "spring",
                stiffness: 100
            }
        },
        hiddenRight: {x: 200, opacity: 0.5}
    };

    return (
        <div className="container-about-me">
            <span>
                {pathName === "/ua" ? "Про мене" : "About me"}
              </span>
            <div>
                <motion.div
                    layout
                    ref={refLeft}
                    initial="hiddenLeft"
                    animate={controlsLeft}
                    variants={variantsLeft}
                >
                    <Swim>
                        {pathName === "/ua" ? "Вітаю! Моє ім'я Олег, і я перетворюю програмування у форму виразу, де кожна лінія коду — це частина більшої історії. Як фронтенд-розробник, я пристрасно використовую React для створення веб-сайтів, які не тільки виглядають чудово, але й працюють бездоганно, завдяки продуманій архітектурі та сильній бізнес-логіці." : "Hello! My name is Oleg, and I transform programming into a form of expression where each line of code is part of a larger story. As a frontend developer, I passionately use React to create websites that not only look great but also work flawlessly, thanks to thoughtful architecture and strong business logic."}
                    </Swim>
                </motion.div>
                <motion.div
                    layout
                    ref={refRight}
                    initial="hiddenRight"
                    animate={controlsRight}
                    variants={variantsRight}
                >
                    <div className="icons-about-me">
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                src={"./aboutMe/ReactLogo.svg"}
                                alt={"react"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                src={"./aboutMe/NextLogo.svg"}
                                alt={"nextJS"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                src={"./aboutMe/ElectronJsLogo.svg"}
                                alt={"ElectronJs"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                src={"./aboutMe/JavaScriptLogo.svg"}
                                alt={"JavaScript"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                src={"./aboutMe/TypeScriptLogo.svg"}
                                alt={"TypeScript"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                src={"./aboutMe/HTMLLogo.svg"}
                                alt={"HTML"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                src={"./aboutMe/CSSLogo.svg"}
                                alt={"CSS"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                src={"./aboutMe/ReduxLogo.svg"}
                                alt={"Redux"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                src={"./aboutMe/MobXLogo.svg"}
                                alt={"MobXLogo"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={1}>
                            <Image
                                src={"./aboutMe/SocketLogo.svg"}
                                alt={"Socket"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.2}>
                            <Image
                                src={"./aboutMe/axiosLogo.svg"}
                                alt={"axios"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.4}>
                            <Image
                                src={"./aboutMe/reactSpringLogo.svg"}
                                alt={"reactSpringLogo"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.6}>
                            <Image
                                src={"./aboutMe/StrapiLogo.svg"}
                                alt={"Strapi"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                        <Swim isFast={true} delay={0.8}>
                            <Image
                                src={"./aboutMe/gitOriginalLogo.svg"}
                                alt={"gitOriginalLogo"}
                                width={30}
                                height={30}
                            />
                        </Swim>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;