import React, { useEffect, useState } from "react";
import imgDelete from "../../assets/delete.webp";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";
// style
import "./style.css";

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
                      src={"http://localhost:5000/imgPerfil/+ item.caminhoImagem"}
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
                      src={"http://localhost:5000/imgPerfil/+ item.caminhoImagem"}
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
                      src={"http://localhost:5000/imgPerfil/+ item.caminhoImagem"}
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
                      src={"http://localhost:5000/imgPerfil/+ item.caminhoImagem"}
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
              <img src={"http://localhost:5000/imgPerfil/"} alt="Imagem de perfil da empresa"/>
              <h5>Douglas</h5>
            </div>
            <div className="DadosDaEmpresa">
              <Tag NomeTag={"Rg:"}/>
              <Tag NomeTag={"CPF:" } />
              <Tag NomeTag={"Linkedin:" } />
              <Tag NomeTag={"Telefone:"} />
              <Tag NomeTag={"Curso do candidato:" } />
              <Tag NomeTag={"Area:"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
