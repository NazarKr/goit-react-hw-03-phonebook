import styled from '@emotion/styled'

export const PhoneBookDiv = styled.div`
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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
`
export const PhoneBookH2 = styled.h2`
    margin-top: 10px;
    margin-bottom: 4px;
    font-size: 18px;
`
