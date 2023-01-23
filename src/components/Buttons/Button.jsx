import React from 'react';
import { ButtonStyled } from './Button.style'
import PropTypes from 'prop-types';


const Button = ({ type, text, onClick }) => {
    return (
        <>
            <ButtonStyled
                type={type}
                onClick={onClick}
            >{text}</ButtonStyled>
        </>
    )
}

export default Button;

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};