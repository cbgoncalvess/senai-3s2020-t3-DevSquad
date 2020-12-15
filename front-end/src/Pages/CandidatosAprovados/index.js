import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";

import "./style.css";
import Tag from "../../Components/Tag/Index";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgGlobal from "../../assets/global.png";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";
import InfoVaga from "../../Components/InfoVaga/Index";

export default function VizualizarCandidatosAprovados() {
  return (
    <div className="bodyPartVizualizarVagaEmpresa">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="BannerVizualizarVagaEmpresa">
        <h1>Veja quem foi aprovado à sua vaga</h1>
      </div>
      <br />
      <div
        className="vaga"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        <div className="VagaCompleta">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NAVoV-pbGXsmDghOSFajt5UU1VhqgVvB4w&usqp=CAU"
            }
            className="ImagemEmpresa"
            alt="Imagem de perfil"
          ></img>
          <div className="MainVaga">
            <h3 className="UnderlineText">{"Desenvolvedor Full stack"}</h3>
            <div className="InfoVagas">
              <InfoVaga NomeProp={"SENAI Informática"} source={IconEmpresa} />
              <InfoVaga NomeProp={"São Paulo"} source={imgLocalizacao} />
              <InfoVaga NomeProp={"Júnior"} source={imgFuncao} />
              <InfoVaga NomeProp={"CLT"} source={imgTipoContrato} />
              <InfoVaga NomeProp={"5.000"} source={imgSalario} />
              <InfoVaga
                NomeProp={"Desenvolvimento"}
                source={imgDesenvolvimento}
              />
              <InfoVaga NomeProp={"Presencial"} source={imgGlobal} />
            </div>
            <div className="TecnologiasVaga">
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C++"}></Tag>
              <Tag NomeTag={"Entity framework"}></Tag>
              <Tag NomeTag={"React"}></Tag>
              <Tag NomeTag={"Flutther"}></Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="ListaDeInscicoes">
        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={"imf"}
              alt="ImagemPerfil"
            />
            <h3>{"Douglas"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistema"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={"imf"}
              alt="ImagemPerfil"
            />
            <h3>{"Douglas"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistema"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={"imf"}
              alt="ImagemPerfil"
            />
            <h3>{"Douglas"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistema"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={"imf"}
              alt="ImagemPerfil"
            />
            <h3>{"Douglas"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistema"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
