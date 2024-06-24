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
`;

export const Card = styled.div`
  border: solid 3px black;
  width: 80%;
  border-radius: 10px;
  height: 30vh;
  margin: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }

  img {
    width: 20vw;
    max-width: 200px;
    height: 20vh;
  }

  .preco {
    margin: 0 10px 0 20px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: transparent;
    border: solid 1px;
    border-radius: 5px;
    font-weight: 900;

    &:hover {
      width: 32px;
      height: 32px;
    }
  }

  p {
    font-weight: 300;
    color: red;
  }
`;
