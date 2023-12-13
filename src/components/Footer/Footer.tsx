"use client"
import React from 'react';
import "./Footer.scss";
import SocialLicks from "@/components/SocialLicks /SocialLicks";
import {usePathname} from "next/navigation";

const Footer = () => {
    const pathName = usePathname();
    const currentYear = new Date().getFullYear();

    return (
        <div className="container-footer">
            <div>(c) {currentYear} {pathName === "/ua" ? "Олег Ткач" : "Oleg Tkach"}</div>
            <div className="footer-sociale">
                <SocialLicks isAbsolute={false}/>
            </div>
            <div> {pathName === "/ua" ? "Дизайн зроблений " : "Design by "}
                <a
                    href="https://t.me/teekay_1610"
                    target="_blank"
                    aria-label="Telegram"
                >{pathName === "/ua" ? "Тетяна Кучеракй" : "Tetiana Kucherak"}</a></div>
        </div>
    );
};


export default Footer;