import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

import "./style.css";

import BlackButton from "../../Components/BlackButton";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";

export default function CadastrarEstagiario() {
  const [Empresas, SetEmpresas] = useState([]);
  const [idEmpresa, SetEmpresa] = useState(0);
  const [Perido, setPeriodo] = useState(0);
  const [Candidatos, SetCandidatos] = useState([]);
  const [idCandidato, SetCandidato] = useState(0);

  let history = useHistory();

  useEffect(() => {
    listaEmpresas();
    listaCandidatos();
  }, []);

  const listaEmpresas = () => {
    fetch("http://localhost:5000/api/Administrador/listaEmpresaRazaoSocial", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetEmpresas(dados);
      })
      .catch((err) => console.error(err));
  };

  const listaCandidatos = () => {
    fetch("http://localhost:5000/api/Administrador/listaEmailCandidato", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetCandidatos(dados);
      })
      .catch((err) => console.error(err));
  };

  const CadastrarEstagio = () => {
    const form = {
      idEmpresa: idEmpresa,
      idUsuario: idCandidato,
      periodoEstagio: Perido,
    };
    api
      .post("/Administrador/AdicionarEstagio", form, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function (respose) {
        if (respose.status == 200) {
          alert(respose.data);
          history.push("/Estagio");
        } else {
          alert("Não foi possivel cadastrar a estagio");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="margin">
        <div className="estagiarioBox">
          <div className="tituloEstagiario">
            <h1>Cadastrar Estagiario</h1>
            <p>
              Bem-vindo ao cadastro do estagiário, cadastre ele aqui quando o
              mesmo for contratado por uma empresa podendo assim acompanha-lo e
              receber atualizações do seu estagio.
            </p>
          </div>
          <div className="alinharEstagiario">
            <div className="camposEstagiario">
              <div className="selectEstagiario">
                <label>*Empresas</label>
                <select
                  className="div-select"
                  onChange={(e) => SetEmpresa(e.target.value)}
                  value={idEmpresa}
                >
                  <option value="0">Selecione a empresa contratante</option>
                  {Empresas.map((item) => {
                    return (
                      <option key={item} value={item.idEmpresa}>
                        {item.razaoSocial}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="selectEstagiario">
                <label>*Candidatos</label>
                <select
                  className="div-select"
                  onChange={(e) => SetCandidato(e.target.value)}
                  value={idCandidato}
                >
                  <option value="0">Selecione o email do candidato</option>
                  {Candidatos.map((item) => {
                    return (
                      <option key={item} value={item.idUsuario}>
                        {item.email}
                      </option>
                    );
                  })}
                </select>
              </div>

              <Input
                className="div-select"
                name="Periodo"
                type="number"
                label="*Periodo (Meses)"
                onChange={(e) => setPeriodo(e.target.value)}
                maxLength={3}
                minLength={1}
                required
              />
            </div>

            <div className="botaoCadastrarEs">
              <BlackButton
                type="submit"
                name="Cadastrar"
                onClick={CadastrarEstagio}
              >
                Cadastrar
              </BlackButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
