import styled from '@emotion/styled'

export const FilterContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 20px -20px;
        &:hover {
        border: 2px solid #ccc;
        }
`;

export const FilterLabel = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin: 6px;
`;

export const FilterField = styled.input`
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 20px -20px;
    width: 100%;
`;