import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { FormContainer, Label, MyField } from './FormicContact.styled';
import Button from '../Buttons/Button';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';



class FormicContact extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid();
    numberId = nanoid();

    render() {
        return (
            <FormContainer>
                <Formik
                    initialValues={this.state}
                    onSubmit={async (values, { resetForm }) => {
                        await new Promise((r) => setTimeout(r, 500));
                        this.props.onSubmit(values);
                        resetForm();
                    }}
                >
                    <Form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Label htmlFor={this.nameId}>Name</Label>
                        <Field
                            as={MyField}
                            id={this.nameId}
                            name="name"
                            placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            required
                        />

                        <Label htmlFor={this.numberId}>Number</Label>
                        <Field
                            as={MyField}
                            id={this.numberId}
                            name="number"
                            placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            type="tel"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            required
                        />
                        <Button
                            type="submit"
                            text="Add contact"
                            icon={AiOutlineUserAdd}
                            iconSize={20}
                            style={{
                                marginLeft: '20px'
                            }}
                        >
                        </Button>
                    </Form>
                </Formik>
            </FormContainer>
        )
    }
}

export default FormicContact;

FormicContact.propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}