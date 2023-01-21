import styled from '@emotion/styled'

export const FormContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin: 6px;
`;

export const MyField = styled.input`
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
`;

export const Button = styled.button`
    background-color: lightgray;
    color: black;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid darkgray;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: gray;
    }
`;