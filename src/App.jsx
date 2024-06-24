import React, { useContext, useState } from "react";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";
import { ComprasContext } from "./context/ComprasContext";
import { Produtos } from "./Data";

export default function App() {
  const [array, setArray] = useState([]);
  const [quantidade, setQuantidade] = useState(1);
  const [itens, setItens] = useState(Produtos);

  return (
    <ComprasContext.Provider
      value={{ array, setArray, quantidade, setQuantidade, itens, setItens }}
    >
      <GlobalStyled />
      <Router />
    </ComprasContext.Provider>
  );
}
