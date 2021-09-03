import styled from "styled-components";

export const Container = styled.div`
  grid-area: SN;
  background-color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const Button = styled.div`
  cursor: pointer;
  color: var(--white);
`;