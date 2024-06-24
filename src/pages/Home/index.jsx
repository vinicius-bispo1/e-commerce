import * as S from "./Styled";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Produtos } from "../../Data";
import Card from "../../Components/Card";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer";
import { ComprasContext } from "../../context/ComprasContext";
import NaoEncontrado from "../../Components/NaoEncontrado";

export default function Home() {
  const { itens, setItens, quantidade, setQuantidade, setArray, array } =
    useContext(ComprasContext);

  const [modalCep, setModalCep] = useState(false);
  const fundoRef = useRef(null);

  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setCompleto] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");

  const buscaCep = async () => {
    // 01001000

    try {
      const dados = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(dados.data);
      setBairro(dados.data.bairro);
      setCompleto(dados.data.complemento);
      setLocalidade(dados.data.localidade);
      setLogradouro(dados.data.logradouro);
    } catch (err) {
      alert("Erro na busca, tente novamente...");
    }
  };

  useEffect(() => {
    if (modalCep) {
      fundoRef.current.style.filter = "blur(10px)";
    } else {
      fundoRef.current.style.filter = "blur(0px)";
    }
  }, [modalCep, cep]);

  // Busca filmes
  const [busca, setBusca] = useState("");

  //  funcionalidade de busca
  const filtrados = Produtos.filter((item) =>
    item.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  const addProduto = (id) => {
    let newProduto = itens.filter((e) => e.id === id);
    console.log(newProduto);
    setArray(array.concat(newProduto));
    console.log(array);
  };

  return (
    <>
      <main id="topo" ref={fundoRef}>
        <S.ContainerBusca>
          <S.BoxCep onClick={() => setModalCep(!modalCep)}>
            <FaLocationDot />
            <h2>{cep ? `${logradouro} - ${localidade}` : `Informe seu CEP`}</h2>
          </S.BoxCep>

          <S.BoxInput>
            <input
              onChange={(e) => setBusca(e.target.value)}
              type="text"
              placeholder="Busque aqui seu produto"
            />
            <FaSearch />
          </S.BoxInput>
        </S.ContainerBusca>

        {/* Produtos */}
        <S.ContainerProdutos>
          <S.BoxProdutos>
            {filtrados.map((item, key) => (
              <div key={key} onClick={() => addProduto(item.id)}>
                <Card
                  descricao={item.descricao}
                  preco={item.preco}
                  imagem={item.imagem}
                  status={item.status}
                  id={item.id}
                />
              </div>
            ))}
            {filtrados == "" && (
              <div>
                <NaoEncontrado />
              </div>
            )}
          </S.BoxProdutos>
        </S.ContainerProdutos>
      </main>

      <Footer menu="#topo" />

      {/* Modal */}
      {modalCep && (
        <S.Modal>
          <S.BoxModal>
            <S.ButtonModal>
              <h2>Digite seu CEP:</h2>

              <button onClick={() => setModalCep(!modalCep)}>X</button>
            </S.ButtonModal>
            <S.ModalCampos>
              <div>
                <input
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  placeholder="Informe seu CEP aqui..."
                />
                <button onClick={() => buscaCep()}>
                  <FaSearch />
                </button>
              </div>

              <p>CEP: {cep}</p>
              <p>Rua: {logradouro ? logradouro : "não encontrado"}</p>
              <p>Estado: {localidade ? localidade : "não encontrado"}</p>
              <p>Bairro: {bairro ? bairro : "não encontrado"}</p>
              <p>complemento: {complemento ? complemento : "não encontrado"}</p>
            </S.ModalCampos>
          </S.BoxModal>
        </S.Modal>
      )}
    </>
  );
}
