import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FormContainer, Label, MyField, } from '../FormContact/FormicContact.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <FormContainer>
        <Formik>
            <Form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
        <Label>
            Find contacts by name
                    <Field
                        as={MyField}
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={onChange} />
                </Label>
        </Form>
        </Formik>
    </FormContainer>
);

export default Filter;

Filter.propTypes = {
    value:  PropTypes.string.isRequired,
}