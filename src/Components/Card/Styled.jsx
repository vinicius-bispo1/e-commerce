import styled from "styled-components";

export const Div = styled.div`
  width: 40vw;
  height: 60vh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;

  &:hover {
    transition: 1s;
    padding: 5px;
    p {
      border-bottom: solid 1px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 30vh;
`;

export const P = styled.p``;

export const H2 = styled.h2`
  font-weight: bolder;
`;

export const Span = styled.span`
  color: #008a00;
  color: ${(props) =>
    props.cor == "à vista no Pix"
      ? "green"
      : props.cor == "Indisponível"
      ? "red"
      : "#FEBC14"};
`;
