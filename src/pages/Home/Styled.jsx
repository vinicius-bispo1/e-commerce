import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBusca = styled.section`
  border: solid 1px red;
  ${center}
  justify-content: space-around;
  background-color: #454c59;
  height: 17vh;
`;
export const BoxCep = styled.div``;

export const BoxInput = styled.div`
  border: solid 1px;
`;

export const ContainerProdutos = styled.section`
  border: solid;
  display: flex;
  justify-content: center;
`;
export const BoxProdutos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90vw;
  max-width: 1100px;
`;
