import React, { useEffect, useState } from "react";
import imgDelete from "../../assets/delete.jpg";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";
// style
import "./style.css";

import user from '../../assets/images/user.jpg'

export default function VisualizarCandidatoAdm() {
  let history = useHistory();
  return (
    <div className="VisualizarVagaAdm">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="MeioVizualizarAdm">
        <div className="EsquerdoAdm">
          <div>
                <div className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={user}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>Desenvolvedor Full stack</h2>
                      <p>Desenvolvimento</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() => alert("Deletar inscricão")}
                      alt="Botão que deleta inscrição do candidato"
                    />

                    <div className="DeletePerfil">
                      <button
                        className="btVerPerfil"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("VizualizarVagaAdmin");
                        }}
                      >
                        <h4>Ver vaga</h4>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={user}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>Desenvolvedor Full stack</h2>
                      <p>Desenvolvimento</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() => alert("Deletar traficante")}
                      alt="Botão que deleta inscrição do candidato"
                    />

                    <div className="DeletePerfil">
                      <button
                        className="btVerPerfil"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("VizualizarVagaAdmin");
                        }}
                      >
                        <h4>Ver vaga</h4>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={user}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>Desenvolvedor Full stack</h2>
                      <p>Desenvolvimento</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() => alert("Deletar traficante")}
                      alt="Botão que deleta inscrição do candidato"
                    />

                    <div className="DeletePerfil">
                      <button
                        className="btVerPerfil"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("VizualizarVagaAdmin");
                        }}
                      >
                        <h4>Ver vaga</h4>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={user}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>Desenvolvedor Full stack</h2>
                      <p>Desenvolvimento</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() => alert("Deletar inscrição")}
                      alt="Botão que deleta inscrição do candidato"
                    />

                    <div className="DeletePerfil">
                      <button
                        className="btVerPerfil"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("VizualizarVagaAdmin");
                        }}
                      >
                        <h4>Ver vaga</h4>
                      </button>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <hr className="hrAdm"></hr>
        <div className="DireitoAdm">
          <div className="BoxEmpresa">
            <div className="ImagemEmpresaAdm">
              <img src={user} alt="Imagem de perfil da empresa"/>
              <h5>Douglas</h5>
            </div>
            <div className="DadosDaEmpresa">
              <Tag NomeTag={"Rg: 51.789.999-X"}/>
              <Tag NomeTag={"CPF: 555.557.889-2" } />
              <Tag NomeTag={"Linkedin: https://www.linkedin.com/" } />
              <Tag NomeTag={"Telefone: (11) 95999-5500"} />
              <Tag NomeTag={"Curso do candidato: Desenvolvimento de Sistemas" } />
              <Tag NomeTag={"Área: Desenvolvimento Web"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
