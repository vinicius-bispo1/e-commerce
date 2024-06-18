import styled from "styled-components";

export const Footer = styled.footer`
  /* background-color: #454c59; */
`;

export const Volta = styled.section`
  background-color: #454c59;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Informes = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  .destaque {
    font-weight: 700;
  }

  ul {
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
