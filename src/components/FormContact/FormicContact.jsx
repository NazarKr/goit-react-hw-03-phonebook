import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'


// const id = nanoid()

class FormicContact extends Component {
    state = {
        name: '',
        number: ''
    }

    nameId = nanoid();
    numberId = nanoid();

    reset = () => {
        this.setState({ name: '', number: '' })
    };


    render() {
        return (
            <Formik
                initialValues={this.state}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    this.props.onSubmit(values);
                }}
            >
                <Form>
                    <label htmlFor={this.nameId}>Name</label>
                    <Field
                        id={this.nameId}
                        name="name"
                        placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />

                    <label htmlFor={this.numberId}>Number</label>
                    <Field
                        id={this.numberId}
                        name="number"
                        placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }

}

export default FormicContact;