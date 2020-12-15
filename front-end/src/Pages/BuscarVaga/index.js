import React from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";

import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import imgGlobal from "../../assets/global.png";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";

import "./style.css";

export default function BuscarVaga() {
  let history = useHistory();
  return (
    <div>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="BarraPesquisa">
        <h2>Busque sua vaga aqui</h2>
        <br />
        <div className="PeliculaPesquisa">
          <div className="InputPesquisa">
            <select className="InputPesquisa">
              <option value="">Selecione a tecnologia que esta buscando</option>
            </select>
          </div>
          <div>
            <button id="BotaoPesquisa">Pesquisar</button>
          </div>
        </div>
      </div>
      <div className="content-searchJobs">
        <div className="main-content-search-jobs">
          <div id="filter-searchJobs">
            <button className="btn-active" id="btn-all" value="">
              Todas as vagas
            </button>
            <p>
              <strong>Filtrar por contrato:</strong>
            </p>
            <button className="btn-filter" value="CLT">
              CLT
            </button>
            <button className="btn-filter" value="Estagio">
              Estágio
            </button>
            <button className="btn-filter" value="PJ">
              PJ
            </button>
            <p>
              <strong>Filtrar por experiência:</strong>
            </p>
            <button className="btn-filter" value="Júnior">
              Júnior
            </button>
            <button className="btn-filter" value="Pleno">
              Pleno
            </button>
            <button className="btn-filter" value="Sênior">
              Sênior
            </button>
          </div>
          <div className="vagas">
            <div
              className="vaga"
              onClick={(event) => {
                event.preventDefault();
                history.push("/VisualizarVagaCandidato");
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
                  <h3 className="UnderlineText">
                    {"Desenvolvedor Full stack"}
                  </h3>
                  <div className="InfoVagas">
                    <InfoVaga
                      NomeProp={"SENAI Informática"}
                      source={IconEmpresa}
                    />
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

            <div
              className="vaga"
              onClick={(event) => {
                event.preventDefault();
                history.push("/VisualizarVagaCandidato");
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
                  <h3 className="UnderlineText">
                    {"Desenvolvedor Full stack"}
                  </h3>
                  <div className="InfoVagas">
                    <InfoVaga
                      NomeProp={"SENAI Informática"}
                      source={IconEmpresa}
                    />
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

            <div
              className="vaga"
              onClick={(event) => {
                event.preventDefault();
                history.push("/VisualizarVagaCandidato");
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
                  <h3 className="UnderlineText">
                    {"Desenvolvedor Full stack"}
                  </h3>
                  <div className="InfoVagas">
                    <InfoVaga
                      NomeProp={"SENAI Informática"}
                      source={IconEmpresa}
                    />
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

            <div
              className="vaga"
              onClick={(event) => {
                event.preventDefault();
                history.push("/VisualizarVagaCandidato");
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
                  <h3 className="UnderlineText">
                    {"Desenvolvedor Full stack"}
                  </h3>
                  <div className="InfoVagas">
                    <InfoVaga
                      NomeProp={"SENAI Informática"}
                      source={IconEmpresa}
                    />
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
