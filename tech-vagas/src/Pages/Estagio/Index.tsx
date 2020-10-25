import React from 'react';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import imgDelete from '../../assets/delete.png'
import imgEdit from '../../assets/black-ink-pen.png'
import imgEmpresa from '../../assets/Teste.png'
import './style.css';
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';


export default function Estagio() {
    return (
        <body>
            <AccessBar />
            <Header />
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
                                    <InfoVaga NomeProp={"Microsoft corporation"} Source={IconEmpresa}></InfoVaga>
                                    <InfoVaga NomeProp={"São paulo"} Source={imgLocalizacao}></InfoVaga>
                                    <InfoVaga NomeProp={"Júnior"} Source={imgFuncao}></InfoVaga>
                                    <InfoVaga NomeProp={"CLT"} Source={imgTipoContrato}></InfoVaga>
                                    <InfoVaga NomeProp={"3.000"} Source={imgSalario}></InfoVaga>
                                    <InfoVaga NomeProp={"Area de desenvolvimento"} Source={imgDesenvolvimento}></InfoVaga>
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
                </div>
            </div>
            <Footer />
        </body>
    );
}