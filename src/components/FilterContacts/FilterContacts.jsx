import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FormContainer, Label, MyField, } from '../FormContact/FormicContact.styled';


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
                        value={value}
                        onChange={onChange} />
                </Label>
        </Form>
        </Formik>
    </FormContainer>
);

export default Filter;