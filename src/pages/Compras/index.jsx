import * as S from "./Styled";
import cesta from "../../assets/cesta.png"
import truck from "../../assets/truck.png"
import cartao from "../../assets/cartao.png"

export default function Compras() {
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
      </section>
    </main>
  );
}
