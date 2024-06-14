import React from "react";
import Header from "../../Components/Header";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <FaLocationDot />
            <h2>Informe seu CEP</h2>
          </div>

          <div>
            <input type="text" />
            <FaSearch />
          </div>
        </section>
      </main>
    </>
  );
}
