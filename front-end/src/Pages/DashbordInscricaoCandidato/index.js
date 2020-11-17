import React, { useEffect, useState } from 'react';

//style
import './style.css';

// components
import AccessBar from '../../Components/AccessBar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import InfoVaga from '../../Components/InfoVaga/Index';
import Tag from '../../Components/Tag/Index';

// images
import imgEmpresa from '../../assets/Teste.png'
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';



export default function InscricaoDashboardCandidato() {

    const [vagas, setVagas] = useState([]);

    const listar = () => {
        fetch('http://localhost:5000/api/Candidato/ListarVagasInscritas', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response).catch(e => e.console.error(e));
    }
    return (
        <div className="InscricaoDashboardCandidato">
            <AccessBar />
            <Header />
            <main className="">
                <div className="bannerDashboardCandidato">
                    <h2>Bem-vindo Candidato ;)!</h2>
                </div>


                <section className="sessaoVagaInscritas">

                    <div className="title-vagas-inscritas"><h3>Vagas que você se inscreveu:</h3></div>

                    {vagas.map((item) => {
                        return (
                            <div className="vaga" key={item.idVaga}>


                                <div className="VagaCompleta">

                                    <img src={imgEmpresa} className="ImagemEmpresa" ></img>

                                    <div className="MainVaga">

                                        <h3>Titulo da vaga</h3>

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
                                                    <Tag key={tec} NomeTag={tec}></Tag>
                                                )
                                            })}
                                        </div>

                                        <div className="divisionBtnRevogar">
                                            <button className="btnRevogar">revogar inscrição</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </section>


            </main>
            <Footer />
        </div>
    )
}