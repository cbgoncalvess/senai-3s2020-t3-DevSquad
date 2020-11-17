import React, { useEffect, useState } from 'react';

// style 
import './visualizarvaga.css';

import imgteste from '../../assets/Teste.png';

// components
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';
import Footer from '../../Components/Footer/index';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';

// imagens
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';
import { useHistory } from 'react-router-dom';

export default function VisualizarVaga() {

    
    let history = useHistory();
    function meCandidatar() {history.push("/perfilCandidato");}

    let [idVaga, setIdVaga] = useState(0);
    const [Experiencia, setExperiencia] = useState('');
    const [TipoContrato, setTipoContrato] = useState('');
    const [Salario, setSalario] = useState('');
    const [DescricaoBeneficio, setDescricaoBeneficio] = useState('');
    const [DescricaoEmpresa, setDescricaoEmpresa] = useState('');
    const [DescricaoVaga, setDescricaoVaga] = useState('');
    const [Tecnologias, setTecnologias] = useState([]);
    const [Cidade, setCidade] = useState('');
    const [TituloVaga, setTituloVaga] = useState('');
    const [Logradouro, setLogradouro] = useState('');
    const [Complemento, setComplemento] = useState('');

    useEffect(() => {
        idVaga=localStorage.getItem('idVagaSelecionada');
        listar();
    }, []);

    const SeCandidatar= () => {
        const form = {
            idVaga: idVaga
        };
        fetch('http://localhost:5000/api/Candidato/AdicionarInscricao', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            }
        }).then(response => response)
           .catch(err => console.error(err));
    }

    const listar = () => {
        fetch('http://localhost:5000/api/Usuario/BuscarPorId/'+idVaga, {
            method: 'GET',
        }).then(response => response.json()).then(dados => {
            setIdVaga(dados.idVaga);
            setTituloVaga(dados.tituloVaga);
            setLogradouro(dados.logradouro);
            setTipoContrato(dados.tipoContrato);
            setSalario(dados.salario);
            setTecnologias(dados.tecnologias);
            setComplemento(dados.complemento);
            setCidade(dados.localidade);
            setExperiencia(dados.experiencia);
            setDescricaoBeneficio(dados.descricaoBeneficio);
            setDescricaoEmpresa(dados.descricaoEmpresa);
            setDescricaoVaga(dados.descricaoVaga);
        }).catch(err => console.error(err));
    }

    return (
        <div className="VisualizarVaga">
            <AccessBar />
            <Header />
            <main className="sessaoVisualizarVaga">

                <section className="imgBannerDescriVaga">

                    <div className="divisionIntroVaga">

                        <h2 className="v-titleVaga">{TituloVaga}</h2>

                        <div className="divisionTagsLinguagem">
                            {Tecnologias.map((item) => {
                                return (
                                    <Tag NomeTag={item} />
                                );
                            })
                            }

                        </div>
                    </div>

                </section>

                <section className="infoVagaVisualizar">
                    <div className="icard-division">
                        <img src={imgteste} alt="Logo da empresa" />

                        <div className="divisionTagsVagas">

                            <div className="card-vaga-info">
                                <InfoVaga NomeProp={"Empresa"} source={IconEmpresa} />
                                <InfoVaga NomeProp={Cidade} source={imgLocalizacao} />
                                <InfoVaga NomeProp={Experiencia} source={imgFuncao} />
                            </div>

                            <div className="card-vaga-info">
                                <InfoVaga NomeProp={TipoContrato} source={imgTipoContrato} />
                                <InfoVaga NomeProp={Salario} source={imgSalario} />
                                <InfoVaga NomeProp={"Área de desenvolvimento"} source={imgDesenvolvimento} />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="sessao-svempresa">

                    <div className="descri-empresa">
                        <h2>Descrição da empresa</h2>

                        <p>{DescricaoEmpresa}</p>
                    </div>

                    <div className="descri-vaga">
                        <h2>Requisitos da vaga</h2>
                        <p>{DescricaoVaga}</p>

                    </div>

                </section>

                <section className="divisionBeneVaga">
                    <div className="centerBene">
                        <h2>O que oferecemos</h2>

                        <div className="divisionPlan">

                            <div className="divisionPlan">
                                <p>{DescricaoBeneficio}</p>
                            </div>

                        </div>
                        <button className="btnCandidatase" type="submit" onClick={SeCandidatar}>Me Candidatar</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}