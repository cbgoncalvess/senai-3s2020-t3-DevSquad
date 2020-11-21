import React from "react";
import { Link } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";
import Robot from "../../Components/imgsvg/robot.js";

import Techvagas from "../../assets/logops.webp";

import "./style.css";

const Unauthorized = () => {
  return (
    <div className="not-found-all">
      <AccessBar />
      <AccessMenu />
      <div className="not-found">
        <div className="not-found-text">
          <img
            src={Techvagas}
            className="not-found-text-img"
            alt="Logo TechVagas"
          />
          <h3>
            <strong>Erro 401</strong>
          </h3>
          <h3>Você não pode mexer aqui. Autentique-se</h3>
          <p>
            Volte para a{" "}
            <Link to="/" className="pagina-principal-link">
              página principal.
            </Link>
          </p>
        </div>
        <div className="not-found-img">
          <Robot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Unauthorized;
