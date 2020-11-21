import React, { useEffect, useState } from 'react';

//style
// import './style.css';

// components
import AccessBar from '../../Components/AccessBar/index';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import InfoVaga from '../../Components/InfoVaga/Index';
import Tag from '../../Components/Tag/Index';

// images
<<<<<<< HEAD
import imgEmpresa from '../../assets/images/Teste.webp';
import imgDesenvolvimento from '../../assets/images/web-programming.webp';
import imgLocalizacao from '../../assets/images/big-map-placeholder-outlined-symbol-of-interface.webp';
import imgSalario from '../../assets/images/money (1).webp';
import imgTipoContrato from '../../assets/images/gears.webp';
import imgFuncao from '../../assets/images/rocket-launch.webp';
import IconEmpresa from '../../assets/images/building.webp';


=======
import imgEmpresa from '../../assets/Teste.webp'
import imgDesenvolvimento from '../../assets/web-programming.webp';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.webp';
import imgSalario from '../../assets/money (1).webp';
import imgTipoContrato from '../../assets/gears.webp';
import imgFuncao from '../../assets/rocket-launch.webp';
import IconEmpresa from '../../assets/building.webp';
>>>>>>> fabe768ad2d9cb0066ad414603250e8433092a98

export default function InscricaoDashboardCandidato() {
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/Candidato/ListarVagasInscritas', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json())
            .then(dados => {
                setVagas(dados);
            }).catch(e => e.console.error(e));
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

                    <div className="listadeVagas">
                        {
                            vagas.map((item) => {
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
                    </div>


                </section>


            </main>
            <Footer />
        </div>
    )
}