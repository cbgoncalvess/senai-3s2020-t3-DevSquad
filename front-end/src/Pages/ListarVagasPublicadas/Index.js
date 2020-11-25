import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

import imgDelete from "../../assets/delete.webp";
import imgGlobal from "../../assets/global.png";
import imgEdit from "../../assets/black-ink-pen.webp";
import imgEmpresa from "../../assets/Teste.webp";
import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";
import AccessMenu from "../../Components/AccessMenu";

import "./style.css";

export default function VagasPublicadas() {
  const [ListaDeVagas, SetListVagas] = useState([]);
  const [TecnologiasDaVaga, SetTecnologiasDaVaga] = useState([]);
  const [Tecnologias, SetTecnologias] = useState([]);
  const [Areas, SetListAreas] = useState([]);
  let [idTecnologia, SetIdTecnologia] = useState(0);
  let [NomeTecnologia, SetNomeTecnologia] = useState("");
  let [idVaga, SetIdVaga] = useState(0);

  /* Editar Vaga */
  const [Experiencia, setExperiencia] = useState("");
  const [Area, setArea] = useState(0);
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState(0);
  const [DescricaoBeneficio, setDescricaoBeneficio] = useState("");
  const [DescricaoEmpresa, setDescricaoEmpresa] = useState("");
  const [DescricaoVaga, setDescricaoVaga] = useState("");
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [Logradouro, setLogradouro] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [Estado, setEstado] = useState("");
  const [CEP, setCEP] = useState("");
  /* Editar Vaga */

  useEffect(() => {
    listarVagas();
    listarTecnologias();
    DadosDaVaga();
  }, []);

  let history = useHistory();

  function IrParaInscricoes() {
    localStorage.setItem("idVagaSelecionadaEmpresa", idVaga);
    history.push("/VagaEmpresa");
  }

  const listarAreas = () => {
    fetch("http://localhost:5000/api/Usuario/ListarArea", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetListAreas(dados);
      })
      .catch((err) => console.error(err));
  };

  const DadosDaVaga = () => {
    fetch("http://localhost:5000/api/Usuario/BuscarPorId/" + idVaga, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setTituloVaga(dados.tituloVaga);
        setArea(dados.idArea);
        setEstado(dados.estado);
        setLogradouro(dados.logradouro);
        setTipoContrato(dados.tipoContrato);
        setExperiencia(dados.experiencia);
        setSalario(dados.salario);
        setDescricaoBeneficio(dados.descricaoBeneficio);
        setComplemento(dados.complemento);
        setCidade(dados.localidade);
        setDescricaoEmpresa(dados.descricaoEmpresa);
        setExperiencia(dados.experiencia);
        setDescricaoVaga(dados.descricaoVaga);
        setCEP(dados.cep);
      })
      .catch((err) => console.error(err));
  };

  const AtualizarVaga = () => {
    const form = {
      tituloVaga: TituloVaga,
      idArea: Area,
      estado: Estado,
      logradouro: Logradouro,
      tipoContrato: TipoContrato,
      experiencia: Experiencia,
      salario: Salario,
      descricaoBeneficio: DescricaoBeneficio,
      complemento: Complemento,
      localidade: Cidade,
      descricaoEmpresa: DescricaoEmpresa,
      experiencia: Experiencia,
      descricaoVaga: DescricaoVaga,
      cep: CEP,
    };
    fetch("http://localhost:5000/api/Empresa/AtualizarVagaEmpresa/" + idVaga, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados)
        listarVagas();
      })
      .catch((err) => console.error(err));
  };

  function BuscarTecnologiaPorId(content) {
    for (var i = 0; i < Tecnologias.length; i++) {
      if (Tecnologias[i].nomeTecnologia === content) {
        return Tecnologias[i].idTecnologia;
      }
    }
  }

  const DeletarTecnologia = () => {
    var idTec = BuscarTecnologiaPorId(NomeTecnologia);
    const form = {
      idTecnologia: idTec,
      idVaga: idVaga,
    };
    fetch("http://localhost:5000/api/Empresa/DeletarTecnologiaDaVaga", {
      method: "DELETE",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        listarVagas();
      })
      .catch((err) => console.error(err));
  };

  const AdicionarTecnologia = () => {
    const form = {
      idTecnologia: idTecnologia,
      idVaga: idVaga,
    };
    fetch("http://localhost:5000/api/Empresa/AdicionarTecnologiaNaVaga", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        listarVagas();
      })
      .catch((err) => console.error(err));
  };

  const listarVagas = () => {
    fetch("http://localhost:5000/api/Empresa/ListarVagasPublicadas", {
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

  const listarTecnologias = () => {
    fetch("http://localhost:5000/api/Usuario/ListarTecnologia", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetTecnologias(dados);
      })
      .catch((err) => console.error(err));
  };

  function ApareceEditarVaga() {
    let idEditarPelicula = document.getElementById("peliculaEditarVaga");
    let idModalVaga = document.getElementById("ModalEditarVaga");
    if (idEditarPelicula.classList == "peliculaEditarVaga none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fechar() {
    let idModalVaga = document.getElementById("ModalEditarVaga");
    let idEditarPelicula = document.getElementById("peliculaEditarVaga");
    if (idEditarPelicula.classList != "peliculaEditarVaga none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAdicionarTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
    let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
    if (idAdcPelicula.classList == "peliculaAddTecnologia none")
      console.log(idVaga);
    idAdcPelicula.classList.remove("none");
    idModalTecnologia.classList.remove("none");
  }

  function btn_fecharTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
    let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
    if (idAdcPelicula.classList != "peliculaAddTecnologia none") {
      idAdcPelicula.classList.add("none");
      idModalTecnologia.classList.add("none");
      console.log(idVaga);
    }
  }

  function ApareceRemoverTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
    let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
    if (idAdcPelicula.classList == "peliculaRemoverTecnologia none")
      idAdcPelicula.classList.remove("none");
    idModalTecnologia.classList.remove("none");
  }

  function btn_fecharRemoverTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
    let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
    if (idAdcPelicula.classList != "peliculaRemoverTecnologia none") {
      idAdcPelicula.classList.add("none");
      idModalTecnologia.classList.add("none");
    }
  }

  const DeletarVaga = () => {
    fetch("http://localhost:5000/api/Empresa/DeletarVagaEmpresa/" + idVaga, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel deletar esta vaga");
        } else {
          alert("Vaga deletada com sucesso com sucesso");
          listarVagas();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bodyPartVagasPublicadas">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="ImagemHeader">
        <h1>Bem-vinda, Empresa!</h1>
      </div>

      <div className="ListaDeVagas">
        <h2>Vagas que você publicou nos últimos dias</h2>
        <br />
        {ListaDeVagas.map((item) => {
          return (
            <div key={item.idVaga} className="vaga">
              <div className="Edit-Delete">
                <a>Publicou a vaga em 10/02/2020</a>
                <img
                  className="Edit"
                  src={imgEdit}
                  id="btn-EditarVaga"
                  onClick={(event) => {
                    event.preventDefault();
                    ApareceEditarVaga();
                    listarAreas();
                    SetIdVaga(item.idVaga);
                    DadosDaVaga();
                  }}
                />
                <img
                  className="Delete"
                  src={imgDelete}
                  onClick={(event) => {
                    event.preventDefault();
                    SetIdVaga(item.idVaga);
                    DeletarVaga();
                  }}
                />
              </div>
              <div className="VagaCompleta">
                <img src={imgEmpresa} className="ImagemEmpresa"></img>
                <div className="MainVaga">
                  <h3
                    onClick={(e) => {
                      e.preventDefault();
                      idVaga = item.idVaga;
                      IrParaInscricoes();
                    }}
                  >
                    {item.tituloVaga}
                  </h3>
                  <div className="InfoVagas">
                    <InfoVaga
                      NomeProp={item.razaoSocial}
                      source={IconEmpresa}
                    />
                    <InfoVaga
                      NomeProp={item.localidade}
                      source={imgLocalizacao}
                    />
                    <InfoVaga NomeProp={item.experiencia} source={imgFuncao} />
                    <InfoVaga
                      NomeProp={item.tipoContrato}
                      source={imgTipoContrato}
                    />
                    <InfoVaga NomeProp={item.salario} source={imgSalario} />
                    <InfoVaga
                      NomeProp={item.nomeArea}
                      source={imgDesenvolvimento}
                    />
                    <InfoVaga NomeProp={item.tipoPresenca} source={imgGlobal} />
                  </div>
                  <div className="TecnologiasVaga">
                    {item.tecnologias.map((tec) => {
                      return <Tag key={tec} NomeTag={tec}></Tag>;
                    })}
                  </div>
                </div>
              </div>
              <div className="AdicionarRemoverTecnologia">
                <h6
                  className="underlineText"
                  onClick={(event) => {
                    event.preventDefault();
                    ApareceAdicionarTecnologia();
                    SetIdVaga(item.idVaga);
                  }}
                >
                  Adicionar tecnologia
                </h6>

                <h6
                  className="underlineText"
                  onClick={(event) => {
                    event.preventDefault();
                    ApareceRemoverTecnologia();
                    SetTecnologiasDaVaga(item.tecnologias);
                    SetIdVaga(item.idVaga);
                  }}
                >
                  Remover tecnologia
                </h6>
              </div>
            </div>
          );
        })}
      </div>

      <div
        id="peliculaRemoverTecnologia"
        className="peliculaRemoverTecnologia none"
        onClick={btn_fecharRemoverTecnologia}
      ></div>
      <div id="ModalRemoverTecnologia" className="ModalRemoverTecnologia none">
        <h2>Remover tecnologia Vaga</h2>
        <form>
          <div className="select">
            <label>Tecnologias</label>
            <select
              className="div-select"
              onChange={(e) => SetNomeTecnologia(e.target.value)}
              value={NomeTecnologia}
            >
              <option value="0">
                Selecione a tecnologia que deseja remover
              </option>
              {TecnologiasDaVaga.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={DeletarTecnologia} className="btVaga">
            Adicionar
          </button>
        </form>
      </div>

      <div
        id="peliculaAddTecnologia"
        className="peliculaAddTecnologia none"
        onClick={btn_fecharTecnologia}
      ></div>
      <div
        id="ModalAdicionarTecnologia"
        className="ModalAdicionarTecnologia none"
      >
        <h2>Adicionar uma tecnologia na Vaga</h2>
        <form>
          <div className="select">
            <label>Tecnologias</label>
            <select
              className="div-select"
              onChange={(e) => SetIdTecnologia(e.target.value)}
              value={idTecnologia}
            >
              <option value="0">Selecione uma área de atuação</option>
              {Tecnologias.map((item) => {
                return (
                  <option key={item.idTecnologia} value={item.idTecnologia}>
                    {item.nomeTecnologia}
                  </option>
                );
              })}
            </select>
          </div>
          <button onClick={AdicionarTecnologia} className="btVaga">
            Adicionar
          </button>
        </form>
      </div>

      <div
        id="peliculaEditarVaga"
        className="peliculaEditarVaga none"
        onClick={btn_fechar}
      ></div>
      <div id="ModalEditarVaga" className="ModalEditarVaga none">
        <h2>Editar sua Vaga</h2>
        <form>
          <Input
            className="InputCadastro"
            value={TituloVaga}
            name="TituloVaga"
            label="Titulo da Vaga"
            onChange={(e) => setTituloVaga(e.target.value)}
          />
          <Input
            className="InputCadastro"
            value={Salario}
            name="Salario"
            label="Salario"
            onChange={(e) => setSalario(e.target.value)}
          />
          <div className="select">
            <label>Área</label>
            <select
              className="div-select"
              onChange={(e) => setArea(e.target.value)}
              value={Area}
            >
              <option value="0">Selecione uma área de atuação</option>
              {Areas.map((item) => {
                return (
                  <option key={item.idArea} value={item.idArea}>
                    {item.nomeArea}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="select">
            <label>Experiência</label>
            <select
              className="div-select"
              onChange={(e) => setExperiencia(e.target.value)}
              value={Experiencia}
            >
              <option value="0">Selecione um nível de experiência</option>
              <option value="Pleno">Pleno</option>
              <option value="Sênior">Sênior</option>
              <option value="Júnior">Júnior</option>
            </select>
          </div>

          <div className="select">
            <label>Tipo de contrato</label>
            <select
              className="div-select"
              onChange={(e) => setTipoContrato(e.target.value)}
              value={TipoContrato}
            >
              <option value="0">Selecione um tipo de contrato</option>
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
              <option value="Está gio">Estagio</option>
            </select>
          </div>
          <Input
            className="InputCadastro"
            value={Estado}
            name="Estado"
            label="Estado"
            onChange={(e) => setEstado(e.target.value)}
          />
          <Input
            className="InputCadastro"
            value={Cidade}
            name="Cidade"
            label="Cidade"
            onChange={(e) => setCidade(e.target.value)}
          />
          <Input
            className="InputCadastro"
            value={CEP}
            name="CEP"
            label="CEP"
            onChange={(e) => setCEP(e.target.value)}
          />
          <Input
            className="InputCadastro"
            value={Logradouro}
            name="Logradouro"
            label="Logradouro"
            onChange={(e) => setLogradouro(e.target.value)}
          />
          <Input
            className="InputCadastro"
            value={Complemento}
            name="Complemento"
            label="Complemento"
            onChange={(e) => setComplemento(e.target.value)}
          />
          <div className="text-area">
            <label>Descrição da vaga</label>
            <textarea
              value={DescricaoVaga}
              name="DescricaoVaga"
              onChange={(e) => setDescricaoVaga(e.target.value)}
            ></textarea>
            <br />
            <label>Descrição da empresa</label>
            <textarea
              value={DescricaoEmpresa}
              name="DescricaoEmpresa"
              onChange={(e) => setDescricaoEmpresa(e.target.value)}
            ></textarea>
            <br />
            <label>Descrição dos benefícios</label>
            <textarea
              value={DescricaoBeneficio}
              name="DescricaoBeneficio"
              onChange={(e) => setDescricaoBeneficio(e.target.value)}
            ></textarea>
          </div>
          <br />
        </form>
        <div className="btVagaDiv">
          <button className="btVaga" onClick={AtualizarVaga}>
            Editar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
