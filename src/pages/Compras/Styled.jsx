import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxTitle = styled.section`
  height: 8vh;
  ${center}
  background-color: #454C59;
  h2 {
    color: white;
  }
`;

export const BoxIcone = styled.div`
/* border: solid 1px red; */
${center}
justify-content: space-evenly;
margin-top: 30px;
`
