import styled from "styled-components";

export const Grid = styled.div`

  // SL - Server List
  // SN - Server Name
  // CI - Channel Info
  // CL - Channel List
  // CC - Channel chat
  // UI - User Info
  // FL - friend list
  display: grid;

  grid-template-columns: 71px 250px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: "SL SN CI CI"
                       "SL CL CC FL"
                       "SL UI CC FL";
`;