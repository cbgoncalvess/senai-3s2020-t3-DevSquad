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
  const [Area, SetArea] = useState(0);
  const [PerguntaSeguranca, SetPergunta] = useState("");
  const [RespostaSeguranca, SetResposta] = useState("");
  const [Areas, SetAreas] = useState([]);

  const history = useHistory();

  const emailRegex = /^\S+@\S+\.\S+$/g;

  useEffect(() => {
    listarAreas();
    listarcurso();
  }, []);

  const listarAreas = () => {
    fetch("http://localhost:5000/api/Usuario/ListarArea", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((dados) => {
        SetAreas(dados);
      })
      .catch((err) => console.error(err));
  };

  const verificacaoEmail = emailRegex.test(Email);

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
        idArea: Area,
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
                type="number"
                placeholder="00.000.000-0"
                required
                maxLength={9}
                minLength={9}
                onChange={(e) => SetRg(e.target.value)}
              />

              <Input
                name="cpf"
                className="cadastre"
                label="CPF:"
                type="number"
                placeholder="000.000.000-00"
                rrequired
                maxLength={11}
                minLength={11}
                onChange={(e) => SetCPF(e.target.value)}
              />

              <Input
                name="telefone"
                className="cadastre"
                label="Telefone:"
                type="tel"
                placeholder="(11) 91234-5678"
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

              <div>
                <label className="select-cadastroCandidato-title-area">
                  Área
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetArea(e.target.value)}
                  value={Area}
                  required
                >
                  <option value="0">Selecione sua área</option>
                  {Areas.map((item) => {
                    return <option value={item.idArea}>{item.nomeArea}</option>;
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
                maxLength={35}
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
                maxLength={20}
                minLength={10}
                onChange={(e) => SetSenha(e.target.value)}
              />

              <Input
                name="password-confirm"
                className="cadastre"
                label="Confirmar senha:"
                type="password"
                placeholder="Confirme a senha"
                required
                maxLength={20}
                minLength={10}
                onChange={(e) => SetConfirmarSenha(e.target.value)}
              />

              <div>
                <label className="select-cadastroCandidato-title">
                  Pergunta de seguranca:
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetPergunta(e.target.value)}
                  value={Area}
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
