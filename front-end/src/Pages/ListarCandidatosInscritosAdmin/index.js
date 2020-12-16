import React, { useState, useEffect } from "react";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import imgDelete from "../../assets/delete.jpg";
import imgGlobal from "../../assets/global.png";
import InfoVaga from "../../Components/InfoVaga/Index";
import imgDesenvolvimento from "../../assets/web-programming.jpg";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.jpg";
import imgSalario from "../../assets/money (1).jpg";
import imgTipoContrato from "../../assets/gears.jpg";
import imgFuncao from "../../assets/rocket-launch.jpg";
import IconEmpresa from "../../assets/building.jpg";
import AccessMenu from "../../Components/AccessMenu";

import user from '../../assets/images/user.jpg'

import "./style.css";
import { useHistory } from "react-router-dom";

export default function ListarCandidatosInscritos() {
  let History = useHistory();

  return (
    <div className="bodyPartInscricoesAdm">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="Meio-Inscricoes">
        <div className="Esquerdo-Inscricoes">
          <div className="BoxInscricao">
            <div className="Edit-Delete">
              <img
                className="Delete"
                src={imgDelete}
                onClick={() => alert("Inscrição deletada com sucesso")}
                alt="Botão que deleta a inscrição do usuario"
              />
            </div>
            <div className="DadosInscrito">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario inscrito"
              />
              <div className="Column-Inscricao">
                <h3>Aléxia Melhado</h3>
                <p className="NomeCurso">Desenvolvimento de sistemas</p>
              </div>
            </div>
          </div>

          <div className="BoxInscricao">
            <div className="Edit-Delete">
              <img
                className="Delete"
                src={imgDelete}
                onClick={() => alert("Inscrição deletada com sucesso")}
                alt="Botão que deleta a inscrição do usuario"
              />
            </div>
            <div className="DadosInscrito">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario inscrito"
              />
              <div className="Column-Inscricao">
                <h3>André Akira</h3>
                <p className="NomeCurso">Desenvolvimento de sistemas</p>
              </div>
            </div>
          </div>

          <div className="BoxInscricao">
            <div className="Edit-Delete">
              <img
                className="Delete"
                src={imgDelete}
                onClick={() => alert("Inscrição deletada com sucesso")}
                alt="Botão que deleta a inscrição do usuario"
              />
            </div>
            <div className="DadosInscrito">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario inscrito"
              />
              <div className="Column-Inscricao">
                <h3>Carlos Eduardo</h3>
                <p className="NomeCurso">Desenvolvimento de sistemas</p>
              </div>
            </div>
          </div>

          <div className="BoxInscricao">
            <div className="Edit-Delete">
              <img
                className="Delete"
                src={imgDelete}
                onClick={() => alert("Inscrição deletada com sucesso")}
                alt="Botão que deleta a inscrição do usuario"
              />
            </div>
            <div className="DadosInscrito">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario inscrito"
              />
              <div className="Column-Inscricao">
                <h3>Douglas Mantovani</h3>
                <p className="NomeCurso">Desenvolvimento de sistemas</p>
              </div>
            </div>
          </div>

          <div className="BoxInscricao">
            <div className="Edit-Delete">
              <img
                className="Delete"
                src={imgDelete}
                onClick={() => alert("Inscrição deletada com sucesso")}
                alt="Botão que deleta a inscrição do usuario"
              />
            </div>
            <div className="DadosInscrito">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario inscrito"
              />
              <div className="Column-Inscricao">
                <h3>Marcos Tomás</h3>
                <p className="NomeCurso">Desenvolvimento de sistemas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Direito-Inscricoes">
          <div className="VagaDescricao">
            <div className="vaga">
              <h5
                className="ExcluirVagaText"
                onClick={() => alert("Vaga deletada com sucesso")}
              >
                Excluir vaga
              </h5>
              <div className="VagaCompleta">
                <img
                  src={user}
                  className="ImagemEmpresa"
                  alt="Imagem de perfil da empresa"
                />
                <div className="MainVaga">
                  <h3>Desenvolvedor Full stack</h3>
                  <div className="InfoVagas">
                    <InfoVaga NomeProp={"SENAI Informática"} source={IconEmpresa} />
                    <InfoVaga NomeProp={"São Paulo"} source={imgLocalizacao} />
                    <InfoVaga NomeProp={"Júnior"} source={imgFuncao} />
                    <InfoVaga
                      NomeProp={"CLT"}
                      source={imgTipoContrato}
                    />
                    <InfoVaga NomeProp={"4.000"} source={imgSalario} />
                    <InfoVaga NomeProp={"Desenvolvimento"} source={imgDesenvolvimento} />
                    <InfoVaga NomeProp={"Presencial"} source={imgGlobal} />
                  </div>
                </div>
              </div>
            </div>
            <div className="Descricoes">
              <div className="DescricaoEmpresa">
                <h3>Descricao da empresa</h3>
                <p>
                  A melhor empresa do mercado, quem fez parte recomenda !!!
                </p>
              </div>
              <div className="DescricaoVaga">
                <h3>Descricao da vaga</h3>
                <p>A melhor vaga que você encontrará nos proximos meses</p>
              </div>
              <div className="DescricaoBeneficios">
                <h3>Descricao beneficios</h3>
                <p>Vale transporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
