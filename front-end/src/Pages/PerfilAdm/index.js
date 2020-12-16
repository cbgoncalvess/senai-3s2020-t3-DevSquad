import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input/index";

import imgDelete from "../../assets/delete.jpg";
import user from '../../assets/images/user.jpg'

import "./style.css";

export default function PerfilAdm() {
  const [Opcao, setOpcao] = useState("");
  let history = useHistory();

  function ApareceAlterarSenha() {
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaUsuario"
    );
    let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
    if (idEditarPelicula.classList == "peliculaAlterarSenhaUsuario none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharAlterarSenha() {
    let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaUsuario"
    );
    if (idEditarPelicula.classList != "AlterarSenhaUsuario none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  return (
    <div className="bodyPartVizualizarPerfil">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="meioPerfil">
        <div className="EsquerdoPerfil">
          <input type="file" id="inputImage" className="none" />
          <div className="imgPefilTexto">
            <label htmlFor="inputImage">
              <img
                className="imgperfil"
                src={user}
                alt="Imagem de perfil"
                title="Editar"
                id="filterPerfil"
              />
            </label>
            <h3>Bem vindo administrador</h3>
            <p>administrador</p>
          </div>
          <div className="BotoesPerfil">
            <button className="btPerfil" onClick={ApareceAlterarSenha}>
              Alterar senha
            </button>
          </div>
        </div>
        <div className="DireitoPerfil">
          <br />
          <div className="RowPerfilAdm">
            <select className="selectPerfil" onChange={e => setOpcao(e.target.value)} value={Opcao}>
              <option>Filtre sua busca por...</option>
              <option value="Candidatos">Candidatos</option>
              <option value="Empresas">Empresa</option>
              <option value="Vagas">Vagas</option>
            </select>
          </div>
          {View()}
        </div>
      </div>
      <div
        id="peliculaAlterarSenhaUsuario"
        className="peliculaAlterarSenhaUsuario none"
        onClick={btn_fecharAlterarSenha}
      ></div>
      <div
        id="modalAlterarSenhaUsuario"
        className="modalAlterarSenhaUsuario none"
      >
        <h2>Alterar senha de qualquer usuario</h2>
        <form>
          <Input
            id="EmailTrocar"
            className="InputCadastro"
            name="EmailTrocar"
            label="Email"
            maxLength={254}
            minLength={5}
            required
          />
          <Input
            id="NovaSenhaTrocar"
            className="InputCadastro"
            name="NovaSenhaTrocar"
            label="Nova senha"
            maxLength={15}
            minLength={9}
            required
            type="password"
          />
          <button className="btVaga" onClick={()=>alert("Senha alterada com sucesso")}>
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );

  function View() {
    if (Opcao === "Candidatos") {
      return (
        <div>
          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={
                  user
                }
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Douglas Silva Mantovani</h2>
                <p>Douglas@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Usuário banido")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("PerfilCandidatoAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>

          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={
                  user
                }
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Alexia Melhado</h2>
                <p>Alexia@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Usuário banido")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("PerfilCandidatoAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>

          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={
                 user
                }
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Marcos Tomás</h2>
                <p>Marcos@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Usuário banido")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("PerfilCandidatoAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>

          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={
                 user
                }
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>André Akira</h2>
                <p>Akira@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Usuário banido")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("PerfilCandidatoAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>


          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Carlos Eduardo</h2>
                <p>Carlos@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Usuário banido")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("PerfilCandidatoAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (Opcao === "Empresas") {
      return (
        <div>
          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={user}
                alt="Iamgem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>SENAI Informática</h2>
                <p>Senai@gmail.com</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                onClick={() => alert("Usuario banido com sucesso")}
                src={imgDelete}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/PerfilEmpresaAdm");
                }}
              >
                <h4>Ver perfil</h4>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (Opcao === "Vagas") {
      return (
        <div>
          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Desenvolvedor Full stack</h2>
                <p>Desenvolvimento</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Vaga deletada com sucesso")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VizualizarVagaAdmin");
                }}
              >
                <h4>Ver vaga</h4>
              </button>
            </div>
          </div>

          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Desenvolvedor Full stack</h2>
                <p>Desenvolvimento</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Vaga deletada com sucesso")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VizualizarVagaAdmin");
                }}
              >
                <h4>Ver vaga</h4>
              </button>
            </div>
          </div>

          <div className="BoxPerfil">
            <div className="flexBoxPerfil">
              <img
                className="imgUsuario"
                src={user}
                alt="Imagem de perfil do usuario"
              />
              <div className="ColumnNomeEmail">
                <h2>Desenvolvedor Full stack</h2>
                <p>Desenvolvimento</p>
              </div>
            </div>
            <div className="ColumnPerfilBanir">
              <img
                className="Delete"
                src={imgDelete}
                alt="Delete"
                onClick={() => alert("Vaga deletada com sucesso")}
                alt="Botão que bloqueia o acesso do usuario do site"
                title="Banir"
              />
              <button
                className="btVerPerfil"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VizualizarVagaAdmin");
                }}
              >
                <h4>Ver vaga</h4>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
