import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import BlackButton from "../../Components/BlackButton";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";

export default function CadastrarEstagiario() {
  let history = useHistory();
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
                <label htmlFor="cadastroEstagio">*Empresas</label>
                <select
                  className="div-select"
                  required
                  id="cadastroEstagio"
                >
                  <option value="0">Selecione a empresa contratante</option>
                </select>
              </div>

              <div className="selectEstagiario">
                <label htmlFor="selectEstagio">*Candidatos</label>
                <select
                  className="div-select"
                  required
                  id="selectEstagio"
                >
                  <option value="0">Selecione o email do candidato</option>
                </select>
              </div>

              <Input
              id="PeriodoCadastro"
                className="div-select"
                name="PeriodoCadastro"
                type="number"
                label="*Periodo (Meses)"
                maxLength={3}
                minLength={1}
                required
              />
            </div>

            <div className="botaoCadastrarEs">
              <BlackButton
                type="submit"
                name="Cadastrar"
                onClick={()=>history.push("/Estagio")}
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
