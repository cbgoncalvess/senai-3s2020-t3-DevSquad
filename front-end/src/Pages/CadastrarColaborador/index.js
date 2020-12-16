import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import "./style.css";

import User from "../../assets/images/user.jpg";
import Delete from "../../assets/images/cancel.jpg";
import Input from "../../Components/Input";
import AccessBar from "../../Components/AccessBar";
import BlackButton from "../../Components/BlackButton";
import AccessMenu from "../../Components/AccessMenu";
import user from '../../assets/images/user.jpg'

export default function CadastrarColaborador() {

  return (
    <div className="corpo">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="margin">
        <div className="perfis">
          <h1 className="colaboradores">Colaboradores:</h1>
              <div className="perfilBox">
                <div className="horizontal">
                  <div className="perfil">
                    <img className="user" src={user} alt="Iamgem de perfil do administrador" />
                    <h4>Administrador</h4>
                  </div>
                  <div className="infos">
                    <p>ID:1</p>
                    <p>E-mail:administrador@gmail.com</p>
                  </div>
                </div>
                <div className="ban">
                  <div className="banir">
                    <p>Deletar</p>
                    <img
                      src={Delete}
                    />
                  </div>
                </div>
              </div>

              <div className="perfilBox">
                <div className="horizontal">
                  <div className="perfil">
                    <img className="user" src={user} alt="Iamgem de perfil do administrador" />
                    <h4>Colaborador</h4>
                  </div>
                  <div className="infos">
                    <p>ID:2</p>
                    <p>E-mail:Colaborador@gmail.com</p>
                  </div>
                </div>
                <div className="ban">
                  <div className="banir">
                    <p>Deletar</p>
                    <img
                      src={Delete}
                    />
                  </div>
                </div>
              </div>
        </div>
        <hr className="barraVertical" />
        <div className="cadastrarBox">
          <div className="tituloCadastro">
            <h1>Adicionar novo Colaborador?</h1>
            <p>
              Insira os dados do novo colaborador(a), e ela(a) está
              cadastrado(a).
            </p>
          </div>
          <div className="camposCadastro">
            <Input
            id="emailColab"
              className="div-select"
              name="emailColab"
              label="*E-mail"
              type="text"
              placeholder="exemplo@exemplo.com"
              maxLength={254}
              minLength={5}
              required
            />

            <Input
            id="senhaColab"
              className="div-select"
              name="senhaColab"
              label="*Senha"
              type="password"
              placeholder="*********"
              maxLength={15}
              minLength={9}
              required
            />

            <Input
            id="confirmarSenhaColab"
              className="div-select"
              name="confirmarSenhaColab"
              label="*Confirmar Senha"
              type="password"
              placeholder="*********"
              maxLength={15}
              minLength={9}
              required
            />
          </div>
          <div className="botaoCadastrar">
            <BlackButton type="submit" name="Cadastrar">
              Cadastrar
            </BlackButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
