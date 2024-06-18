import React from "react";
import * as S from "./Styled.jsx";
import { Link } from "react-router-dom";
export default function Footer(menu) {
  return (
    <S.Footer>
      <section>
        <h2>Voltar ao inicío</h2>
      </section>
      <section>
        <ul>
          <li>
            <Link to="/compras">Meus pedidos</Link>
          </li>
          <li>
            <Link to="/perfil">Editar cadastro</Link>
          </li>
          <li>
            <a href="/compras">Acompanhe seus pedidos</a>
          </li>
        </ul>
        <ul>
          <li>Contato</li>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
      </section>
    </S.Footer>
  );
}
