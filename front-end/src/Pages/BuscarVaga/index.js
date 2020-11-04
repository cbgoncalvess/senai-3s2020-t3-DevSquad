import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Footer from '../../Components/Footer';

import imgEmpresa from '../../assets/Teste.png'
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';

import banner from '../../assets/bannerBuscarVagas.png';

import './style.css';

export default function BuscarVaga(){
    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />

            <div className="content-searchJobs">
                <div>
                    <img src={banner} alt="Pessoa utilizando um computador, que está em cima de uma mesa" className="imgBackground-searchJobs"/>
                </div>

                <div className="vagas">
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
                </div>
            </div>

            <Footer />
        </body>
    );
}