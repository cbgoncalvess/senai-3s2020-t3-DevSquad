import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";

import imgDelete from "../../assets/delete.webp";
import imgGlobal from "../../assets/global.png";
import imgEdit from "../../assets/black-ink-pen.webp";
import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";
import AccessMenu from "../../Components/AccessMenu";

import "./style.css";

export default function VagasPublicadas() {
  let history = useHistory();

  function ApareceEditarVaga() {
    let idEditarPelicula = document.getElementById("peliculaEditarVaga");
    let idModalVaga = document.getElementById("ModalEditarVaga");
    if (idEditarPelicula.classList == "peliculaEditarVaga none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fechar() {
    let idModalVaga = document.getElementById("ModalEditarVaga");
    let idEditarPelicula = document.getElementById("peliculaEditarVaga");
    if (idEditarPelicula.classList != "peliculaEditarVaga none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAdicionarTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
    let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
    if (idAdcPelicula.classList == "peliculaAddTecnologia none")
      idAdcPelicula.classList.remove("none");
    idModalTecnologia.classList.remove("none");
  }

  function btn_fecharTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
    let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
    if (idAdcPelicula.classList != "peliculaAddTecnologia none") {
      idAdcPelicula.classList.add("none");
      idModalTecnologia.classList.add("none");
    }
  }

  function ApareceRemoverTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
    let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
    if (idAdcPelicula.classList == "peliculaRemoverTecnologia none")
      idAdcPelicula.classList.remove("none");
    idModalTecnologia.classList.remove("none");
  }

  function btn_fecharRemoverTecnologia() {
    let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
    let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
    if (idAdcPelicula.classList != "peliculaRemoverTecnologia none") {
      idAdcPelicula.classList.add("none");
      idModalTecnologia.classList.add("none");
    }
  }

  return (
    <div className="bodyPartVagasPublicadas">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="ImagemHeader">
        <h1>Bem-vinda, Empresa!</h1>
      </div>

      <div className="ListaDeVagas">
        <h2>Vagas que você publicou nos últimos dias</h2>
        <br />
        <div className="vaga">
          <div className="Edit-Delete">
            <p>{"Sua vaga expira em:29dias"}</p>
            <img
              className="Edit"
              alt="Botão que edita a vaga"
              src={imgEdit}
              id="btn-EditarVaga"
              onClick={(event) => {
                event.preventDefault();
                ApareceEditarVaga();
              }}
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão que deleta a vaga"
              onClick={() => alert("Vaga deletada com sucesso")}
            />
          </div>
          <div className="VagaCompleta">
            <img
              src={"'http://localhost:5000/imgPerfil/'+item.caminhoImagem"}
              className="ImagemEmpresa"
              alt="Imagem de perfil da empresa"
            />
            <div className="MainVaga">
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VagaEmpresa");
                }}
                className="UnderlineText"
              >
                {"item.tituloVaga"}
              </h3>
              <div className="InfoVagas">
                <InfoVaga NomeProp={"item.razaoSocial"} source={IconEmpresa} />
                <InfoVaga
                  NomeProp={"item.localidade"}
                  source={imgLocalizacao}
                />
                <InfoVaga NomeProp={"item.experiencia"} source={imgFuncao} />
                <InfoVaga
                  NomeProp={"item.tipoContrato"}
                  source={imgTipoContrato}
                />
                <InfoVaga NomeProp={"item.salario"} source={imgSalario} />
                <InfoVaga
                  NomeProp={"item.nomeArea"}
                  source={imgDesenvolvimento}
                />
                <InfoVaga NomeProp={""} source={imgGlobal} />
              </div>
              <div className="TecnologiasVaga">
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
              </div>
            </div>
          </div>
          <div className="AdicionarRemoverTecnologia">
            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceAdicionarTecnologia();
              }}
            >
              Adicionar tecnologia
            </h6>

            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceRemoverTecnologia();
              }}
            >
              Remover tecnologia
            </h6>
          </div>
        </div>

        <div className="vaga">
          <div className="Edit-Delete">
            <p>{"Sua vaga expira em:29dias"}</p>
            <img
              className="Edit"
              alt="Botão que edita a vaga"
              src={imgEdit}
              id="btn-EditarVaga"
              onClick={(event) => {
                event.preventDefault();
                ApareceEditarVaga();
              }}
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão que deleta a vaga"
              onClick={() => alert("Vaga deletada com sucesso")}
            />
          </div>
          <div className="VagaCompleta">
            <img
              src={"'http://localhost:5000/imgPerfil/'+item.caminhoImagem"}
              className="ImagemEmpresa"
              alt="Imagem de perfil da empresa"
            />
            <div className="MainVaga">
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VagaEmpresa");
                }}
                className="UnderlineText"
              >
                {"item.tituloVaga"}
              </h3>
              <div className="InfoVagas">
                <InfoVaga NomeProp={"item.razaoSocial"} source={IconEmpresa} />
                <InfoVaga
                  NomeProp={"item.localidade"}
                  source={imgLocalizacao}
                />
                <InfoVaga NomeProp={"item.experiencia"} source={imgFuncao} />
                <InfoVaga
                  NomeProp={"item.tipoContrato"}
                  source={imgTipoContrato}
                />
                <InfoVaga NomeProp={"item.salario"} source={imgSalario} />
                <InfoVaga
                  NomeProp={"item.nomeArea"}
                  source={imgDesenvolvimento}
                />
                <InfoVaga NomeProp={""} source={imgGlobal} />
              </div>
              <div className="TecnologiasVaga">
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
              </div>
            </div>
          </div>
          <div className="AdicionarRemoverTecnologia">
            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceAdicionarTecnologia();
              }}
            >
              Adicionar tecnologia
            </h6>

            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceRemoverTecnologia();
              }}
            >
              Remover tecnologia
            </h6>
          </div>
        </div>

        <div className="vaga">
          <div className="Edit-Delete">
            <p>{"Sua vaga expira em:29dias"}</p>
            <img
              className="Edit"
              alt="Botão que edita a vaga"
              src={imgEdit}
              id="btn-EditarVaga"
              onClick={(event) => {
                event.preventDefault();
                ApareceEditarVaga();
              }}
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão que deleta a vaga"
              onClick={() => alert("Vaga deletada com sucesso")}
            />
          </div>
          <div className="VagaCompleta">
            <img
              src={"'http://localhost:5000/imgPerfil/'+item.caminhoImagem"}
              className="ImagemEmpresa"
              alt="Imagem de perfil da empresa"
            />
            <div className="MainVaga">
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VagaEmpresa");
                }}
                className="UnderlineText"
              >
                {"item.tituloVaga"}
              </h3>
              <div className="InfoVagas">
                <InfoVaga NomeProp={"item.razaoSocial"} source={IconEmpresa} />
                <InfoVaga
                  NomeProp={"item.localidade"}
                  source={imgLocalizacao}
                />
                <InfoVaga NomeProp={"item.experiencia"} source={imgFuncao} />
                <InfoVaga
                  NomeProp={"item.tipoContrato"}
                  source={imgTipoContrato}
                />
                <InfoVaga NomeProp={"item.salario"} source={imgSalario} />
                <InfoVaga
                  NomeProp={"item.nomeArea"}
                  source={imgDesenvolvimento}
                />
                <InfoVaga NomeProp={""} source={imgGlobal} />
              </div>
              <div className="TecnologiasVaga">
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
              </div>
            </div>
          </div>
          <div className="AdicionarRemoverTecnologia">
            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceAdicionarTecnologia();
              }}
            >
              Adicionar tecnologia
            </h6>

            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceRemoverTecnologia();
              }}
            >
              Remover tecnologia
            </h6>
          </div>
        </div>

        <div className="vaga">
          <div className="Edit-Delete">
            <p>{"Sua vaga expira em:29dias"}</p>
            <img
              className="Edit"
              alt="Botão que edita a vaga"
              src={imgEdit}
              id="btn-EditarVaga"
              onClick={(event) => {
                event.preventDefault();
                ApareceEditarVaga();
              }}
            />
            <img
              className="Delete"
              src={imgDelete}
              alt="Botão que deleta a vaga"
              onClick={() => alert("Vaga deletada com sucesso")}
            />
          </div>
          <div className="VagaCompleta">
            <img
              src={"'http://localhost:5000/imgPerfil/'+item.caminhoImagem"}
              className="ImagemEmpresa"
              alt="Imagem de perfil da empresa"
            />
            <div className="MainVaga">
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/VagaEmpresa");
                }}
                className="UnderlineText"
              >
                {"item.tituloVaga"}
              </h3>
              <div className="InfoVagas">
                <InfoVaga NomeProp={"item.razaoSocial"} source={IconEmpresa} />
                <InfoVaga
                  NomeProp={"item.localidade"}
                  source={imgLocalizacao}
                />
                <InfoVaga NomeProp={"item.experiencia"} source={imgFuncao} />
                <InfoVaga
                  NomeProp={"item.tipoContrato"}
                  source={imgTipoContrato}
                />
                <InfoVaga NomeProp={"item.salario"} source={imgSalario} />
                <InfoVaga
                  NomeProp={"item.nomeArea"}
                  source={imgDesenvolvimento}
                />
                <InfoVaga NomeProp={""} source={imgGlobal} />
              </div>
              <div className="TecnologiasVaga">
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
                <Tag NomeTag={"C#"}></Tag>
              </div>
            </div>
          </div>
          <div className="AdicionarRemoverTecnologia">
            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceAdicionarTecnologia();
              }}
            >
              Adicionar tecnologia
            </h6>

            <h6
              className="underlineText"
              onClick={(event) => {
                event.preventDefault();
                ApareceRemoverTecnologia();
              }}
            >
              Remover tecnologia
            </h6>
          </div>
        </div>
      </div>

      <div
        id="peliculaRemoverTecnologia"
        className="peliculaRemoverTecnologia none"
        onClick={btn_fecharRemoverTecnologia}
      ></div>
      <div id="ModalRemoverTecnologia" className="ModalRemoverTecnologia none">
        <h2>Remover tecnologia Vaga</h2>
        <form>
          <div className="select-final">
            <label>Tecnologias</label>
            <select>
              <option value="0">
                Selecione a tecnologia que deseja remover
              </option>
            </select>
          </div>
          <button
            onClick={() => alert("Tecnologia deletada com sucesso")}
            className="btVaga"
          >
            Remover
          </button>
        </form>
      </div>

      <div
        id="peliculaAddTecnologia"
        className="peliculaAddTecnologia none"
        onClick={btn_fecharTecnologia}
      ></div>
      <div
        id="ModalAdicionarTecnologia"
        className="ModalAdicionarTecnologia none"
      >
        <h2>Adicionar uma tecnologia na Vaga</h2>
        <form>
          <div className="select-final">
            <label>Tecnologias</label>
            <select>
              <option value="0">Selecione uma área de atuação</option>
            </select>
          </div>
          <button
            onClick={() => alert("Tecnologia adicionada com sucesso")}
            className="btVaga"
          >
            Adicionar
          </button>
        </form>
      </div>

      <div
        id="peliculaEditarVaga"
        className="peliculaEditarVaga none"
        onClick={btn_fechar}
      ></div>
      <div id="ModalEditarVaga" className="ModalEditarVaga none">
        <h2>Editar sua Vaga</h2>
        <form>
          <Input
            id="TituloVagaEdit"
            className="InputCadastro"
            name="TituloVagaEdit"
            label="Titulo da Vaga"
            required
          />
          <Input
            id="SalarioEdit"
            className="InputCadastro"
            name="SalarioEdit"
            label="Salario"
            required
          />

          <div className="select-final">
            <label htmlFor="ExperienciaEdit">Experiência</label>
            <select required id="ExperienciaEdit">
              <option value="0">Selecione um nível de experiência</option>
              <option value="Pleno">Pleno</option>
              <option value="Sênior">Sênior</option>
              <option value="Júnior">Júnior</option>
            </select>
          </div>

          <div className="select-final">
            <label htmlFor="TipoContratoEdit">Tipo de contrato</label>
            <select required id="TipoContratoEdit">
              <option value="0">Selecione um tipo de contrato</option>
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
              <option value="Estágio">Estagio</option>
            </select>
          </div>
          <Input
            className="InputCadastro"
            name="EstadoEdit"
            label="Estado"
            required
            id="EstadoEdit"
          />
          <Input
            className="InputCadastro"
            name="CidadeEdit"
            label="Cidade"
            required
            id="CidadeEdit"
          />
          <Input
            className="InputCadastro"
            name="CepEdit"
            label="CEP"
            required
            id="CepEdit"
          />
          <Input
            className="InputCadastro"
            name="LogradouroEdit"
            label="Logradouro"
            required
          />
          <Input
            className="InputCadastro"
            name="ComplementoEdit"
            label="Complemento"
            id="ComplementoEdit"
          />
          <div className="text-area">
            <label htmlFor="DescricaoVagaEdit">Descrição da vaga</label>
            <textarea
              name="DescricaoVaga"
              maxLength="750"
              minLength="750"
              required
              id="DescricaoVagaEdit"
            ></textarea>
            <br />
            <label htmlFor="DescricaoEmpresaEdit">Descrição da empresa</label>
            <textarea
              name="DescricaoEmpresa"
              maxLength="750"
              minLength="750"
              required
              id="DescricaoEmpresaEdit"
            ></textarea>
            <br />
            <label htmlFor="DescricaoBeneficioEdit">
              Descrição dos benefícios
            </label>
            <textarea
              name="DescricaoBeneficioEdit"
              required
              maxLength="750"
              minLength="750"
              id="DescricaoBeneficioEdit"
            ></textarea>
          </div>
          <br />
        </form>
        <div className="btVagaDiv">
          <button className="btVaga" onClick={() => btn_fechar}>
            Editar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
