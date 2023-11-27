'use client'
import React, {FC} from 'react';
import "./Button.scss";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";

interface ButtonType {
    children: React.ReactNode;
}

const Button: FC<ButtonType> = ({children}) => {


    return (
        <ButtonAnimation as="button" className={"container-button"}>
            {children}
        </ButtonAnimation>
    );
};

export default Button;
