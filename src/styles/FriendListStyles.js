import styled from "styled-components";

export const Container = styled.div`
  grid-area: FL;

  height: calc(100vh - 46px);
  background-color: var(--secondary);
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  color: var(--gray);
  font-size: 14px;
  padding: 0 15px;
`;

export const UserContainer = styled.div`
  display: flex;
  margin: 16px;
  color: var(--white);
  display: flex;
  align-items: center;
  font-size: 15px;
  font-style: normal;
`;
export const UserPhoto = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--mention-detail);
  margin: 0 13px 0 0;
`;