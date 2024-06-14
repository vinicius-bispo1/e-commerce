import React from "react";
import * as S from "./Styled";
import celular from "../../assets/celular.png";
import { FaStar } from "react-icons/fa";
import Estrela from "../Estrela";

export default function Card({ descricao, preco, imagem }) {
  return (
    <S.Div>
      <S.Img src={imagem} alt="Celular" />
      <S.P>{descricao}</S.P>
      <S.H2>{preco}</S.H2>
      <Estrela />
      <S.Span>à vista no pix</S.Span>
    </S.Div>
  );
}
