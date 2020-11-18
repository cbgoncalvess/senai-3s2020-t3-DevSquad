import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input";
import BlueButton from "../../Components/BlueButton";
import Footer from "../../Components/Footer";

import imagemCadastroEmpresa from "../../assets/imgCadastroEmpresa.webp";

import "./style.css";

export default function CadastroEmpresa() {
  const [NomeResponsavel, SetNomeResponsavel] = useState("");
  const [CNPJ, SetCNPJ] = useState("");
  const [Email, SetEmail] = useState("");
  const [NomeFantasia, SetNomeFantasia] = useState("");
  const [RazaoSocial, SetRazaoSocial] = useState("");
  const [Telefone, SetTelefone] = useState("");
  const [NumFuncionario, SetNumFuncionario] = useState("");
  const [NumCNAE, SetNumCNAE] = useState("");
  let [CEP, SetCEP] = useState("");
  let [Logradouro, SetLogradouro] = useState("");
  const [Complemento, SetComplemento] = useState("");
  const [EmailContato, SetEmailContato] = useState("");
  const [PerguntaSeguranca, SetPergunta] = useState("");
  const [RespostaSeguranca, SetResposta] = useState("");
  let [Estado, SetEstado] = useState("");
  let [Cidade, SetCidade] = useState("");
  const [Senha, SetSenha] = useState("");
  const [ConfirmarSenha, SetConfirmarSenha] = useState("");

  const history = useHistory();
  const emailRegex = /^\S+@\S+\.\S+$/g;
  let verificacaoEmail = emailRegex.test(Email);

  function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById("rua").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
  }

  function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById("rua").value = conteudo.logradouro;
      document.getElementById("cidade").value = conteudo.localidade;
      document.getElementById("uf").value = conteudo.uf;
    } //end if.
    else {
      //CEP não Encontrado.
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  }

  function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, "");

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        Logradouro = "...";
        Cidade = "...";
        Estado = "...";

        //Cria um elemento javascript.
        var script = document.createElement("script");

        //Sincroniza com o callback.
        script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meu_callback`;

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);
      } else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  }

  function salvar(e) {
    e.preventDefault();

    if (Senha !== ConfirmarSenha) {
      alert("as senhas não estão equivalentes");
    } else if (verificacaoEmail !== true) {
      alert("O e-mail deve ser válido");
    } else {
      const data = {
        NomeReponsavel: NomeResponsavel,
        Cnpj: CNPJ,
        EmailContato: EmailContato,
        NomeFantasia: NomeFantasia,
        RazaoSocial: RazaoSocial,
        Telefone: Telefone,
        NumFuncionario: NumFuncionario,
        NumCnae: NumCNAE,
        Cep: CEP,
        Logradouro: Logradouro,
        Complemento: Complemento,
        Estado: Estado,
        Localidade: Cidade,
        Email: Email,
        Senha: Senha,
        RespostaSeguranca: RespostaSeguranca,
        PerguntaSeguranca: PerguntaSeguranca,
      };
      fetch("http://localhost:5000/api/Usuario/Empresa", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Não foi possivel efetuar o cadastro");
          } else {
            alert("Cadastrado com sucesso");
            history.push("/");
          }
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />

      <div className="registerCompany">
        <div className="box-form">
          <div className="form-content">
            <h1>Cadastre-se como Empresa</h1>
            <p>
              Bem-vindo ao cadastro de empresa. Ficamos felizes de tê-la na
              nossa plataforma
            </p>
            <form className="form" onSubmit={salvar}>
              <Input
                name="responsibleName"
                className="cadastre"
                label="Nome do responsável:"
                type="text"
                placeholder="Barão de Mauá"
                maxLength={35}
                minLength={5}
                required
                onChange={(e) => SetNomeResponsavel(e.target.value)}
              />
              <Input
                name="cnpj"
                className="cadastre"
                label="CNPJ:"
                type="text"
                placeholder="00.000.000/0001-00"
                maxLength={11}
                minLength={11}
                required
                onChange={(e) => SetCNPJ(e.target.value)}
              />

              <Input
                name="emailContato"
                className="cadastre"
                label="E-mail para contato:"
                type="text"
                placeholder="contato@company.com"
                maxLength={254}
                minLength={3}
                required
                onChange={(e) => SetEmailContato(e.target.value)}
              />

              <Input
                name="companyFakeName"
                className="cadastre"
                label="Nome fantasia:"
                type="text"
                placeholder="CPTM"
                maxLength={50}
                minLength={6}
                required
                onChange={(e) => SetNomeFantasia(e.target.value)}
              />

              <Input
                name="companyName"
                className="cadastre"
                label="Razão social:"
                type="text"
                placeholder="São Paulo Railway Company Ltd."
                maxLength={50}
                minLength={5}
                required
                onChange={(e) => SetRazaoSocial(e.target.value)}
              />
              <Input
                name="phoneNumber"
                className="cadastre"
                label="Telefone da empresa:"
                type="text"
                placeholder="(11)4002-8922"
                maxLength={14}
                minLength={11}
                required
                onChange={(e) => SetTelefone(e.target.value)}
              />

              <Input
                name="workersCompanyNumber"
                className="cadastre"
                label="Número de funcionários:"
                type="number"
                maxLength={4}
                minLength={1}
                required
                onChange={(e) => SetNumFuncionario(e.target.value)}
              />

              <Input
                name="cnaeNumber"
                className="cadastre"
                label="Número CNAE:"
                type="text"
                placeholder="00.00-0-0"
                maxLength={9}
                minLength={6}
                required
                onChange={(e) => SetNumCNAE(e.target.value)}
              />

              <Input
                id="cep"
                name="cep"
                className="cadastre"
                label="CEP:"
                type="text"
                placeholder="00000-000"
                maxLength={8}
                minLength={8}
                required
                onBlur={(e) => {
                  e.preventDefault();
                  pesquisacep(e.target.value);
                }}
                onChange={(e) => SetCEP(e.target.value)}
              />

              <Input
                id="rua"
                name="address"
                className="cadastre"
                label="Logradouro da empresa:"
                type="text"
                maxLength={50}
                minLength={5}
                required
                onChange={(e) => SetLogradouro(e.target.value)}
              />

              <Input
                name="address2"
                className="cadastre"
                label="Complemento:"
                maxLength={30}
                minLength={5}
                required
                type="text"
                onChange={(e) => SetComplemento(e.target.value)}
              />

              <Input
                id="cidade"
                name="cidade"
                className="cadastre"
                label="Cidade"
                type="text"
                required
                onChange={(e) => SetCidade(e.target.value)}
              />

              <Input
                id="uf"
                name="estado"
                className="cadastre"
                label="Estado"
                type="text"
                required
                onChange={(e) => SetEstado(e.target.value)}
              />

              <Input
                name="EmailUser"
                className="cadastre"
                label="Email de acesso:"
                placeholder="email@email.com"
                type="text"
                maxLength={254}
                minLength={3}
                required
                onChange={(e) => SetEmail(e.target.value)}
              />

              <Input
                name="password"
                className="cadastre"
                label="Senha de acesso:"
                type="password"
                maxLength={20}
                minLength={10}
                required
                onChange={(e) => SetSenha(e.target.value)}
              />

              <Input
                name="password-confirm"
                className="cadastre"
                label="Confirme a senha:"
                type="password"
                maxLength={20}
                minLength={10}
                required
                onChange={(e) => SetConfirmarSenha(e.target.value)}
              />

              <div className="select">
                <label>Pergunta de seguranca</label>
                <select
                  className="cadastre"
                  onChange={(e) => SetPergunta(e.target.value)}
                  value={PerguntaSeguranca}
                  required
                >
                  <option value="0">Selecione uma pergunta de segurança</option>
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
                onChange={(e) => SetResposta(e.target.value)}
                maxLength={20}
                minLength={3}
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
            src={imagemCadastroEmpresa}
            alt="Pessoa acessando sua conta, com uma película transparente de cor azul."
          />
        </div>
      </div>
      <Footer />
    </body>
  );
}
