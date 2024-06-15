import * as S from "./Styled";
import Header from "../../Components/Header";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Produtos } from "../../Data";
import Card from "../../Components/Card";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [modalCep, setModalCep] = useState(false);
  const fundoRef = useRef(null);

  useEffect(() => {
    if (modalCep) {
      fundoRef.current.style.filter = "blur(5px)";
    } else {
      fundoRef.current.style.filter = "blur(0px)";
    }
  }, [modalCep]);

import { useState } from "react";

export default function Home() {

  // Busca filmes
  const [busca, setBusca] = useState("")

  //  funcionalidade de busca
   const filtrados = Produtos.filter((item) =>
    item.descricao.toLowerCase().includes(busca.toLowerCase()));


  return (
    <>
      {modalCep}
      <Header />

      <main ref={fundoRef}>
        <S.ContainerBusca>
          <S.BoxCep onClick={() => setModalCep(!modalCep)}>
            <FaLocationDot />
            <h2>Informe seu CEP</h2>
          </S.BoxCep>

          <S.BoxInput>

            <input type="text" placeholder="busque aqui seu produto" />

            <input 
            onChange={(e) => setBusca(e.target.value)} 
            type="text" 
            placeholder='busque aqui seu produto' />

            <FaSearch />
          </S.BoxInput>
        </S.ContainerBusca>

        {/* Produtos */}
        <S.ContainerProdutos>
          <S.BoxProdutos>

            {Produtos.map((item) => (
              <Card
                style={{ color: "red" }}

            {filtrados.map((item) => (
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

      {modalCep && (
        <S.Modal>
          <S.BoxModal>
            <S.ButtonModal>
              <h2>Digite seu CEP:</h2>

              <button onClick={() => setModalCep(!modalCep)}>X</button>
            </S.ButtonModal>
            <S.ModalCampos>
              <div>
                <input type="text" placeholder="Informe seu CEP aqui..." />
                <button>
                  <FaSearch />
                </button>
              </div>

              <p>CEP:</p>
              <p>Rua:</p>
              <p>Estado:</p>
              <p>Bairro:</p>
              <p>Bairro:</p>
            </S.ModalCampos>
          </S.BoxModal>
        </S.Modal>
      )}
    </>
  );
}
