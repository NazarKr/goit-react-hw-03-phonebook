import React from 'react';
import { ButtonStyled, } from './ButtonIcon.style'
import PropTypes from 'prop-types';



const ButtonIcon = ({ icon: Icon = null, type, disabled, children, onClick, iconSize, }) => {
    return (
        <>
            <ButtonStyled
                type={type}
                disabled={disabled}
                onClick={onClick}
            >{Icon && <Icon size={iconSize} />}

                <p>{children}</p>
            </ButtonStyled>
        </>
    )
}

export default ButtonIcon;

ButtonIcon.propTypes = {
    icon: PropTypes.func,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func,
    iconSize: PropTypes.number
};