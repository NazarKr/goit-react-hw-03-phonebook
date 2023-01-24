import React from 'react';
import { ButtonStyled, ButtonText } from './Button.style'
import PropTypes from 'prop-types';



const Button = ({ icon: Icon = null, type, disabled, text, onClick, iconSize, }) => {
    return (
        <>
            <ButtonStyled
                type={type}
                disabled={disabled}
                onClick={onClick}          
            >{Icon && <Icon size={iconSize} />}
                
                <ButtonText Icon={Icon}>{text}</ButtonText>
            </ButtonStyled>
        </>
    )
}

export default Button;

Button.propTypes = {
    icon: PropTypes.func,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
    iconSize: PropTypes.number
};