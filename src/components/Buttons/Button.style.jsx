import styled from '@emotion/styled'
import theme from 'theme';

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    background-color: lightgray;
    color: ${theme.colors.text};
    padding: 10px 20px;
    border-radius: ${theme.radii.normal};
    border: 1px solid darkgray;
    font-size: ${theme.fontSizes.s};
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.background};
        box-shadow: 0px 0px 20px -18px;
    }
    &:active {
    transform: scale(0.95);
    }
    @media (min-width: 420px) {
       font-size: ${theme.fontSizes.m};
      }
`;

export const ButtonText = styled.span`
  margin-left: ${span => (span.Icon ? theme.space[3] : theme.space[0])};
`;