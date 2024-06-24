import * as S from "./Styled";
import cesta from "../../assets/cesta.png"
import truck from "../../assets/truck.png"
import cartao from "../../assets/cartao.png"
import { Link } from "react-router-dom";

export default function Compras() {
  return (
    <main>
      <S.BoxTitle>
        <h2>Compras</h2>
      </S.BoxTitle>
      <section>
        <S.BoxIcone>
          <img src={cesta} alt="" />
          <Link to="/entrega"><img src={truck} alt="" /></Link>
          <Link to="/pagamento"><img src={cartao} alt="" /></Link>
        </S.BoxIcone>
      </section>
    </main>
  );
}
