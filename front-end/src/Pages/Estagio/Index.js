import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import imgDelete from "../../assets/delete.webp";
import imgEdit from "../../assets/black-ink-pen.webp";
import imgEnterprise from "../../assets/enterprise.webp";
import imgCertificate from "../../assets/certificate.webp";
import imgWorker from "../../assets/worker.webp";

import "./style.css";

import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";
import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

export default function Estagio() {
  const history = useHistory();

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
          <img src={imgEnterprise} alt="Icone de empresa" />
          <div className="EstatiscaColumn">
            <h5>0</h5>
            <br />
            <h5>Empresas cadastradas</h5>
          </div>
        </div>
        <div className="Candidatoscontratados">
          <img src={imgCertificate} alt="Icone de contratados" />
          <div className="EstatiscaColumn">
            <h5>1</h5>
            <br />
            <h5>Candidatos contratados</h5>
          </div>
        </div>
        <div className="Candidatoscadastrados">
          <img src={imgWorker} alt="Icone de candidatos" />
          <div className="EstatiscaColumn">
            <h5>2</h5>
            <br />
            <h5>Candidatos cadastrados</h5>
          </div>
        </div>
      </div>
      <br />
      <select className="selectEstagio">
        <option value="">Filtre sua busca por tempo estagiado</option>
        <option value="3">3 Meses</option>
        <option value="6">6 Meses</option>
        <option value="9">9 Meses</option>
        <option value="12">12 Meses</option>
        <option value="Encerrado">Estágios ja concluidos</option>
      </select>
      <div className="ListaEstagios">
        <div className="Estagio">
          <div className="Ferramentas">
            <img
              className="Edit"
              src={imgEdit}
              onClick={(event) => {
                AparecerEditarEstagio();
              }}
              alt="Botão para deletar estágio"
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão para deletar o estágio"
            />
          </div>
          <div className="CabecaEstagio">
            <img src={""} alt="ImagemPerfil" />
            <h3>Douglas</h3>
            <hr className="hr" />
            <h5>Desenvolvimento de sistema</h5>
          </div>
          <div className="CorpoEstagio">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:12323434245"}></Tag>
            <Tag NomeTag={"Status:Estagiando"}></Tag>
            <Tag NomeTag={"Periodo do estagio:9 meses"}></Tag>
            <Tag NomeTag={"TempoEstagiado:0 meses"}></Tag>
            <Tag NomeTag={"Empresa:SENAI Informática"}></Tag>
            <h5
              className="UnderlineText"
              onClick={(e) => {
                e.preventDefault();
                history.push("PerfilCandidatoAdm");
              }}
            >
              Ver perfil
            </h5>
          </div>
        </div>

        <div className="Estagio">
          <div className="Ferramentas">
            <img
              className="Edit"
              src={imgEdit}
              onClick={(event) => {
                AparecerEditarEstagio();
              }}
              alt="Botão para deletar estágio"
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão para deletar o estágio"
            />
          </div>
          <div className="CabecaEstagio">
            <img src={""} alt="ImagemPerfil" />
            <h3>Douglas</h3>
            <hr className="hr" />
            <h5>Desenvolvimento de sistema</h5>
          </div>
          <div className="CorpoEstagio">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:12323434245"}></Tag>
            <Tag NomeTag={"Status:Estagiando"}></Tag>
            <Tag NomeTag={"Periodo do estagio:9 meses"}></Tag>
            <Tag NomeTag={"TempoEstagiado:0 meses"}></Tag>
            <Tag NomeTag={"Empresa:SENAI Informática"}></Tag>
            <h5
              className="UnderlineText"
              onClick={(e) => {
                e.preventDefault();
                history.push("PerfilCandidatoAdm");
              }}
            >
              Ver perfil
            </h5>
          </div>
        </div>

        <div className="Estagio">
          <div className="Ferramentas">
            <img
              className="Edit"
              src={imgEdit}
              onClick={(event) => {
                AparecerEditarEstagio();
              }}
              alt="Botão para deletar estágio"
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão para deletar o estágio"
            />
          </div>
          <div className="CabecaEstagio">
            <img src={""} alt="ImagemPerfil" />
            <h3>Douglas</h3>
            <hr className="hr" />
            <h5>Desenvolvimento de sistema</h5>
          </div>
          <div className="CorpoEstagio">
            <Tag NomeTag={"E-mail:Douglas@gmail.com"}></Tag>
            <Tag NomeTag={"Telefone:12323434245"}></Tag>
            <Tag NomeTag={"Status:Estagiando"}></Tag>
            <Tag NomeTag={"Periodo do estagio:9 meses"}></Tag>
            <Tag NomeTag={"TempoEstagiado:0 meses"}></Tag>
            <Tag NomeTag={"Empresa:SENAI Informática"}></Tag>
            <h5
              className="UnderlineText"
              onClick={(e) => {
                e.preventDefault();
                history.push("PerfilCandidatoAdm");
              }}
            >
              Ver perfil
            </h5>
          </div>
        </div>
      </div>
      <div
        id="peliculaEstagio"
        className="peliculaEstagio none"
        onClick={btn_fecharModalEditarEstagio}
      ></div>
      <div id="modalEstagio" className="modalEstagio none">
        <h2>Editar estágio</h2>
        <form>
          <Input
            id="PeriodoEstagio"
            name="PeriodoEstagio"
            className="cadastre"
            label="Periodo"
            type="text"
            placeholder="9"
            required
          />
          <div className="btEditarEstagioDiv">
            <button
              className="btVaga"
              onClick={() => btn_fecharModalEditarEstagio()}
            >
              Editar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
