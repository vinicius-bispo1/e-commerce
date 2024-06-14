import * as S from "./Styled";
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
            <input type="text" placeholder='busque aqui seu produto' />
            <FaSearch />
          </S.BoxInput>
        </S.ContainerBusca>

        {/* Produtos */}
        <S.ContainerProdutos>
          <S.BoxProdutos>
            {Produtos.map((item) => (
              <Card style={{color: "red"}}
                descricao={item.descricao}
                preco={item.preco}
                imagem={item.imagem}
                status={item.status}
              />
            ))}
          </S.BoxProdutos>
        </S.ContainerProdutos>
      </main>
    </>
  );
}
