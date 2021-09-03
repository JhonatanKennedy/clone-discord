import styled from "styled-components";

export const Container = styled.div`
  grid-area: UI;
  background-color: var(--quaternary);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UserPhoto = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-size: 14px;
  >span{
    color: var(--gray);
    font-size: 13px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
  width: 25%;
`;