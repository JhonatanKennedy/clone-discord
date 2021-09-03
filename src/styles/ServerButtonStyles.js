import styled from "styled-components";

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--gray);

  margin: 4px 0;
  cursor: pointer;

  &:Hover{
    border-radius: 16px;
  }
`;

export const ButtonAdm = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background-color: var(--rocketseat);

  margin: 4px 0;
  cursor: pointer;
`;