import React from "react";

import AccessBar from "../../Components/AccessBar";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import "./style.css";
import Refresh from "../../assets/images/refresh.webp";
import AccessMenu from "../../Components/AccessMenu";

export default function ListaBanidos() {
  return (
    <body className="corpo">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="marginBanidos">
        <h1 className="tituloBanidos">Lista de Banidos</h1>

        <div className="banidoBox">
          <div className="colunaMobile">
            <div className="banido">
              <img
                className="user"
                src={""}
                alt="Imagem de perfil do usuario"
              />
              <h4>Marcelo Fontes</h4>
            </div>
            <div className="info">
              <p>ID:100</p>
              <p>E-mail:Marcelo@gmail.com</p>
            </div>
          </div>
          <div className="data">
            <div className="desbanir">
              <p>Desbanir</p>
              <img
                src={Refresh}
                onClick={() =>
                  alert("O usuario ja pode voltar utilizar o sistema")
                }
                alt="Botão que retorna o aceeso ao usuario banido"
              />
            </div>
          </div>
        </div>

        <div className="banidoBox">
          <div className="colunaMobile">
            <div className="banido">
              <img
                className="user"
                src={""}
                alt="Imagem de perfil do usuario"
              />
              <h4>Marcelo Fontes</h4>
            </div>
            <div className="info">
              <p>ID:100</p>
              <p>E-mail:Marcelo@gmail.com</p>
            </div>
          </div>
          <div className="data">
            <div className="desbanir">
              <p>Desbanir</p>
              <img
                src={Refresh}
                onClick={() =>
                  alert("O usuario ja pode voltar utilizar o sistema")
                }
                alt="Botão que retorna o aceeso ao usuario banido"
              />
            </div>
          </div>
        </div>

        <div className="banidoBox">
          <div className="colunaMobile">
            <div className="banido">
              <img
                className="user"
                src={""}
                alt="Imagem de perfil do usuario"
              />
              <h4>Marcelo Fontes</h4>
            </div>
            <div className="info">
              <p>ID:100</p>
              <p>E-mail:Marcelo@gmail.com</p>
            </div>
          </div>
          <div className="data">
            <div className="desbanir">
              <p>Desbanir</p>
              <img
                src={Refresh}
                onClick={() =>
                  alert("O usuario ja pode voltar utilizar o sistema")
                }
                alt="Botão que retorna o aceeso ao usuario banido"
              />
            </div>
          </div>
        </div>

        <div className="banidoBox">
          <div className="colunaMobile">
            <div className="banido">
              <img
                className="user"
                src={""}
                alt="Imagem de perfil do usuario"
              />
              <h4>Marcelo Fontes</h4>
            </div>
            <div className="info">
              <p>ID:100</p>
              <p>E-mail:Marcelo@gmail.com</p>
            </div>
          </div>
          <div className="data">
            <div className="desbanir">
              <p>Desbanir</p>
              <img
                src={Refresh}
                onClick={() =>
                  alert("O usuario ja pode voltar utilizar o sistema")
                }
                alt="Botão que retorna o aceeso ao usuario banido"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
