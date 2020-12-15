import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";

import Tag from "../../Components/Tag/Index";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgGlobal from "../../assets/global.png";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";
import InfoVaga from "../../Components/InfoVaga/Index";

import "./style.css";

export default function VizualizarVagaEmpresa() {
  let history = useHistory();

  return (
    <div className="bodyPartVizualizarVagaEmpresa">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="BannerVizualizarVagaEmpresa">
        <h1>Veja quem se candidatou a sua vaga</h1>
      </div>
      <br />
      <div className="vaga">
        <div className="VagaCompleta">
          <img
            src={"http://localhost:5000/imgPerfil/"}
            className="ImagemEmpresa"
            alt="Iamgem de perfil da empresa"
          />
          <div className="MainVaga">
            <h3>Desenvolvimento</h3>
            <div className="InfoVagas">
              <InfoVaga
                NomeProp={"RazaoSocial"}
                source={IconEmpresa}
              ></InfoVaga>
              <InfoVaga NomeProp={"Cidade"} source={imgLocalizacao}></InfoVaga>
              <InfoVaga NomeProp={"Experiencia"} source={imgFuncao}></InfoVaga>
              <InfoVaga
                NomeProp={"TipoContrato"}
                source={imgTipoContrato}
              ></InfoVaga>
              <InfoVaga NomeProp={"Salario"} source={imgSalario}></InfoVaga>
              <InfoVaga NomeProp={"TipoPresenca"} source={imgGlobal} />
              <InfoVaga
                NomeProp={"NomeArea"}
                source={imgDesenvolvimento}
              ></InfoVaga>
            </div>
            <div className="TecnologiasVaga">
              <Tag NomeTag={"C3"}></Tag>
              <Tag NomeTag={"C3"}></Tag>
              <Tag NomeTag={"C3"}></Tag>
              <Tag NomeTag={"C3"}></Tag>
              <Tag NomeTag={"C3"}></Tag>
              <Tag NomeTag={"C3"}></Tag>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btAprovados"
        onClick={() => history.push("/candidatosAprovados")}
      >
        Candidatos aprovados para esta vaga
      </button>
      <div className="ListaDeInscicoes">
        <div  className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={"http://localhost:5000/imgPerfil/"}
              alt="Imagem de Perfil do candidato"
            />
            <h3>Douglas</h3>
            <hr className="hr" />
            <h5>Desenvolvimento de sistemas</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:"}></Tag>
            <Tag NomeTag={"Telefone:"}></Tag>
          </div>
          <div className="AprovarRecusar">
            <button
              className="Aprovar"
              onClick={() => alert("Candidato aprovado com sucesso")}
            >
              Aprovar
            </button>
            <button
              className="Recusar"
              onClick={() => alert("Candidato reprovado com sucesso")}
            >
              Reprovar
            </button>
          </div>
        </div>
        );
      </div>
      <Footer />
    </div>
  );
}
