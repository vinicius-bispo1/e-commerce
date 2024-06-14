import React from "react";
import * as S from "./Styled";
import celular from "../../assets/celular.png";
import { FaStar } from "react-icons/fa";
import Estrela from "../Estrela";

export default function Card() {
  return (
    <S.Div>
      <S.Img src={celular} alt="Celular" />
      <S.P>Smartphone Motorola Moto G24 8GB RAM Boost* 128GB Grafite</S.P>
      <S.H2>R$ 00,82</S.H2>
      <Estrela />
      <S.Span>à vista no pix</S.Span>
    </S.Div>
  );
}
