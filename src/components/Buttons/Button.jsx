import React from 'react';
import { ButtonStyled } from './Button.style'

const Button = ({ type, disabled, text, onClick }) => {
    return (
        <>
            <ButtonStyled
                type={type}
                disabled={disabled}
                onClick={onClick}
            >{text}</ButtonStyled>
        </>
    )
}

export default Button;