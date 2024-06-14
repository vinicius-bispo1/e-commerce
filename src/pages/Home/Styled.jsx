import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBusca = styled.section`

${center}
justify-content: space-around;
background-color: #454C59;
height: 17vh;
`
export const BoxCep = styled.div`
${center}
justify-content: space-between;
color: white;
font-size: 20px;
gap: 15px;
`
export const BoxInput = styled.div`
/* border: solid 1px; */
font-size: 20px;
background-color: white;
border-radius: 5px;
padding-right: 10px;
${center}
cursor: pointer;
input{
    border: solid 1px;
    padding: 10px;
    width: 23vw;
    height: 5vh;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    outline: none;
}
`

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

