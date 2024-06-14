import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header>
        <h2>Web Compras</h2>
        <input type="text" />
        <FaUser />
        <FaShoppingCart />
    </header>
  )
}
