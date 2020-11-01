import React from 'react';

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
    return (
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="bodyPart">
                <div className="ImagemHeader">
                    <h1>Bem vindo Empresa</h1>
                </div>
                <div className="ListaDeVagas">
                    <h2>Vagas que você publicou nos últimos dias</h2>
                    <br />

                    <div className="vaga">
                        <div className="Edit-Delete">
                            <a>Publicou a vaga em 10/02/2020</a>
                            <img className="Edit" src={imgEdit} />
                            <img className="Delete" src={imgDelete} />
                        </div>
                        <div className="VagaCompleta">
                            <img src={imgEmpresa} className="ImagemEmpresa" ></img>
                            <div className="MainVaga">
                                <h3>Desenvolvedor back-end jr.</h3>
                                <div className="InfoVagas">
                                    <InfoVaga NomeProp={"Microsoft corporation"} source={IconEmpresa}></InfoVaga>
                                    <InfoVaga NomeProp={"São paulo"} source={imgLocalizacao}></InfoVaga>
                                    <InfoVaga NomeProp={"Júnior"} source={imgFuncao}></InfoVaga>
                                    <InfoVaga NomeProp={"CLT"} source={imgTipoContrato}></InfoVaga>
                                    <InfoVaga NomeProp={"3.000"} source={imgSalario}></InfoVaga>
                                    <InfoVaga NomeProp={"Area de desenvolvimento"} source={imgDesenvolvimento}></InfoVaga>
                                </div>
                                <div className="TecnologiasVaga">
                                    <Tag NomeTag={"Angular"}></Tag>
                                    <Tag NomeTag={"Angular"}></Tag>
                                    <Tag NomeTag={"Angular"}></Tag>
                                    <Tag NomeTag={"Angular"}></Tag>
                                </div>
                            </div>
                        </div>
                        <div className="AdicionarRemoverTecnologia">
                            <a className="Link" href="teste">Adicionar tecnologia</a>
                            <a className="Link" href="teste">Remover tecnologia</a>
                        </div>
                    </div>
                </div>
                <div className="modalVagasPublicadas">
                <div className="ModalCadastro">
                            <h2>Divulgue sua vaga aqui</h2>
                            <form>
                                <Input name="TituloVaga" label="Titulo da Vaga" />
                                <Input name="Salario" label="Salario" />
                                <Select label="Área" Name="Area"></Select>
                                <Select label="Experiencia" Name="Experiencia"></Select>
                                <Select label="Tipo do contrato" Name="TipoContrato"></Select>
                                <Input name="Estado" label="Estado" />
                                <Input name="Cidade" label="Cidade" />
                                <Input name="CEP" label="CEP" />
                                <Input name="Logradouro" label="Logradouro" />
                                <Input name="Complemento" label="Complemento" />
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
                            </form>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    );
}