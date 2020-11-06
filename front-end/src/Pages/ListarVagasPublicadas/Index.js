import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Select from '../../Components/Select/Index';

import imgDelete from '../../assets/delete.png'
import imgEdit from '../../assets/black-ink-pen.png'
import imgEmpresa from '../../assets/Teste.png'
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';
import AccessMenu from '../../Components/AccessMenu';

import './style.css';

export default function VagasPublicadas() {
    const [ListaDeVagas, SetListVagas] = useState([]);
    const [Tecologias, SetTecnologia] = useState([]);

    useEffect(() => {
        listarVagas();
    }, []);

    const listarVagas = () => {
        fetch('http://localhost:5000/api/Vagas/ListarVaga', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetTecnologia(dados.tecnologias)
                SetListVagas(dados);
            })
            .catch(err => console.error(err));
    }

    const listarTecnologias = () => {
        fetch('http://localhost:5000/api/Empresa/ListarTecnologia', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetTecnologia(dados)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="bodyPartVagasPublicadas">
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="ImagemHeader">
                <h1>Bem vindo Empresa</h1>
            </div>
            <div className="ListaDeVagas">
                <h2>Vagas que você publicou nos últimos dias</h2>
                <br />
                {
                    ListaDeVagas.map((item) => {
                        return (
                            <div key={item.idVaga} className="vaga">
                                <div className="Edit-Delete">
                                    <a>Publicou a vaga em 10/02/2020</a>
                                    <img className="Edit" src={imgEdit} />
                                    <img className="Delete" src={imgDelete} />
                                </div>
                                <div className="VagaCompleta">
                                    <img src={imgEmpresa} className="ImagemEmpresa" ></img>
                                    <div className="MainVaga">
                                        <h3>{item.tituloVaga}.</h3>
                                        <div className="InfoVagas">
                                            <InfoVaga NomeProp={item.razaoSocial} source={IconEmpresa} />
                                            <InfoVaga NomeProp={item.localidade} source={imgLocalizacao} />
                                            <InfoVaga NomeProp={item.experiencia} source={imgFuncao} />
                                            <InfoVaga NomeProp={item.tipoContrato} source={imgTipoContrato} />
                                            <InfoVaga NomeProp={item.salario} source={imgSalario} />
                                            <InfoVaga NomeProp={item.nomeArea} source={imgDesenvolvimento} />
                                        </div>
                                        <div className="TecnologiasVaga">
                                            {item.tecnologias.map((tec) => {
                                                return (
                                                        <Tag key={tec}  NomeTag={tec}></Tag>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="AdicionarRemoverTecnologia">
                                    <a className="Link" href="teste">Adicionar tecnologia</a>
                                    <a className="Link" href="teste">Remover tecnologia</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div id="peliculaEditarVaga" className="ModalPeliculaNone"></div>
            <div id="ModalEditarVaga" className="ModalEditarNone" >
                <h2>Editar sua Vaga</h2>
                <form>
                    <Input className="InputCadastro" name="TituloVaga" label="Titulo da Vaga" />
                    <Input className="InputCadastro" name="Salario" label="Salario" />
                    <Select label="Área" Name="Area"></Select>
                    <Select label="Experiencia" Name="Experiencia"></Select>
                    <Select label="Tipo do contrato" Name="TipoContrato"></Select>
                    <Input className="InputCadastro" name="Estado" label="Estado" />
                    <Input className="InputCadastro" name="Cidade" label="Cidade" />
                    <Input className="InputCadastro" name="CEP" label="CEP" />
                    <Input className="InputCadastro" name="Logradouro" label="Logradouro" />
                    <Input className="InputCadastro" name="Complemento" label="Complemento" />
                    <div className="text-area">
                        <label>Descrição da vaga</label>
                        <textarea name="DescricaoVaga"></textarea>
                        <br />
                        <label>Descrição da empresa</label>
                        <textarea name="DescricaoEmpresa"></textarea>
                        <br />
                        <label>Descrição dos benefícios</label>
                        <textarea name="DescricaoBeneficio"></textarea>
                    </div>
                    <br />
                    <div className="btVagaDiv">
                        <button className="btVaga"><h3>Editar Vaga</h3></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}