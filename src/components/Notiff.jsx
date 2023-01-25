
import React from 'react';
// import { TitleH3 } from './feedback.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <>
        {message && <h3>{message}</h3>}
    </>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};