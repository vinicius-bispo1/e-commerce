import * as S from './Styled'
import Header from "../../Components/Header";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Produtos } from "../../Data";
import Card from "../../Components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <S.ContainerBusca>
          <S.BoxCep>
            <FaLocationDot />
            <h2>Informe seu CEP</h2>
          </S.BoxCep>

          <S.BoxInput>
            <input type="text" />
            <FaSearch />

          </S.BoxInput>
        </S.ContainerBusca>
          </div>
        </section>

        {/* Produtos */}
        <section>
          <div>
            {Produtos.map((item) => (
              <Card
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagem}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
