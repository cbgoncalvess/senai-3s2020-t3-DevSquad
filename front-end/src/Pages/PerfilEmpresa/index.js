import React, { useState, useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import Input from "../../Components/Input/index";
import AccessMenu from "../../Components/AccessMenu";


import "./style.css";

export default function PerfilEmpresa() {

  function ApareceEditarDadosEmpresa() {
    let idEditarPelicula = document.getElementById("peliculaPerfilEmpresa");
    let idModalVaga = document.getElementById("modalPerfilEmpresa");
    if (idEditarPelicula.classList == "peliculaPerfilEmpresa none") {
      idEditarPelicula.classList.remove("none");
      idModalVaga.classList.remove("none");
    }
  }

  function btn_fecharEditarDadosEmpresa() {
    let idModalVaga = document.getElementById("modalPerfilEmpresa");
    let idEditarPelicula = document.getElementById("peliculaPerfilEmpresa");
    if (idEditarPelicula.classList != "peliculaPerfilEmpresa none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAlterarSenhaEmpresa() {
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaEmpresa"
    );
    let idModalVaga = document.getElementById("modalAlterarSenhaEmpresa");
    if (idEditarPelicula.classList == "peliculaAlterarSenhaEmpresa none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharAlterarSenhaEmpresa() {
    let idModalVaga = document.getElementById("modalAlterarSenhaEmpresa");
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaEmpresa"
    );
    if (idEditarPelicula.classList != "AlterarSenhaEmpresa none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  return (
    <div className="bodyPartVizualizarPerfil">
      <AccessBar />
      <AccessMenu />
      <Header />
      <div className="meioPerfil">
        <div className="EsquerdoPerfil">
          <div className="imgPefilTexto">
          <input type="file" id="inputImage" className="none"/>
          <label htmlFor="inputImage"><img className="imgperfil" src={"'http://localhost:5000/imgPerfil/'+CaminhoImagem"} alt="perfil" /></label>
            <h3>SENAI Informática</h3>
            <p>Empresa</p>
          </div>
          <div className="BotoesPerfilEmpresa">
            <button className="btPerfil" onClick={ApareceEditarDadosEmpresa}>
              <h3>Alterar dados</h3>
            </button>
            <button className="btPerfil" onClick={ApareceAlterarSenhaEmpresa}>
              <h3>Alterar senha</h3>
            </button>
          </div>
        </div>
        <div className="DireitoPerfil">
          <h2 className="Desrcicao-Perfil">Candidatos contratados</h2>
              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img src={"'http://localhost:5000/imgPerfil/'+item.idUsuarioNavigation.caminhoImagem"} alt="Imagem da Empresa" />
                  <h3>{"Nome do estágiario:Douglas Silva" }</h3>
                </div>
                <h3>{"CPF:2451651651651"}</h3>
                <h3>{"Telefone:155455515151s"}</h3>
              </div>

              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img src={"'http://localhost:5000/imgPerfil/'+item.idUsuarioNavigation.caminhoImagem"} alt="Imagem da Empresa" />
                  <h3>{"Nome do estágiario:Douglas Silva"}</h3>
                </div>
                <h3>{"CPF:2451651651651"}</h3>
                <h3>{"Telefone:155455515151s"}</h3>
              </div>

              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img src={"'http://localhost:5000/imgPerfil/'+item.idUsuarioNavigation.caminhoImagem"} alt="Imagem da Empresa" />
                  <h3>{"Nome do estágiario:Douglas Silva"}</h3>
                </div>
                <h3>{"CPF:2451651651651"}</h3>
                <h3>{"Telefone:155455515151s"}</h3>
              </div>

              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img src={"'http://localhost:5000/imgPerfil/'+item.idUsuarioNavigation.caminhoImagem"} alt="Imagem da Empresa" />
                  <h3>{"Nome do estágiario:Douglas Silva"}</h3>
                </div>
                <h3>{"CPF:2451651651651"}</h3>
                <h3>{"Telefone:155455515151s"}</h3>
              </div>
        </div>
      </div>
      <div
        id="peliculaPerfilEmpresa"
        className="peliculaPerfilEmpresa none"
        onClick={btn_fecharEditarDadosEmpresa}
      ></div>
      <div id="modalPerfilEmpresa" className="modalPerfilEmpresa none">
        <h2>Editar seus dados pessoais</h2>
        <form>
          <Input
            className="InputCadastro"
            name="NomeResponsavelEditEmpresa"
            label="Nome do responsável"
            maxLength={35}
            minLength={5}
            required
            id="NomeResponsavelEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="RazaoSocialEditEmpresa"
            label="Razão social"
            maxLength={50}
            minLength={5}
            required
            id="RazaoSocialEditEmpresa"
          />
          <Input
            className="InputCadastro"
            name="NomeFantasiaEditEmpresa"
            label="Nome fantasia"
            maxLength={50}
            minLength={5}
            required
            id="NomeFantasiaEditEmpresa"
          />
          <Input
            className="InputCadastro"
            name="CNPJEditEmpresa"
            label="CNPJ"
            maxLength={14}
            minLength={14}
            required
            id="CNPJEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="EmailContatoEditEmpresa"
            label="Email para contato"
            maxLength={254}
            minLength={5}
            required
            id="EmailContatoEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="TelefoneEditEmpresa"
            label="Telefone"
            maxLength={14}
            minLength={11}
            required
            id="TelefoneEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="NumFuncionariosEditEmpresa"
            label="Número de fúncionarios"
            required
            id="NumFuncionariosEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="NumCNAEEditEmpresa"
            label="Número do CNAE"
            maxLength={7}
            minLength={7}
            required
            id="NumCNAEEditEmpresa"
          />

          <Input
            className="InputCadastro"
            name="CepEditEmpresa"
            label="CEP"
            maxLength={8}
            minLength={8}
            required
            id="CepEditEmpresa"
          />

          <Input
            id="rua"
            className="InputCadastro"
            name="Logradouro"
            label="Logradouro"
            required
          />

          <Input
            className="InputCadastro"
            name="ComplementoEditEmpresa"
            label="Complemento"
            id="ComplementoEditEmpresa"
          />

          <div className="Input">
            <label>Cidade:</label>
            <br />
            <input
              type="text"
              className="InputCadastro"
              id="cidade"
              required
              disabled
            />
          </div>

          <div className="Input">
            <label>UF:</label>
            <br />
            <input
              type="text"
              className="InputCadastro"
              id="uf"
              required
              disabled
            />
          </div>

          <div className="btEditarEstagioDiv">
            <button className="btVaga" onClick={()=>alert("Perfil editado com sucesso")}>
              <h3>Editar</h3>
            </button>
          </div>
        </form>
      </div>

      <div
        id="peliculaAlterarSenhaEmpresa"
        className="peliculaAlterarSenhaEmpresa none"
        onClick={btn_fecharAlterarSenhaEmpresa}
      ></div>
      <div
        id="modalAlterarSenhaEmpresa"
        className="modalAlterarSenhaEmpresa none"
      >
        <h2>Alterar senha</h2>
        <form>
        <Input
            id="SenhaatualEditEmpresa"
            className="InputCadastro"
            name="SenhaatualEditEmpresa"
            label="Senha atual"
            maxLength={15}
            minLength={9}
            type="password"
            required
          />

          <Input
          id="NovaSenhaEmpresa"
            className="InputCadastro"
            name="NovaSenhaEmpresa"
            label="Nova senha"
            maxLength={15}
            minLength={9}
            type="password"
            required
          />
          <button className="btVaga" onClick={()=>alert("Senha alterada com sucesso")}>
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
