import React from "react";
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
        <section>
          <div>
            <FaLocationDot />
            <h2>Informe seu CEP</h2>
          </div>

          <div>
            <input type="text" />
            <FaSearch />
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
