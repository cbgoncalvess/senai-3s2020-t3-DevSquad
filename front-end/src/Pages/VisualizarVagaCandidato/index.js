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

export default function VisualizarVaga() {

    const [idVaga, setIdVaga] = useState(0);
    const [Experiencia, setExperiencia] = useState('');
    const [TipoContrato, setTipoContrato] = useState('');
    const [Salario, setSalario] = useState('');
    const [DescricaoBeneficio, setDescricaoBeneficio] = useState('');
    const [DescricaoEmpresa, setDescricaoEmpresa] = useState('');
    // const [DescricaoVaga, setDescricaoVaga] = useState('');
    const [Tecnologias, setTecnologias] = useState([]);
    const [Estado, setEstado] = useState('');
    const [Cidade, setCidade] = useState('');
    const [CEP, setCEP] = useState('');
    const [Logradouro, setLogradouro] = useState('');
    const [Complemento, setComplemento] = useState('');

    useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/vagas/VagaCompleta', {
            method: 'GET',
        }).then(response => response.json()).then(dados => {
            setIdVaga(dados.idVaga);
            setLogradouro(dados.logradouro);
            setTipoContrato(dados.tipoContrato);
            // SetDescricaoVaga(dados.descricaoVaga);
            setSalario(dados.salario);
            setTecnologias(dados.tecnologias);
            setDescricaoBeneficio(dados.descricaoBeneficio);
            setComplemento(dados.complemento);
            setEstado(dados.estado);
            setCidade(dados.cidade);
            setDescricaoEmpresa(dados.descricaoEmpresa);
            setCEP(dados.cep);
            setExperiencia(dados.experiencia);
        }).catch(err => console.error(err));

    }

        return (
            <div className="VisualizarVaga">
                <AccessBar />
                <Header />
                <main className="sessaoVisualizarVaga">

                    <section className="imgBannerDescriVaga">

                        <div className="divisionIntroVaga">

                            <h2 className="v-titleVaga">Desenvolvedor Mobile Jr.</h2>

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
                                    <InfoVaga NomeProp={"Teste"} source={IconEmpresa} />
                                    <InfoVaga NomeProp={"Teste"} source={imgLocalizacao} />
                                    <InfoVaga NomeProp={"Teste"} source={imgFuncao} />
                                </div>

                                <div className="card-vaga-info">
                                    <InfoVaga NomeProp={"Teste"} source={imgTipoContrato} />
                                    <InfoVaga NomeProp={"Teste"} source={imgSalario} />
                                    <InfoVaga NomeProp={"Teste"} source={imgDesenvolvimento} />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="sessao-svempresa">

                        <div className="descri-empresa">
                            <h2>Descrição da empresa</h2>
                            <p>Microsoft Corporation é uma empresa transnacional americana com sede em Redmond,
                            Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador,
                        produtos eletrônicos, computadores e serviços pessoais</p>
                        </div>

                        <div className="descri-vaga">
                            <h2>Requisitos da vaga</h2>
                            <p>Requisitos Técnicos:
                            *Conhecimento intermediário em Javascript e framework Angular.
                            *Conhecimentos em ES6.
                            *Experiência com desenvolvimento mobile com Ionic / Cordova.
                            *Conhecimento em controle de versão Git.
                            *Inglês técnico. (Leitura e escrita).
                            *Bom entendimento sobre APIs RESTful.
                            *Domínio em HTML5 & CSS3 (SASS).

                            Requisitos Adicionais:
                            *Conhecimento básico em PHP;
                            *Experiência com Gulp;
                            *Conhecimento em VueJS;
                            *Participação ativa no GitHub.
                            *+100pts no StackOverflow.
                        *Gostar de rock n’ roll!</p>

                        </div>

                    </section>

                    <section className="divisionBeneVaga">
                        <div className="centerBene">
                            <h2>O que oferecemos</h2>

                            <div className="divisionPlan">
                                <div>
                                    <p>
                                        -Plano Odontológico
                                        -Plano de Saúde
                                        -Vale Alimentação
                                        -Vale transporte
                                -Vale refeição</p>
                                </div>

                                <div className="divisionPlan">
                                    <p>-Incentivo para palestrar e participar de eventos.
                                   -Flexibilidade para trabalho remoto.</p>
                                </div>

                            </div>
                            <button className="btnCandidatase" type="submit">Me Candidatar</button>
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        )
    }