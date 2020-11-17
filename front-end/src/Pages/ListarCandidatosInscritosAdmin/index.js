import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import imgEmpresa from '../../assets/Teste.png'
import InfoVaga from '../../Components/InfoVaga/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';
import AccessMenu from '../../Components/AccessMenu';

import './style.css';

export default function ListarCandidatosInscritos() {

    //DeletarInscricao

    const [Candidatos, setCandidatos] = useState([]);
    const [idInscricao, setInscricao] = useState(0);

    let [idVaga, setIdVaga] = useState(0);
    const [Experiencia, setExperiencia] = useState('');
    const [TipoContrato, setTipoContrato] = useState('');
    const [Salario, setSalario] = useState('');
    const [Cidade, setCidade] = useState('');
    const [TituloVaga, setTituloVaga] = useState('');
    const [DescricaoBeneficio, setDescricaoBeneficio] = useState('');
    const [DescricaoEmpresa, setDescricaoEmpresa] = useState('');
    const [DescricaoVaga, setDescricaoVaga] = useState('');

    useEffect(() => {
        idVaga = localStorage.getItem('idVagaSelecionadaAdm');
        listarCandidatos();
        BuscarPorId();
    }, []);

    const DeletarInscricao = () => {
        fetch('http://localhost:5000/api/Administrador/DeletarInscricao/' + idInscricao, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel deletar esta inscricao");
            } else {
                alert("Inscrição deletada com sucesso");
            }
        }).catch(err => console.error(err));
    }

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
            setCidade(dados.localidade);
            setExperiencia(dados.experiencia);
            setDescricaoBeneficio(dados.descricaoBeneficio);
            setDescricaoEmpresa(dados.descricaoEmpresa);
            setDescricaoVaga(dados.descricaoVaga);
        }).catch(err => console.error(err));
    }

    const listarCandidatos = () => {
        fetch('http://localhost:5000/api/Administrador/ListarCandidatosInscritosAdm/' + idVaga, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setCandidatos(dados);
            })
            .catch(err => console.error(err));
    }

    const DeletarVaga = () => {
        fetch('http://localhost:5000/api/Administrador/DeletarVaga/'+idVaga, {
            method: 'DELETE',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel deletar esta inscricao");
            } else {
                alert("Inscrição deletada com sucesso");
            }
        }).catch(err => console.error(err));
    }

    return (
        <div className="bodyPartInscricoesAdm">
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="Meio-Inscricoes">
                <div className="Esquerdo-Inscricoes">
                    {
                        Candidatos.map((item) => {
                            return (
                                <div key={item.idInscricao} className="BoxInscricao">
                                    <h5 className="RemoverText" onClick={e => {
                                        e.preventDefault();
                                        setInscricao(item.idInscricao);
                                        DeletarInscricao();
                                    }}>Remover da vaga X</h5>
                                    <div className="DadosInscrito">
                                        <img src={imgEmpresa} />
                                        <div className="Column-Inscricao">
                                            <h3>{item.nomeCandidato}</h3>
                                            <p className="NomeCurso">{item.nomeCurso}</p>
                                        </div>
                                    </div>
                                    <h5>Ver perfil</h5>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Direito-Inscricoes">
                    <div className="VagaDescricao">
                        <h5 className="ExcluirVagaText" onClick={DeletarVaga}>Excluir vaga</h5>
                        <div className="vaga">
                            <div className="VagaCompleta">
                                <img src={imgEmpresa} className="ImagemEmpresa" ></img>
                                <div className="MainVaga">
                                    <h3>Titulo da vaga</h3>
                                    <div className="InfoVagas">
                                        <InfoVaga NomeProp={"item.razaoSocial"} source={IconEmpresa} />
                                        <InfoVaga NomeProp={Cidade} source={imgLocalizacao} />
                                        <InfoVaga NomeProp={Experiencia} source={imgFuncao} />
                                        <InfoVaga NomeProp={TipoContrato} source={imgTipoContrato} />
                                        <InfoVaga NomeProp={Salario} source={imgSalario} />
                                        <InfoVaga NomeProp={"Desenvolvimento"} source={imgDesenvolvimento} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Descricoes">
                            <div className="DescricaoEmpresa">
                                <h3>Descricao da empresa</h3>
                                <p>{DescricaoEmpresa}</p>
                            </div>

                            <div className="DescricaoVaga">
                                <h3>Descricao da vaga</h3>
                                <p>{DescricaoVaga}</p>
                            </div>

                            <div className="DescricaoBeneficios">
                                <h3>Descricao beneficios</h3>
                                <p>{DescricaoBeneficio}</p>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}