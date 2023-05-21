import styled from 'styled-components';
export const Button = styled.button`
  display: flex;
  justify-content: center;
  min-width: 196px;
  margin: 40px auto 0;
  padding: 14px 39px;

  border-radius: 10px;
  border: none;
  background-color: #ebd8ffae;
  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #5cd3a8;
  }
`;
