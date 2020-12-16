import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input/index";
import user from "../../assets/images/user.jpg";

import "./style.css";

export default function PerfilCandidato() {
  function ApareceEditarDados() {
    let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
    let idModalVaga = document.getElementById("modalPerfilCandidato");
    if (idEditarPelicula.classList == "peliculaPerfilCandidato none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharEditarDados() {
    let idModalVaga = document.getElementById("modalPerfilCandidato");
    let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
    if (idEditarPelicula.classList != "peliculaPerfilCandidato none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAlterarSenhaCandidato() {
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaCandidato"
    );
    let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
    if (idEditarPelicula.classList == "peliculaAlterarSenhaCandidato none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharAlterarSenhaCandidato() {
    let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaCandidato"
    );
    if (idEditarPelicula.classList != "peliculaAlterarSenhaCandidato none") {
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
          <div className="imgPefilTexto">
            <input type="file" id="inputImage" className="none" />
            <label htmlFor="inputImage">
              <img className="imgperfil" src={user} alt="Imagem de perfil" />
            </label>
            <h3>Candidato</h3>
            <p>Candidato</p>
          </div>
          <div className="BotoesPerfilEmpresa">
            <button className="btPerfil" onClick={ApareceEditarDados}>
              Alterar dados
            </button>
            <button className="btPerfil" onClick={ApareceAlterarSenhaCandidato}>
              Alterar senha
            </button>
          </div>
        </div>
        <div className="DireitoPerfil">
          <h2 className="Desrcicao-Perfil">Vagas em que você se inscreveu</h2>

          <div className="BoxPerfilCandidato">
            <div className="flexBoxPerfilCandidato">
              <img src={user} alt="Imagem de pefil da empresa dona da vaga" />
              <h3>{"Nome da empresa:SENAI Informática"}</h3>
            </div>
            <h3>{"Tipo do contrato:CLT"}</h3>
            <h3>{"Salario:" + "R$4.000"}</h3>
          </div>

          <div className="BoxPerfilCandidato">
            <div className="flexBoxPerfilCandidato">
              <img src={user} alt="Imagem de pefil da empresa dona da vaga" />
              <h3>{"Nome da empresa:SENAI Informática"}</h3>
            </div>
            <h3>{"Tipo do contrato:CLT"}</h3>
            <h3>{"Salario:" + "R$4.000"}</h3>
          </div>

          <div className="BoxPerfilCandidato">
            <div className="flexBoxPerfilCandidato">
              <img src={user} alt="Imagem de pefil da empresa dona da vaga" />
              <h3>{"Nome da empresa:SENAI Informática"}</h3>
            </div>
            <h3>{"Tipo do contrato:CLT"}</h3>
            <h3>{"Salario:" + "R$4.000"}</h3>
          </div>
        </div>
      </div>
      <div
        id="peliculaPerfilCandidato"
        className="peliculaPerfilCandidato none"
        onClick={btn_fecharEditarDados}
      ></div>
      <div id="modalPerfilCandidato" className="modalPerfilCandidato none">
        <h2>Editar seus dados pessoais</h2>
        <form>
          <Input
            className="InputCadastro"
            name="NomeCompletoEdit"
            label="Nome completo"
            maxLength={65}
            minLength={5}
            required
            id="NomeCompletoEdit"
          />

          <Input
            className="InputCadastro"
            name="RgEdit"
            label="RG"
            maxLength={9}
            minLength={9}
            required
            id="RgEdit"
          />

          <Input
            className="InputCadastro"
            name="CPFEdit"
            label="CPF"
            maxLength={11}
            minLength={11}
            required
            id="CPFEdit"
          />

          <Input
            className="InputCadastro"
            name="TelefoneEdit"
            label="Telefone"
            maxLength={11}
            minLength={10}
            required
            id="TelefoneEdit"
          />

          <Input
            className="InputCadastro"
            name="LinkedinEdit"
            label="Linkedin"
            maxLength={150}
            minLength={5}
            id="LinkedinEdit"
          />

          <div className="select-final">
            <label htmlFor="CursosEdit">Cursos</label>
            <select id="CursosEdit" required>
              <option value="0">Selecione seu curso</option>
            </select>
          </div>
          <div className="btEditarEstagioDiv">
            <button
              className="btVaga"
              onClick={() => alert("Dados editados com sucesso")}
            >
              <h3>Editar</h3>
            </button>
          </div>
        </form>
      </div>

      <div
        id="peliculaAlterarSenhaCandidato"
        className="peliculaAlterarSenhaCandidato none"
        onClick={btn_fecharAlterarSenhaCandidato}
      ></div>
      <div
        id="modalAlterarSenhaCandidato"
        className="modalAlterarSenhaCandidato none"
      >
        <h2>Alterar senha</h2>
        <form>
          <Input
            type="password"
            className="InputCadastro"
            id="SenhaatualCandidato"
            name="SenhaatualCandidato"
            label="Senha atual"
            maxLength={15}
            minLength={9}
            required
          />

          <Input
            type="password"
            className="InputCadastro"
            id="NovaSenhaCandidato"
            name="NovaSenhaCandidato"
            label="Nova senha"
            maxLength={15}
            minLength={9}
            required
          />
          <button
            className="btVaga"
            onClick={() => alert("Senha alterada com sucesso")}
          >
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
