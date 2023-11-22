'use client'
import React, {FC} from 'react';
import "./Button.scss";
import ButtonAnimation from "@/components/Animation/ButtonAnimation/ButtonAnimation";

interface ButtonType {
    children: React.ReactNode;
}

const Button: FC<ButtonType> = ({children}) => {


    return (
        <ButtonAnimation>
            <button className={"container-button"}>
                {children}
            </button>
        </ButtonAnimation>
    );
};

export default Button;
