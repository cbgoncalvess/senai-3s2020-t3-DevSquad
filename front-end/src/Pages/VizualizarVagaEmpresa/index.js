import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import imgEmpresa from '../../assets/Teste.png'
import './style.css';
import Tag from '../../Components/Tag/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';
import InfoVaga from '../../Components/InfoVaga/Index';

export default function VizualizarVagaEmpresa() {
    return (
        <div className="bodyPartVizualizarVagaEmpresa">
        <AccessBar />
        <Header />
                <div className="BannerVizualizarVagaEmpresa">
                    <h1>Veja quem se candidatou a sua vaga</h1>
                </div>
        <br/>
                <div className="vaga">
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
                </div>
                <div className="ListaDeInscicoes">
                    <div className="Inscricao">
                        <div className="CabecaInscricao">
                            <img src={imgEmpresa} alt="ImagemPerfil" />
                            <h3>Usuario1</h3>
                            <hr className="hr" />
                            <h5> Cursando 2°termo de desenvolvimento</h5>
                        </div>
                        <div className="CorpoInscricao">
                            <Tag NomeTag={"Email@exemplo.com"}></Tag>
                            <Tag NomeTag={"Telefone"}></Tag>
                            <a className="Link" href="teste">Ver perfil</a>
                        </div>
                        <div className="AprovarRecusar">
                            <button className="Aprovar">Aprovar</button>
                            <button className="Recusar">Recusar</button>
                        </div>
                    </div>
                    <div className="Inscricao">
                        <div className="CabecaInscricao">
                            <img src={imgEmpresa} alt="ImagemPerfil" />
                            <h3>Usuario1</h3>
                            <hr className="hr" />
                            <h5> Cursando 2°termo de desenvolvimento</h5>
                        </div>
                        <div className="CorpoInscricao">
                            <Tag NomeTag={"Email@exemplo.com"}></Tag>
                            <Tag NomeTag={"Telefone"}></Tag>
                            <a className="Link" href="teste">Ver perfil</a>
                        </div>
                        <div className="AprovarRecusar">
                            <button className="Aprovar">Aprovar</button>
                            <button className="Recusar">Recusar</button>
                        </div>
                    </div>
                    <div className="Inscricao">
                        <div className="CabecaInscricao">
                            <img src={imgEmpresa} alt="ImagemPerfil" />
                            <h3>Usuario1</h3>
                            <hr className="hr" />
                            <h5> Cursando 2°termo de desenvolvimento</h5>
                        </div>
                        <div className="CorpoInscricao">
                            <Tag NomeTag={"Email@exemplo.com"}></Tag>
                            <Tag NomeTag={"Telefone"}></Tag>
                            <a className="Link" href="teste">Ver perfil</a>
                        </div>
                        <div className="AprovarRecusar">
                            <button className="Aprovar">Aprovar</button>
                            <button className="Recusar">Recusar</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    );
}