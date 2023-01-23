import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
    background-color: lightgray;
    color: black;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid darkgray;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: gray;
        box-shadow: 0px 0px 20px -18px;
    }
    &:active {
    transform: scale(0.95);
    }
`;