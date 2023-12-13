import React, {FC, useEffect, useRef, useState} from 'react';
import "./Swiper.scss"
import {useInView} from "react-intersection-observer";
import {useWindowWidth} from "@/hooks/useWindowWidth";
import Image from "next/image";
import {motion} from "framer-motion";

interface swiperTypes {
    cards: any;
    renderItem: any;
    isButtonToggle: any
    numberCards: number
}

const Swiper: FC<swiperTypes> = ({
                                     cards,
                                     renderItem,
                                     isButtonToggle,
                                     numberCards
                                 }) => {
    const componentRef = useRef(null);
    const ref = useRef(null);

    const [refView, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    const [currentArray, setCurrentArray] = useState(null);

    const [constraint, setConstraint] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(numberCards);
    const [slidePosition, setSlidePosition] = useState(0);

    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        setCurrentArray(cards);
    }, [cards]);

    const setRefs = (node: any) => {
        ref.current = node;
        refView(node);
    };

    const screenWidth = useWindowWidth();
    useEffect(() => {
        if (screenWidth < 600) {
            setCardsToShow(1);
        } else if (screenWidth >= 600 && screenWidth < 900) {
            setCardsToShow(2 + numberCards);
        } else if (screenWidth >= 900 && screenWidth < 1200) {
            setCardsToShow(3 + numberCards);
        } else {
            setCardsToShow(4 + numberCards);
        }

        setSlidePosition(0);
    }, [screenWidth]);


    const containerWidth = ref.current?.offsetWidth;
    useEffect(() => {
        const cardWidth = containerWidth / cardsToShow;
        setConstraint(cardWidth * currentArray?.length - containerWidth);
    }, [containerWidth]);


    const handleSwipe = (direction: any) => {
        const containerWidth = ref.current.offsetWidth;
        const cardWidth = containerWidth / cardsToShow;

        if (direction === 'left') {
            setSlidePosition(Math.min(slidePosition + cardWidth, 0));
        } else if (direction === 'right') {
            setSlidePosition(Math.max(slidePosition - cardWidth, -constraint));
        }
    }


    const onSwipe = (e, {offset}) => {
        let direction = offset.x > 0 ? 'right' : 'left';
        let newPosition = slidePosition + offset.x;
        newPosition = Math.min(newPosition, 0);
        newPosition = Math.max(newPosition, -constraint);
        setSlidePosition(newPosition);
    };


    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            setScrollDirection(direction);
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);

    const showAnimate = {
        visible: (i) => ({
            opacity: 1,
            translateY: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                duration: 0.2,
                damping: 10,
                stiffness: 100,
            },
        }),
        hidden: {
            opacity: 0,
            translateY: scrollDirection === "down" ? -300 : 200,
        },
    };


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        });

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);


    return (
        <div className='container-cards' ref={componentRef}>
            {isButtonToggle &&
                <button className="toggle-swipe-left" onClick={() => handleSwipe('left')}>
                    <Image
                        src={"/icons/Chevron.svg"}
                        alt={"Chevron.svg"}
                        width={25}
                        height={25}/>
                </button>
            }
            <motion.div className='container-slider'>
                <motion.div
                    ref={setRefs}
                    drag='x'
                    dragConstraints={{right: 0, left: -constraint}}
                    animate={{x: slidePosition}}
                    key={constraint}
                    className='slider'
                    onDragEnd={onSwipe}
                    hello-attr={-constraint}
                >
                    {currentArray?.map((item: any, index: number) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial="hidden"
                            animate={inView ? "visible" : isVisible ? "visible" : "hidden"}
                            variants={showAnimate}
                            className='box'
                            style={{minWidth: `calc(100% / ${cardsToShow})`}}
                        >
                            {renderItem(item)}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            {isButtonToggle &&
                <button className="toggle-swipe" onClick={() => handleSwipe('right')}>
                    <Image
                        src={"/icons/Chevron.svg"}
                        alt={"Chevron.svg"}
                        width={25}
                        height={25}
                    />
                </button>
            }
        </div>
    );
};

export default Swiper;