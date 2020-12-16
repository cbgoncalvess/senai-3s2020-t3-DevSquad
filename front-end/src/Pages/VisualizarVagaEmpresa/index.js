import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";

import Tag from "../../Components/Tag/Index";
import imgDesenvolvimento from "../../assets/web-programming.jpg";
import imgGlobal from "../../assets/global.png";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.jpg";
import imgSalario from "../../assets/money (1).jpg";
import imgTipoContrato from "../../assets/gears.jpg";
import imgFuncao from "../../assets/rocket-launch.jpg";
import IconEmpresa from "../../assets/building.jpg";
import InfoVaga from "../../Components/InfoVaga/Index";

import user from '../../assets/images/user.jpg'

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
            src={user}
            className="ImagemEmpresa"
            alt="Iamgem de perfil da empresa"
          />
          <div className="MainVaga">
            <h3>Desenvolvimento</h3>
            <div className="InfoVagas">
              <InfoVaga
                NomeProp={"SENAI Informática"}
                source={IconEmpresa}
              ></InfoVaga>
              <InfoVaga NomeProp={"São Paulo"} source={imgLocalizacao}></InfoVaga>
              <InfoVaga NomeProp={"Júnior"} source={imgFuncao}></InfoVaga>
              <InfoVaga
                NomeProp={"PJ"}
                source={imgTipoContrato}
              ></InfoVaga>
              <InfoVaga NomeProp={"R$4.000"} source={imgSalario}></InfoVaga>
              <InfoVaga NomeProp={"Presencial"} source={imgGlobal} />
              <InfoVaga
                NomeProp={"Desenvolvimento"}
                source={imgDesenvolvimento}
              ></InfoVaga>
            </div>
            <div className="TecnologiasVaga">
                <Tag NomeTag={"Entity framework"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C++"}></Tag>
                <Tag NomeTag={"SQL"}></Tag>
                <Tag NomeTag={"React"}></Tag>
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
              src={user}
              alt="Imagem de Perfil do candidato"
            />
            <h3>Candidato</h3>
            <hr className="hr" />
            <h5>Desenvolvimento de sistemas</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Candidato@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
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
      </div>
      <Footer />
    </div>
  );
}
