import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import imgEmpresa from '../../assets/Teste.webp'
import './style.css';
import Tag from '../../Components/Tag/Index';
import imgDesenvolvimento from '../../assets/web-programming.webp';
import imgGlobal from '../../assets/global.png'
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.webp';
import imgSalario from '../../assets/money (1).webp';
import imgTipoContrato from '../../assets/gears.webp';
import imgFuncao from '../../assets/rocket-launch.webp';
import IconEmpresa from '../../assets/building.webp';
import InfoVaga from '../../Components/InfoVaga/Index';

export default function VizualizarVagaEmpresa() {
    let [idVaga, setIdVaga] = useState(0);
    const [idInscricao, setInscricao] = useState(0);
    const [Experiencia, setExperiencia] = useState('');
    const [TipoContrato, setTipoContrato] = useState('');
    const [Salario, setSalario] = useState('');
    const [Tecnologias, setTecnologias] = useState([]);
    const [Cidade, setCidade] = useState('');
    const [TituloVaga, setTituloVaga] = useState('');
    const [Candidatos, SetCandidato] = useState([]);
    const[NomeArea,setNomeArea]=useState('');
    const[TipoPresenca,setTipoPresenca]=useState('');
    const[RazaoSocial,setRazaoSocial]=useState('');

    let history=useHistory();
    useEffect(() => {
        idVaga=localStorage.getItem('idVagaSelecionadaEmpresa');
        listarCandidatos();
        BuscarPorId();
    }, []);

    const BuscarPorId = () => {
        fetch('http://localhost:5000/api/Usuario/BuscarPorId/' + idVaga, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json()).then(dados => {
            setIdVaga(dados.idVaga);
            setTituloVaga(dados.tituloVaga);
            setTipoContrato(dados.tipoContrato);
            setSalario(dados.salario);
            setTecnologias(dados.tecnologias);
            setCidade(dados.localidade);
            setExperiencia(dados.experiencia);
            setNomeArea(dados.nomeArea);
            setTipoPresenca(dados.tipoPresenca);
            setRazaoSocial(dados.razaoSocial);
        }).catch(err => console.error(err));
    }

    const listarCandidatos = () => {
        fetch('http://localhost:5000/api/Empresa/ListarCandidatosInscritos/'+idVaga, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                SetCandidato(dados);
            })
            .catch(err => console.error(err));
    }

    function CandidatosAprovados(){
        history.push("/candidatosAprovados")
    }

    const Aprovar = () => {
        fetch('http://localhost:5000/api/Empresa/Aprovar/' + idInscricao, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel aprovar este candidato");
            }
            listarCandidatos();
        }).catch(err => console.error(err));
    }

    const Reprovar = () => {
        fetch('http://localhost:5000/api/Empresa/Reprovar/' + idInscricao, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel Reprovar este candidato");
            }
            listarCandidatos();
        }).catch(err => console.error(err));
    }

    return (
        <div className="bodyPartVizualizarVagaEmpresa">
            <AccessBar />
            <Header />
            <div className="BannerVizualizarVagaEmpresa">
                <h1>Veja quem se candidatou a sua vaga</h1>
            </div>
            <br />
            <div className="vaga">
                <div className="VagaCompleta">
                    <img src={imgEmpresa} className="ImagemEmpresa" ></img>
                    <div className="MainVaga">
                        <h3 value={TituloVaga}></h3>
                        <div className="InfoVagas">
                            <InfoVaga NomeProp={RazaoSocial} source={IconEmpresa}></InfoVaga>
                            <InfoVaga NomeProp={Cidade} source={imgLocalizacao}></InfoVaga>
                            <InfoVaga NomeProp={Experiencia} source={imgFuncao}></InfoVaga>
                            <InfoVaga NomeProp={TipoContrato} source={imgTipoContrato}></InfoVaga>
                            <InfoVaga NomeProp={Salario} source={imgSalario}></InfoVaga>
                            <InfoVaga NomeProp={TipoPresenca} source={imgGlobal}/>
                            <InfoVaga NomeProp={NomeArea} source={imgDesenvolvimento}></InfoVaga>
                        </div>
                        <div className="TecnologiasVaga">
                            {
                                Tecnologias.map((tec) => {
                                    return (
                                        <Tag key={tec} NomeTag={tec}></Tag>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <button className="btAprovados" onClick={CandidatosAprovados}>Candidatos aprovados para esta vaga</button>
            <div className="ListaDeInscicoes">
                    {
                        Candidatos.map((item) => {
                            return (
                                <div key={item.idCandidato} className="Inscricao">
                                    <div className="CabecaInscricao">
                                        <img src={imgEmpresa} alt="ImagemPerfil" />
                                        <h3>{item.nomeCandidato}</h3>
                                        <hr className="hr" />
                                    <h5>{item.nomeCurso}</h5>
                                    </div>
                                    <div className="CorpoInscricao">
                                        <Tag NomeTag={"E-mail:"+item.email}></Tag>
                                        <Tag NomeTag={"Telefone:"+item.telefone}></Tag>
                                        <a className="Link" href="teste">Ver perfil</a>
                                    </div>
                                    <div className="AprovarRecusar">
                                        <button className="Aprovar" onClick={event => {
                                            event.preventDefault();
                                            setInscricao(item.idInscricao);
                                            Aprovar();
                                        }}>Aprovar</button>
                                        <button className="Recusar" onClick={event => {
                                            event.preventDefault();
                                            setInscricao(item.idInscricao);
                                            Reprovar();
                                        }}>Reprovar</button>
                                    </div>
                                </div>
                            );
                        })
                    }
            </div>
            <Footer />
        </div>
    );
}