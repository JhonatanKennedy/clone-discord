import styled from "styled-components";

export const Container = styled.div`
  grid-area: CI;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  color: var(--symbol);
  font-size: 22px;
  margin: 0 8px;
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;
export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;
export const Text = styled.div`
  font-size: 15px;
  color: var(--gray);
`;