import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 95%;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ContactItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const ContactName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-right: 12px;
`;
