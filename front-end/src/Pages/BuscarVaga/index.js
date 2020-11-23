import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

import imgEmpresa from "../../assets/Teste.webp";
import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import imgGlobal from '../../assets/global.png';
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";

import banner from "../../assets/bannerBuscarVagas.webp";

import "./style.css";

export default function BuscarVaga() {
  let history = useHistory();
  const [ListVagas, SetListVagas] = useState([]);
  let [idVaga, SetIdVaga] = useState(0);
  const [OpcaoFiltro, setOpcaoFiltro] = useState('');
  const [VagaTipoContrato, setVagaTipoContrato] = useState([]);
  const [VagaExperiencia, setVagaExperiencia] = useState([]);
  
  useEffect(() => {
    listarVagas();
    View();
  }, []);

  const FiltrarTipoContrato = (tipo) => {
    for (let i = 0; i < ListVagas.length; i++) {
      if (ListVagas[i].tipoContrato == tipo) {
        VagaTipoContrato.push(ListVagas[i]);
      }
    }
  }

  const FiltrarExperiencia = (Experiencia) => {
    for (let i = 0; i < ListVagas.length; i++) {
      if (ListVagas[i].experiencia == Experiencia) {
        VagaExperiencia.push(ListVagas[i]);
      }
    }
  }

  function View() {
    if (OpcaoFiltro == '') {
      return (
        <div className="vagas">
          {
            ListVagas.map((item) => {
              return (
                <div
                  key={item.idVaga}
                  className="vaga"
                  onClick={(event) => {
                    idVaga = item.idVaga;
                    BuscarVagaPeloId();
                  }}
                >
                  <div className="VagaCompleta">
                    <img
                      src={imgEmpresa}
                      className="ImagemEmpresa"
                      alt=""
                    ></img>
                    <div className="MainVaga">
                      <h3>{item.tituloVaga}</h3>
                      <div className="InfoVagas">
                        <InfoVaga
                          NomeProp={item.razaoSocial}
                          source={IconEmpresa}
                        />
                        <InfoVaga
                          NomeProp={item.localidade}
                          source={imgLocalizacao}
                        />
                        <InfoVaga
                          NomeProp={item.experiencia}
                          source={imgFuncao}
                        />
                        <InfoVaga
                          NomeProp={item.tipoContrato}
                          source={imgTipoContrato}
                        />
                        <InfoVaga NomeProp={item.salario} source={imgSalario} />
                        <InfoVaga
                          NomeProp={item.nomeArea}
                          source={imgDesenvolvimento}
                        />
                        <InfoVaga
                          NomeProp={item.tipoPresenca}
                          source={imgGlobal}
                        />
                      </div>
                      <div className="TecnologiasVaga">
                        {item.tecnologias.map((tec) => {
                          return <Tag key={tec} NomeTag={tec}></Tag>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }else if(OpcaoFiltro=="CLT" ||OpcaoFiltro== "PJ" || OpcaoFiltro== "Estágio"){
      VagaTipoContrato.splice(0, Number.MAX_VALUE);
      FiltrarTipoContrato(OpcaoFiltro);
      return (
        <div className="vagas">
          {
            VagaTipoContrato.map((item) => {
              return (
                <div
                  key={item.idVaga}
                  className="vaga"
                  onClick={(event) => {
                    event.preventDefault();
                    idVaga = item.idVaga;
                    BuscarVagaPeloId();
                  }}
                >
                  <div className="VagaCompleta">
                    <img
                      src={imgEmpresa}
                      className="ImagemEmpresa"
                      alt="Imagem empresa"
                    ></img>
                    <div className="MainVaga">
                      <h3>{item.tituloVaga}</h3>
                      <div className="InfoVagas">
                        <InfoVaga
                          NomeProp={item.razaoSocial}
                          source={IconEmpresa}
                        />
                        <InfoVaga
                          NomeProp={item.localidade}
                          source={imgLocalizacao}
                        />
                        <InfoVaga
                          NomeProp={item.experiencia}
                          source={imgFuncao}
                        />
                        <InfoVaga
                          NomeProp={item.tipoContrato}
                          source={imgTipoContrato}
                        />
                        <InfoVaga NomeProp={item.salario} source={imgSalario} />
                        <InfoVaga
                          NomeProp={item.nomeArea}
                          source={imgDesenvolvimento}
                        />
                        <InfoVaga
                          NomeProp={item.tipoPresenca}
                          source={imgGlobal}
                        />
                      </div>
                      <div className="TecnologiasVaga">
                        {item.tecnologias.map((tec) => {
                          return <Tag key={tec} NomeTag={tec}></Tag>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }else if(OpcaoFiltro=="Júnior" ||OpcaoFiltro== "Pleno" || OpcaoFiltro== "Sênior"){
      VagaExperiencia.splice(0, Number.MAX_VALUE);
      FiltrarExperiencia(OpcaoFiltro);
      return (
        <div className="vagas">
          {
            VagaExperiencia.map((item) => {
              return (
                <div
                  key={item.idVaga}
                  className="vaga"
                  onClick={(event) => {
                    event.preventDefault();
                    idVaga = item.idVaga;
                    BuscarVagaPeloId();
                  }}
                >
                  <div className="VagaCompleta">
                    <img
                      src={imgEmpresa}
                      className="ImagemEmpresa"
                      alt="Imagem empresa"
                    ></img>
                    <div className="MainVaga">
                      <h3>{item.tituloVaga}</h3>
                      <div className="InfoVagas">
                        <InfoVaga
                          NomeProp={item.razaoSocial}
                          source={IconEmpresa}
                        />
                        <InfoVaga
                          NomeProp={item.localidade}
                          source={imgLocalizacao}
                        />
                        <InfoVaga
                          NomeProp={item.experiencia}
                          source={imgFuncao}
                        />
                        <InfoVaga
                          NomeProp={item.tipoContrato}
                          source={imgTipoContrato}
                        />
                        <InfoVaga NomeProp={item.salario} source={imgSalario} />
                        <InfoVaga
                          NomeProp={item.nomeArea}
                          source={imgDesenvolvimento}
                        />
                        <InfoVaga
                          NomeProp={item.tipoPresenca}
                          source={imgGlobal}
                        />
                      </div>
                      <div className="TecnologiasVaga">
                        {item.tecnologias.map((tec) => {
                          return <Tag key={tec} NomeTag={tec}></Tag>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
  }

  function BuscarVagaPeloId(event) {
    localStorage.setItem("idVagaSelecionada", idVaga);
    history.push("/VisualizarVagaCandidato");
  }

  const listarVagas = () => {
    fetch("http://localhost:5000/api/Candidato/ListarVagasPrincipal", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetListVagas(dados);
      })
      .catch((err) => console.error(err));
  };

  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />

      <div className="content-searchJobs">
        <div>
          <Input
            label="Busque sua vaga aqui"
            type="text"
            placeholder="Ex.: Desenvolvedor"
          />
          <button class="fa fa-search btn-search"></button>
          <img
            src={banner}
            alt="Pessoa utilizando um computador, que está em cima de uma mesa"
            className="imgBackground-searchJobs"
          />
        </div>

        <div className="main-content-search-jobs">
          <div id="filter-searchJobs">
            <button className="btn-active" id="btn-all" onClick={e=>setOpcaoFiltro(e.target.value)} value=''>
              Todas as vagas
            </button>
            <p><strong>Filtrar por tipo de contrato:</strong></p>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='CLT'>
              CLT
            </button>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='Estágio'>
              Estágio
            </button>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='PJ'>
              PJ
            </button>
            <p><strong>Filtrar por experiência:</strong></p>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='Júnior'>
              Júnior
            </button>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='Pleno'>
              Pleno
            </button>
            <button className="btn-filter" onClick={e=>setOpcaoFiltro(e.target.value)} value='Sênior'>
              Sênior
            </button>
          </div>
          {
          View()
          }
        </div>
      </div>
      <Footer />
    </body>
  );
}
