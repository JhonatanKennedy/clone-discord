import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const UserButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--discord);
  margin: 0 15px;

`;

export const TextArea = styled.div`
  color: var(--white);
`;
export const UserPhoto = styled.div`
font-size: 19px;
  >span{
    font-size: 14px;
    color: var(--gray);
  }
`;