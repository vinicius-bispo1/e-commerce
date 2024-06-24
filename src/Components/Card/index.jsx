import React from "react";
import * as S from "./Styled";
import celular from "../../assets/celular.png";
import { FaStar } from "react-icons/fa";
import Estrela from "../Estrela";
import { Produtos } from "../../Data";

export default function Card({ descricao, preco, imagem, status, id }) {
  return (
    <S.Div>
      <S.Img src={imagem} alt="Celular" />
      <S.P>
        {descricao} - {id}
      </S.P>
      <S.H2>R$ {preco}</S.H2>
      <Estrela />
      <S.Span cor={status}>{status}</S.Span>
    </S.Div>
  );
}
