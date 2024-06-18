import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Compras from "./pages/Compras";
import MaisVendidos from "./pages/MaisVendidos";
import Eletrodomestico from "./pages/Eletrodomestico";
import Tecnologia from "./pages/Tecnologia";
import Header from "./Components/Header";
import Perfil from "./pages/Perfil";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/vendido" element={<MaisVendidos />} />
        <Route path="/eletros" element={<Eletrodomestico />} />
        <Route path="/tec" element={<Tecnologia />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
