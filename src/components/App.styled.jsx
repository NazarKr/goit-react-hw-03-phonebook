import styled from 'styled-components';
import theme from 'theme'

export const PhoneBookDiv = styled.div`
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: ${theme.radii.normal};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px -20px;
    @media(min-width: 720px) {
        width: 50%;
      }
`

export const PhoneBookH1 = styled.h1`
    margin: 6px;
    font-size: ${theme.fontSizes.m};

        @media (min-width: 420px) {
       font-size: ${theme.fontSizes.xl};
      }
`
export const PhoneBookH2 = styled.h2`
    margin-top: 10px;
    margin-bottom: 4px;
    font-size: ${theme.fontSizes.s};

 @media (min-width: 420px) {
       font-size: ${theme.fontSizes.l};
      }
`
