import React from "react";
import imgDelete from '../../assets/delete.jpg'
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from '../../Components/Tag/Index';

import user from '../../assets/images/user.jpg'
// style
import "./style.css";

export default function VisualizarEmpresaAdm() {
let history=useHistory();

  return (
    <div className="VisualizarVagaAdm">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="MeioVizualizarAdm">
        <div className="EsquerdoAdm">
          <div>
                <div className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={user}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>Desenvolvedor full stack</h2>
                      <p>Desenvolvimento</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      alt="Delete"
                      onClick={() =>alert("Vaga deletada com sucesso")}
                      alt="Botão que deleta a vaga da empresa"
                    />
                    <div className="DeletePerfil">
                        <button
                      className="btVerPerfil"
                      onClick={e=>{
                        e.preventDefault();
                        history.push("VizualizarVagaAdmin");
                    }}
                    >
                      <h4>Ver vaga</h4>
                    </button>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <hr className="hrAdm"></hr>
        <div className="DireitoAdm">
            <div className="BoxEmpresa">
                <div className="ImagemEmpresaAdm">
                    <img src={user} alt="Imagem de perfil da empresa"/>
                  <h5></h5>
                </div>
                <div className="DadosDaEmpresa">
                  <Tag NomeTag={"Nome do responsável:Roberto Possarle"}/>
                  <Tag NomeTag={"CNPJ:243234234234"}/>
                  <Tag NomeTag={"Email para contato:Senai@gmail.com"}/>
                  <Tag NomeTag={"Nome fantasia:SENAI Informática"}/>
                  <Tag NomeTag={"Telefone:2432432342"}/>
                  <Tag NomeTag={"Numero de fúncionarios atuando:34"}/>
                  <Tag NomeTag={"Número do CNAE:234234234"}/>
                  <Tag NomeTag={"Estado:SP"}/>
                  <Tag NomeTag={"Cidade:São Paulo"}/>
                  <Tag NomeTag={"CEP:01006000"}/>
                  <Tag NomeTag={"Logradouro:Rua barão de limeira"}/>
                  <Tag NomeTag={"Complemento:Do lado da Folha de São Paulo"}/>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
