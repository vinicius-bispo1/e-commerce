import * as S from './Styled'
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import web from '../../assets/Web Compras.png'

export default function Header() {
  return (
    <S.Header>
        <img src={web} alt="" />
        <S.BoxMenu>
          <ul>
            <li>Mais vendidos</li>
            <li>Eletrodoméstico</li>
            <li>Tecnologia</li>
          </ul>
        </S.BoxMenu>   
        <S.BoxIcon>
        <FaUser />
        <FaShoppingCart />
        </S.BoxIcon>
    </S.Header>
  )
}
