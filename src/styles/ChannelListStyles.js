import styled from "styled-components";

export const Container = styled.div`
  grid-area: CL;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;

  width: 224px;
  padding: 0 15px;
  margin-bottom: 6px;
`;

export const Title = styled.h1`
  font-size: 14px;
  margin-bottom: 6px;
  color: var(--gray);
`;

export const Icon = styled.div`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;

export const ChannelsList = styled.div`
  display: flex;
  flex-direction: column;

  width: 224px;
  height: auto;
`;