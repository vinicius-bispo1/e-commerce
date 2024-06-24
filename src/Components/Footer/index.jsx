import * as S from "./Styled.jsx";
import { Link } from "react-router-dom";
export default function Footer({ menu }) {
  return (
    <S.Footer>
      <S.Volta>
        <a href={menu}>Voltar ao inicío</a>
      </S.Volta>
      <S.Informes>
        <ul>
          <li className="destaque">
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
          <li className="destaque">Contato</li>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
      </S.Informes>
    </S.Footer>
  );
}
