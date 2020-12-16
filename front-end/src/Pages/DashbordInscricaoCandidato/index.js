import React from "react";

//style
import "./style.css";

// components
import AccessBar from "../../Components/AccessBar/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import InfoVaga from "../../Components/InfoVaga/Index";
import Tag from "../../Components/Tag/Index";

// images
import imgGlobal from "../../assets/global.png";
import imgDesenvolvimento from "../../assets/web-programming.jpg";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.jpg";
import imgSalario from "../../assets/money (1).jpg";
import imgTipoContrato from "../../assets/gears.jpg";
import imgFuncao from "../../assets/rocket-launch.jpg";
import IconEmpresa from "../../assets/building.jpg";
import AccessMenu from "../../Components/AccessMenu";

export default function InscricaoDashboardCandidato() {
  return (
    <div className="InscricaoDashboardCandidato">
      <AccessBar />
      <Header />
      <AccessMenu />
      <main className="">
        <div className="bannerDashboardCandidato">
          <h2>Bem-vindo, Candidato ;)!</h2>
        </div>

        <section className="sessaoVagaInscritas">
          <div className="title-vagas-inscritas">
            <h3>Vagas que você se inscreveu:</h3>
          </div>

          <div className="listadeVagas">
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
                  <h3>
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
                  <h3>
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
                  <h3>
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
                  <h3 >
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
