import * as S from "./Styled";
import cesta from "../../assets/cesta.png";
import truck from "../../assets/truck.png";
import cartao from "../../assets/cartao.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ComprasContext } from "../../context/ComprasContext";
import { MdDelete } from "react-icons/md";

export default function Compras() {
  const { array, quantidade, setQuantidade } = useContext(ComprasContext);
  return (
    <main>
      <S.BoxTitle>
        <h2>Compras</h2>
      </S.BoxTitle>
      <section>
        <S.BoxIcone>
          <img src={cesta} alt="cesta de compras" />
          <Link to="/entrega">
            <img src={truck} alt="..." />
          </Link>
          <Link to="/pagamento">
            <img src={cartao} alt="..." />
          </Link>
        </S.BoxIcone>
      </section>

      <S.ContainerCard>
        {array.map((e) => (
          <S.Card>
            <div>
              <img src={e.imagem} alt="" />
              <h2>{e.descricao}</h2>
              <S.Buttons>
                <div>
                  <button
                    onClick={() =>
                      quantidade > 1
                        ? setQuantidade((prev) => prev - 1)
                        : setQuantidade(1)
                    }
                  >
                    -
                  </button>
                  <h3>{quantidade}</h3>
                  <button
                    onClick={() =>
                      quantidade < 10
                        ? setQuantidade((prev) => prev + 1)
                        : setQuantidade(10)
                    }
                  >
                    +
                  </button>
                </div>

                {quantidade === 10 ? <p>Limite máximo</p> : ""}
              </S.Buttons>
            </div>

            <div className="preco">
              <button>
                <MdDelete />
              </button>
              <h2>{quantidade} (item)</h2>
              <h2>R${e.preco}</h2>
            </div>
          </S.Card>
        ))}
      </S.ContainerCard>
    </main>
  );
}
