import * as S from "./Styled";
import Estrela from "../Estrela";

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
