import * as S from "./Styled";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import web from "../../assets/Web Compras.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Header>
      <Link to="/">
        <img
          src={web}
          alt=""
        />
      </Link>
      <S.BoxMenu>
        <ul>
          <Link to="vendido">Mais vendidos</Link>
          <Link to="eletros">Eletrodoméstico</Link>
          <Link to="tec">Tecnologia</Link>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <FaUser />
        <Link to="compras">
          <FaShoppingCart />
        </Link>
      </S.BoxIcon>
    </S.Header>
  );
}
