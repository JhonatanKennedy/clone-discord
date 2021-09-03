import styled from "styled-components";

export const Container = styled.div`
  color: var(--gray);
  cursor: pointer;
  >span{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p{
    display: flex;
    align-items: center;
  }
  &:hover{
    background-color: var(--quinary);
    button{
      background-color: var(--quinary);
    }
  }
`;
export const Button = styled.button`
  color: var(--gray);
  background-color: var(--secondary);
  cursor: pointer;
  padding: 0 5px;
  border: none;

  &:hover{
    color: var(--white);
  }

`;