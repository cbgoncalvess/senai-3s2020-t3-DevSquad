import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input";
import BlueButton from "../../Components/BlueButton";
import Footer from "../../Components/Footer";
import Userimg from '../../assets/images/user.webp'


import imagemCadastroCandidato from "../../assets/imgCadastroCandidato.webp";

import "./style.css";

export default function CadastroEmpresa() {
  const history = useHistory();
  
  const [Email, SetEmail] = useState("");
  const [Senha, SetSenha] = useState("");
  const [ConfirmarSenha, SetConfirmarSenha] = useState("");

  const emailRegex = /^\S+@\S+\.\S+$/g;
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&\*_-])(?=.{9,15})/g;

  let result = document.querySelector(".password-matching-text");
  let redBox = document.querySelector("#confirmarSenha-cadastroCandidato");
  let instructions = document.querySelector(".password-instructions-text");

  const verificacaoEmail = emailRegex.test(Email);
  const verificacaoSenha = senhaRegex.test(Senha);

  const escreverResultado = () => {
    if (Senha !== ConfirmarSenha) {
      redBox.style.border = "solid red 1px";
      redBox.style.boxShadow = "3px 3px 3px gray";
      result.style.color = "red";
      result.innerText = "As senhas não conferem";

    } else {
      redBox.style.border = "unset";
      redBox.style.boxShadow = "unset";
      result.style.color = "unset";
      result.innerText = "As senhas conferem";
    }

    if(verificacaoSenha !== true){
      redBox.style.border = "solid red 1px";
      redBox.style.boxShadow = "3px 3px 3px gray";
      instructions.style.color = "red";
      instructions.innerText =
        `A senha deve conter, no mínimo, 9 caracteres, e no máximo 15, dentre eles:
        • 1 letra minúscula
        • 1 letra maiúscula
        • 1 número
        • 1 caractere especial`;
    }else{
      redBox.style.border = "unset";
      redBox.style.boxShadow = "unset";
      instructions.style.color = "unset";
      instructions.innerText = "";
    }
  };

  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="registerApplicant">
        <div className="box-form">
          <div className="form-content">
            <h1>Cadastre-se como Candidato</h1>
            <p>
              Bem-vindo ao cadastro do candidato. <br />
              Ficamos felizes de tê-lo na nossa plataforma
            </p>
              <div className="imgCadastroPerfil">
              <img className="imagemCadastro" src={Userimg} alt="Imagem de perfil"/>
              <br/>
              <button className="btSelecionar"><label htmlFor="ButtonImage" className="lbBt">Selecione uma imagem</label></button>
              </div>
            <form className="form" onSubmit={e =>{
              e.preventDefault();
              }}>
              <input type="file" className="none" id="ButtonImage"/>
              <Input
                id="fullName"
                name="fullName"
                className="cadastre"
                label="Nome completo:"
                type="text"
                placeholder="Maria dos Santos"
                required
                maxLength={65}
                minLength={5}
              />

              <Input
                id="rg"
                name="rg"
                className="cadastre"
                label="RG:"
                type="text"
                placeholder="00.000.000-0" 
                maxLength={9}
                minLength={9}
                required
              />

              <Input
                id="cpf"
                name="cpf"
                className="cadastre"
                label="CPF:"
                type="text"
                placeholder="000.000.000-00"
                required
                maxLength={11}
                minLength={11}
              />

              <Input
                id="telefone"
                name="telefone"
                className="cadastre"
                label="Telefone:"
                type="text"
                placeholder="(11) 91234-5678"
                maxLength={11}
                minLength={11}
                required
              />

              <Input
              id="linkedin"
                name="linkedin"
                className="cadastre"
                label="LinkedIn:"
                type="text"
                placeholder="linkedin.com/in/maria-dos-santos"
                maxLength={150}
                minLength={5}
              />

              <div>
                <label htmlFor="selectCursoCandidato" className="select-cadastroCandidato-title">Curso</label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  required
                  id="selectCursoCandidato"
                >
                  <option value="0">Selecione seu curso</option>
                </select>
              </div>

              <Input
                id="email"
                name="email"
                className="cadastre"
                label="E-mail:"
                type="text"
                placeholder="exemplo@exemplo.com"
                required
                maxLength={254}
                minLength={5}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />

              <Input
                id="password"
                name="password"
                className="cadastre"
                label="Senha:"
                type="password"
                placeholder="Digite sua senha"
                required
                maxLength={15}
                minLength={9}
                onKeyUp={() => escreverResultado()}
                onChange={(e) => SetSenha(e.target.value)}
              />

              <Input
                id="confirmarSenha-cadastroCandidato"
                name="confirmarSenha-cadastroCandidato"
                className="cadastre"
                label="Confirmar senha:"
                type="password"
                placeholder="Confirme a senha"
                required
                maxLength={15}
                minLength={9}
                onKeyUp={() => escreverResultado()}
                onChange={(e) => SetConfirmarSenha(e.target.value)}
              />

              <p className="password-matching-text"></p>
              <p className="password-instructions-text"></p>

              <div>
                <label htmlFor="selectCadastroCandidato" className="select-cadastroCandidato-title">
                  Pergunta de seguranca:
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  required
                  id="selectCadastroCandidato"
                >
                  <option value="0">Selecione sua pergunta de segurança</option>
                  <option value="Como se chama o seu cachorro"> Como se chama o seu cachorro</option>
                  <option value="Qual o seu sobrenome">Qual o seu sobrenome</option>
                  <option value="Qual o nome da sua mãe/pai">Qual o nome da sua mãe/pai</option>
                  <option value="Para qual país você gostaria de viajar">Para qual país você gostaria de viajar</option>
                  <option value="Qual era sua matéria preferida na escola">Qual era sua matéria preferida na escola</option>
                  <option value="De onde vem sua família">De onde vem sua família</option>
                  <option value="Do que você mais gosta de fazer nas suas horas vagas">Do que você mais gosta de fazer nas suas horas vagas</option>
                  <option value="Qual a palavra que te define como pessoa">Qual a palavra que te define como pessoa</option>
                  <option value="Qual o ano mais importante da sua vida">Qual o ano mais importante da sua vida</option>
                </select>
              </div>

              <Input
               id="Respostaseguranca"
                name="Respostaseguranca"
                className="cadastre"
                label="Resposta de segurança:"
                type="text"
                placeholder="Meu cachorro se chama..."
                required
                maxLength={30}
                minLength={5}
              />
              <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

              <div className="form-button">
                <BlueButton type="submit" name="Criar conta" Onclick={()=>history.push("/login")}>
                  Criar conta
                </BlueButton>
              </div>
            </form>
          </div>
        </div>

        <div className="box-img">
          <img
            src={imagemCadastroCandidato}
            alt="Pessoa acessando sua conta"
            className="img-cadastro-candidato"
          />
        </div>
      </div>
      <Footer />
    </body>
  );
}