import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input";
import BlueButton from "../../Components/BlueButton";
import Footer from "../../Components/Footer";

import imagemCadastroCandidato from "../../assets/imgCadastroCandidato.webp";

import "./style.css";

export default function CadastroEmpresa() {
  const [NomeCompleto, SetNomeCompleto] = useState("");
  const [Rg, SetRg] = useState("");
  const [CPF, SetCPF] = useState("");
  const [Linkedin, SetLinkedin] = useState("");
  const [Telefone, SetTelefone] = useState("");
  const [Cursos, SetCursos] = useState([]);
  const [Curso, SetCurso] = useState(0);
  const [Email, SetEmail] = useState("");
  const [Senha, SetSenha] = useState("");
  const [ConfirmarSenha, SetConfirmarSenha] = useState("");
  const [PerguntaSeguranca, SetPergunta] = useState("");
  const [RespostaSeguranca, SetResposta] = useState("");

  const history = useHistory();

  const emailRegex = /^\S+@\S+\.\S+$/g;
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;

  let result = document.querySelector(".password-matching-text");
  let redBox = document.querySelector("#confirmarSenha-cadastroCandidato");
  let instructions = document.querySelector(".password-instructions-text");

  const verificacaoEmail = emailRegex.test(Email);
  let verificacaoSenha = senhaRegex.test(Senha);
  let verificacaoConfirmarSenha = senhaRegex.test(ConfirmarSenha);
  
  useEffect(() => {
    listarcurso();
  }, []);

  
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

    if(verificacaoSenha !== true || verificacaoConfirmarSenha !== true){
      redBox.style.border = "solid red 1px";
      redBox.style.boxShadow = "3px 3px 3px gray";
      instructions.style.color = "red";
      instructions.innerText =
        `A senha deve conter 8 caracteres, dentre eles:
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


  function salvar(e) {
    e.preventDefault();
    if (Senha !== ConfirmarSenha) {
      alert("As senhas não estão parecidas");
    } else if (verificacaoEmail !== true) {
      alert("O e-mail deve ser válido");
    } else {
      const data = {
        nomeCompleto: NomeCompleto,
        rg: Rg,
        cpf: CPF,
        telefone: Telefone,
        linkLinkedinCandidato: Linkedin,
        idCurso: Curso,
        email: Email,
        senha: Senha,
        respostaSeguranca: RespostaSeguranca,
        perguntaSeguranca: PerguntaSeguranca,
      };
      fetch("http://localhost:5000/api/Usuario/Candidato", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            console.log(response);
            alert("Não foi possivel efetuar o cadastro");
          } else {
            alert("Cadastrado com sucesso");
            history.push("/");
          }
        })
        .catch((err) => console.error(err));
    }
  }

  const listarcurso = () => {
    fetch("http://localhost:5000/api/Usuario/ListarCurso", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((dados) => {
        SetCursos(dados);
      })
      .catch((err) => console.error(err));
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
            <form className="form" onSubmit={salvar}>
              <Input
                name="fullName"
                className="cadastre"
                label="Nome completo:"
                type="text"
                placeholder="Maria dos Santos"
                required
                maxLength={35}
                minLength={5}
                onChange={(e) => SetNomeCompleto(e.target.value)}
              />

              <Input
                name="rg"
                className="cadastre"
                label="RG:"
                type="text"
                placeholder="000.000.000-00" 
                maxLength={9}
                minLength={9}
                required
                onChange={(e) => SetRg(e.target.value)}
              />

              <Input
                name="cpf"
                className="cadastre"
                label="CPF:"
                type="text"
                placeholder="000.000.000-00"
                required
                maxLength={11}
                minLength={11}
                onChange={(e) => SetCPF(e.target.value)}
              />

              <Input
                name="telefone"
                className="cadastre"
                label="Telefone:"
                type="text"
                placeholder="(11) 91234-5678"
                maxLength={14}
                minLength={11}
                required
                onChange={(e) => SetTelefone(e.target.value)}
              />

              <Input
                name="linkedin"
                className="cadastre"
                label="LinkedIn:"
                type="text"
                placeholder="linkedin.com/in/maria-dos-santos"
                required
                maxLength={150}
                minLength={5}
                onChange={(e) => SetLinkedin(e.target.value)}
              />

              <div>
                <label className="select-cadastroCandidato-title">Curso</label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetCurso(e.target.value)}
                  value={Curso}
                  required
                >
                  <option value="0">Selecione seu curso</option>
                  {Cursos.map((item) => {
                    return (
                      <option value={item.idCurso}>{item.nomeCurso}</option>
                    );
                  })}
                </select>
              </div>

              <Input
                name="email"
                className="cadastre"
                label="E-mail:"
                type="text"
                placeholder="exemplo@exemplo.com"
                required
                maxLength={154}
                minLength={5}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />

              <Input
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
                name="password-confirm"
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
                <label className="select-cadastroCandidato-title">
                  Pergunta de seguranca:
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetPergunta(e.target.value)}
                  value={""}
                  required
                >
                  <option value="0">Selecione sua pergunta de segurança</option>
                  <option value="Como se chama o seu cachorro">
                    Como se chama o seu cachorro
                  </option>
                </select>
              </div>

              <Input
                name="Resposta seguranca"
                className="cadastre"
                label="Resposta de segurança:"
                type="text"
                placeholder="Meu cachorro se chama..."
                required
                maxLength={20}
                minLength={5}
                onChange={(e) => SetResposta(e.target.value)}
              />
              <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

              <div className="form-button">
                <BlueButton type="submit" name="Criar conta">
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