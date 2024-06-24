import * as S from "./Styled";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import web from "../../assets/Web Compras.png";

export default function Header() {
  return (
    <S.Header>
      <Link to="/">
        <img src={web} alt="..." />
      </Link>
      <S.BoxMenu>
        <ul>
          <Link to="vendido">Mais vendidos</Link>
          <Link to="eletros">Eletrodoméstico</Link>
          <Link to="tec">Tecnologia</Link>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <Link to="perfil">
          <FaUser />
        </Link>
        <Link to="/compras">
          <FaShoppingCart />
        </Link>
      </S.BoxIcon>
    </S.Header>
  );
}
