import styled from "styled-components";

export const Container = styled.div`
  grid-area: CC;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 46px - 89px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }

`;

export const InputContainer = styled.div`
  width: 90%;

  padding: 0 16px 16px 16px;

`;

export const InputField = styled.input`
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 7px;

  background-color: var(--chat-input);
  color: var(--white);

  font-size: 19px;
  padding: 0 10px 0 57px;

  &:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &::placeholder{
    color: var(--gray);
  }
`;