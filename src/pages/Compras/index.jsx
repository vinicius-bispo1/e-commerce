import * as S from "./Styled";
import cesta from "../../assets/cesta.png";
import truck from "../../assets/truck.png";
import cartao from "../../assets/cartao.png";
import { useContext } from "react";
import { ComprasContext } from "../../context/ComprasContext";

export default function Compras() {
  const { array } = useContext(ComprasContext);
  return (
    <main>
      <S.BoxTitle>
        <h2>Compras</h2>
      </S.BoxTitle>
      <section>
        <S.BoxIcone>
          <img src={cesta} alt="" />
          <img src={truck} alt="" />
          <img src={cartao} alt="" />
        </S.BoxIcone>

        <div>
          {array.map((e) => (
            <div>
              <img src={e.imagem} alt="" />
              <h2>{e.descricao}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
