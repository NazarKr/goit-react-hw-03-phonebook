import React from 'react';
import { ContactListUl, ContactItemLi, ContactName, ContactNumber } from './ContactsList.styled';
import Button  from '../Buttons/Button';
import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';


const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListUl>
            {contacts.map(({ id, name, number }) => (
                <ContactItemLi key={id}>
                    <ContactName>{name}</ContactName>
                    <ContactNumber>{number}</ContactNumber>
                    <Button
                        // text=''
                        type="submit"
                        onClick={() => onDeleteContact(id)}
                        icon={AiOutlineDelete}
                        iconSize={20}
                    >
                    </Button>
                </ContactItemLi>))}
        </ContactListUl>
    );
};

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
}