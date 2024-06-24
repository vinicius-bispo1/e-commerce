import * as S from "./Styled"
import cesta from "../../assets/cesta.png"
import truck from "../../assets/truck.png"
import cartao from "../../assets/cartao.png"
import { Link } from "react-router-dom";

export default function Pagamaneto() {
  return (
    <main>
      <S.BoxTitle>
        <h2>Pagamento</h2>
      </S.BoxTitle>
      <section>
        <S.BoxIcone>
          <Link to="/compras"><img src={cesta} alt="" /></Link>
          <Link to="/entrega"><img src={truck} alt="" /></Link>
          <img src={cartao} alt="" />
        </S.BoxIcone>
      </section>
    </main>
  )
}
