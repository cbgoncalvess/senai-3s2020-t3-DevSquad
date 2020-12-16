import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";

import "./style.css";
import Tag from "../../Components/Tag/Index";
import imgDesenvolvimento from "../../assets/web-programming.jpg";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.jpg";
import imgGlobal from "../../assets/global.png";
import imgSalario from "../../assets/money (1).jpg";
import imgTipoContrato from "../../assets/gears.jpg";
import imgFuncao from "../../assets/rocket-launch.jpg";
import IconEmpresa from "../../assets/building.jpg";
import InfoVaga from "../../Components/InfoVaga/Index";

import user from '../../assets/images/user.jpg'

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
            src={user}
            className="ImagemEmpresa"
            alt="Imagem de perfil"
          ></img>
          <div className="MainVaga">
            <h3 >{"Desenvolvedor Full stack"}</h3>
            <div className="InfoVagas">
              <InfoVaga NomeProp={"SENAI Informática"} source={IconEmpresa} />
              <InfoVaga NomeProp={"São Paulo"} source={imgLocalizacao} />
              <InfoVaga NomeProp={"Júnior"} source={imgFuncao} />
              <InfoVaga NomeProp={"CLT"} source={imgTipoContrato} />
              <InfoVaga NomeProp={"4.000"} source={imgSalario} />
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
              src={user}
              alt="ImagemPerfil"
            />
            <h3>{"Douglas Mantovani"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistemas"}</h5>
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
              src={user}
              alt="ImagemPerfil"
            />
            <h3>{"Aléxia Melhado"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistemas"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Alexia@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={user}
              alt="ImagemPerfil"
            />
            <h3>{"André Akira"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistemas"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Andre@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>

        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={user}
              alt="ImagemPerfil"
            />
            <h3>{"Carlos Eduardo"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistemas"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Carlos@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>

        <div className="Inscricao">
          <div className="CabecaInscricao">
            <img
              className="imgperfilInscricao"
              src={user}
              alt="ImagemPerfil"
            />
            <h3>{"Marcos Tomás"}</h3>
            <hr className="hr" />
            <h5>{"Desenvolvimento de sistemas"}</h5>
          </div>
          <div className="CorpoInscricao">
            <Tag NomeTag={"E-mail:Marcos@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:40028922"}></Tag>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
