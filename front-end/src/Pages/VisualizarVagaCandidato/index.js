import React from "react";

// style
import "./visualizarvaga.css";

// components
import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import Footer from "../../Components/Footer/index";
import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";

// imagens
import imgDesenvolvimento from "../../assets/web-programming.jpg";
import imgGlobal from "../../assets/global.png";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.jpg";
import imgSalario from "../../assets/money (1).jpg";
import imgTipoContrato from "../../assets/gears.jpg";
import imgFuncao from "../../assets/rocket-launch.jpg";
import IconEmpresa from "../../assets/building.jpg";
import user from '../../assets/images/user.jpg'
import { useHistory } from "react-router-dom";

export default function VisualizarVaga() {
  let history = useHistory();

  return (
    <div className="VisualizarVaga">
      <AccessBar />
      <Header />
      <AccessMenu />
      <main className="sessaoVisualizarVaga">
        <section className="imgBannerDescriVaga">
          <div className="divisionIntroVaga">
            <h2 className="v-titleVaga">Desenvolvedor Full Stack</h2>

            <div className="divisionTagsLinguagem">
              <Tag NomeTag={"C#"} />
              <Tag NomeTag={"Entity Framework"} />
              <Tag NomeTag={"C++"} />
              <Tag NomeTag={"Forms"} />
              <Tag NomeTag={"Android"} />
            </div>
          </div>
        </section>

        <section className="infoVagaVisualizar">
          <div className="icard-division">
            <img
              className="ImagemEmpresa"
              src={user}
              alt="Logo da empresa"
            />

            <div className="divisionTagsVagas">
              <div className="card-vaga-info">
                <InfoVaga NomeProp={"RazaoSocial"} source={IconEmpresa} />
                <InfoVaga NomeProp={"Cidade"} source={imgLocalizacao} />
                <InfoVaga NomeProp={"Experiencia"} source={imgFuncao} />
              </div>

              <div className="card-vaga-info">
                <InfoVaga NomeProp={"TipoContrato"} source={imgTipoContrato} />
                <InfoVaga NomeProp={"Salario"} source={imgSalario} />
                <InfoVaga NomeProp={"Area"} source={imgDesenvolvimento} />
                <InfoVaga NomeProp={"tipoPresenca"} source={imgGlobal} />
              </div>
            </div>
          </div>
        </section>

        <section className="sessao-svempresa">
          <div className="descri-empresa">
            <h2>Descrição da empresa</h2>

            <p>A melhor empresa do mercado, quem fez parte recomenda !!!</p>
          </div>

          <div className="descri-vaga">
            <h2>Requisitos da vaga</h2>
            <p>A melhor vaga que você encontrará nos proximos meses</p>
          </div>
        </section>

        <section className="divisionBeneVaga">
          <div className="centerBene">
            <h2>O que oferecemos</h2>

            <div className="divisionPlan">
              <div className="divisionPlan">
                <p>Vale transporte</p>
              </div>
            </div>
            <button
              className="btnCandidatase"
              type="submit"
              onClick={() => alert("Inscrição realizada com sucesso")}
            >
              Me Candidatar
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
