import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerBusca = styled.section`
  ${center}
  justify-content: space-around;
  background-color: #454c59;
  height: 17vh;
  margin-bottom: 50px;
`;
export const BoxCep = styled.div`
  ${center}
  justify-content: space-between;
  color: white;
  font-size: 20px;
  gap: 15px;
  cursor: pointer;
`;
export const BoxInput = styled.div`
  /* border: solid 1px; */
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  padding-right: 10px;
  ${center}
  cursor: pointer;
  input {
    border: solid 1px;
    padding: 10px;
    width: 23vw;
    height: 5vh;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
`;

export const ContainerProdutos = styled.section`
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

export const Modal = styled.div`
  top: 35%;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
`;

export const ButtonModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vh;

  h2 {
    margin-bottom: 5px;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.5em;
  }
`;

export const BoxModal = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const ModalCampos = styled.div`
  p {
    height: 4vh;
    display: flex;
    align-items: center;
  }

  input {
    width: 90%;
    height: 5vh;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 1.5em;
  }
`;
