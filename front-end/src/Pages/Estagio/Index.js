import React, { useEffect, useState } from "react";

import imgDelete from "../../assets/delete.webp";
import imgEdit from "../../assets/black-ink-pen.webp";

import imgEnterprise from "../../assets/enterprise.webp";
import imgCertificate from "../../assets/certificate.webp";
import imgWorker from "../../assets/worker.webp";
import imgPadrao from "../../assets/android-character-symbol.webp";

import "./style.css";

import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";
import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

export default function Estagio() {
  const [Estagios, SetEstagios] = useState([]);
  const [idEstagio, setIdEstagio] = useState(0);
  const [Periodo, SetPeriodo] = useState("");
  const [Estatiscas, setEstatiscas] = useState([]);
  const [EstagioFiltro, setEstagioFiltro] = useState([]);
  const [Opcao, setOpcao] = useState("");

  useEffect(() => {
    listarEstagios();
    listarEstatisticas();
  }, []);

  function FiltroMeses(opcao) {
    for (var i = 0; i < Estagios.length; i++) {
      if (Estagios[i].tempoEstagiado == opcao) {
        EstagioFiltro.push(Estagios[i]);
      }
    }
  }

  function View() {
    if (Opcao === "") {
      return (
        <div className="ListaEstagios">
          {Estagios.map((item) => {
            return (
              <div key={item.idEstagio} className="Estagio">
                <div className="Ferramentas">
                  <img
                    className="Edit"
                    src={imgEdit}
                    onClick={(event) => {
                      setIdEstagio(item.idEstagio);
                      AparecerEditarEstagio();
                    }}
                  />
                  <img
                    className="Delete"
                    src={imgDelete}
                    onClick={() => DeletarEstagio(item.idEstagio)}
                  />
                </div>
                <div className="CabecaEstagio">
                  <img src={'http://localhost:5000/imgPerfil/'+item.caminhoImagem} alt="ImagemPerfil" />
                  <h3>{item.nomeCompleto}</h3>
                  <hr className="hr" />
                  <h5>{item.nomeCurso}</h5>
                </div>
                <div className="CorpoEstagio">
                  <Tag NomeTag={"E-mail:" + item.emailCandidato}></Tag>
                  <Tag NomeTag={"Telefone:" + item.telefone}></Tag>
                  <Tag NomeTag={"Status:" + item.statusEstagio}></Tag>
                  <Tag
                    NomeTag={"Periodo do estagio:" + item.periodoEstagio+"meses"}
                  ></Tag>
                  <Tag NomeTag={"TempoEstagiado:" + item.tempoEstagiado}></Tag>
                  <Tag NomeTag={"Empresa:" + item.razaoSocial}></Tag>
                  <a className="Link" href="teste">
                    Ver perfil
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (Opcao !== "") {
      EstagioFiltro.splice(0, Number.MAX_VALUE);
      FiltroMeses(Opcao);
      return (
        <div className="ListaEstagios">
          {EstagioFiltro.map((item) => {
            return (
              <div key={item.idEstagio} className="Estagio">
                <div className="Ferramentas">
                  <img
                    className="Edit"
                    src={imgEdit}
                    onClick={(event) => {
                      setIdEstagio(item.idEstagio);
                      AparecerEditarEstagio();
                    }}
                  />
                  <img
                    className="Delete"
                    src={imgDelete}
                    onClick={() => DeletarEstagio(item.idEstagio)}
                  />
                </div>
                <div className="CabecaEstagio">
                  <img src={'http://localhost:5000/imgPerfil/'+item.caminhoImagem} alt="ImagemPerfil" />
                  <h3>{item.nomeCompleto}</h3>
                  <hr className="hr" />
                  <h5>{item.nomeCurso}</h5>
                </div>
                <div className="CorpoEstagio">
                  <Tag NomeTag={"E-mail:" + item.emailCandidato}></Tag>
                  <Tag NomeTag={"Telefone:" + item.telefone}></Tag>
                  <Tag NomeTag={"Status:" + item.statusEstagio}></Tag>
                  <Tag
                    NomeTag={"Periodo do estagio:" + item.periodoEstagio+"meses"}
                  ></Tag>
                  <Tag NomeTag={"TempoEstagiado:" + item.tempoEstagiado}></Tag>
                  <Tag NomeTag={"Empresa:" + item.razaoSocial}></Tag>
                  <a className="Link" href="teste">
                    Ver perfil
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  const listarEstatisticas = () => {
    fetch("http://localhost:5000/api/Administrador/Estatisticas", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setEstatiscas(dados);
      })
      .catch((err) => console.error(err));
  };

  const DeletarEstagio = (idEstagio) => {
    fetch(
      "http://localhost:5000/api/Administrador/DeletarEstagio/" + idEstagio,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listarEstagios();
        listarEstatisticas();
      })
      .catch((err) => console.error(err));
  };

  const EditarEstagio = () => {
    const form = {
      periodoEstagio: Periodo
    };
    fetch(
      "http://localhost:5000/api/Administrador/AtualizarEstagio/" + idEstagio,
      {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel editar esse estagio");
        } else {
          alert("Editado com sucesso");
          listarEstagios();
        }
      })
      .catch((err) => console.error(err));
  };

  const listarEstagios = () => {
    fetch("http://localhost:5000/api/Administrador/ListarEstagios", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetEstagios(dados);
      })
      .catch((err) => console.error(err));
  };

  function AparecerEditarEstagio() {
    let idAdcPelicula = document.getElementById("peliculaEstagio");
    let idModalTecnologia = document.getElementById("modalEstagio");
    if (idAdcPelicula.classList == "peliculaEstagio none")
      idAdcPelicula.classList.remove("none");
    idModalTecnologia.classList.remove("none");
  }

  function btn_fecharModalEditarEstagio() {
    let idAdcPelicula = document.getElementById("peliculaEstagio");
    let idModalTecnologia = document.getElementById("modalEstagio");
    if (idAdcPelicula.classList != "peliculaEstagio none") {
      idAdcPelicula.classList.add("none");
      idModalTecnologia.classList.add("none");
    }
  }

  return (
    <div className="bodyPartEstagio">
      <AccessBar />
      <Header />
      <AccessMenu />
      <br />
      <div className="Estatisticas">
        <div className="Empresascadastradas">
          <img src={imgEnterprise} />
          <div className="EstatiscaColumn">
            <h5>{Estatiscas[0]}</h5>
            <br />
            <h5>Empresas cadastradas</h5>
          </div>
        </div>
        <div className="Candidatoscontratados">
          <img src={imgCertificate} />
          <div className="EstatiscaColumn">
            <h5>{Estatiscas[1]}</h5>
            <br />
            <h5>Candidatos contratados</h5>
          </div>
        </div>
        <div className="Candidatoscadastrados">
          <img src={imgWorker} />
          <div className="EstatiscaColumn">
            <h5>{Estatiscas[2]}</h5>
            <br />
            <h5>Candidatos cadastrados</h5>
          </div>
        </div>
      </div>
      <br />
      <select className="selectEstagio" onChange={(e) => setOpcao(e.target.value)} value={Opcao}>
        <option value="" onClick={(e) => setOpcao(e.target.value)}>
          Filtre sua busca por tempo estagiado
        </option>
        <option value="3" onClick={(e) => setOpcao(e.target.value)}>
          3 Meses
        </option>
        <option value="6" onClick={(e) => setOpcao(e.target.value)}>
          6 Meses
        </option>
        <option value="9" onClick={(e) => setOpcao(e.target.value)}>
          9 Meses
        </option>
        <option value="12" onClick={(e) => setOpcao(e.target.value)}>
          12 Meses
        </option>
      </select>
      <div>{View()}</div>
      <div
        id="peliculaEstagio"
        className="peliculaEstagio none"
        onClick={btn_fecharModalEditarEstagio}
      ></div>
      <div id="modalEstagio" className="modalEstagio none">
        <h2>Editar estágio</h2>
        <form>
          <Input
            name="Periodo"
            className="cadastre"
            label="Periodo"
            type="text"
            placeholder="9"
            required
            onChange={(e) => SetPeriodo(e.target.value)}
          />
          <div className="btEditarEstagioDiv">
            <button className="btVaga" onClick={EditarEstagio}>
              Editar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
