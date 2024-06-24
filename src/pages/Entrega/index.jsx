import * as S from "./Styled"
import cesta from "../../assets/cesta.png"
import truck from "../../assets/truck.png"
import cartao from "../../assets/cartao.png"
import { Link } from "react-router-dom";


export default function Entrega() {
  return (
    <main>
      <S.BoxTitle>
        <h2>Entrega</h2>
      </S.BoxTitle>
      <section>
        <S.BoxIcone>
          <Link to="/compras"><img src={cesta} alt="" /></Link>
          <img src={truck} alt="" />
          <Link to="/pagamento"><img src={cartao} alt="" /></Link>
        </S.BoxIcone>
      </section>
    </main>
  )
}
