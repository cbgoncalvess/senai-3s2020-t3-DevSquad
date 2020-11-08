import React, { useState, useEffect } from 'react';

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
    const [ListaDeVagas, SetListVagas] = useState([]);
    const[TecnologiasDaVaga,SetTecnologiasDaVaga]=useState([]);
    const [Tecnologias, SetTecnologias] = useState([]);
    let [Tecnologia, SetTecnologia] = useState('');
    const [idVaga, SetIdVaga] = useState(0);

    useEffect(() => {
        listarVagas();
        listarTecnologias();
    }, []);

    const DeletarTecnologia = () => {
        const form = {
            idTecnologia: 3,
            idVaga: idVaga
        };
        fetch('http://localhost:5000/api/VagaTecnologia', {
            method: 'DELETE',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(dados => {
                listarVagas();
            })
            .catch(err => console.error(err));
    }

    const AdicionarTecnologia = () => {
        const form = {
            idTecnologia: 3,
            idVaga: idVaga
        };
        fetch('http://localhost:5000/api/VagaTecnologia', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(dados => {
                listarVagas();
            })
            .catch(err => console.error(err));
    }

    const listarVagas = () => {
        fetch('http://localhost:5000/api/Vagas/ListarVagasPublicadas', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetListVagas(dados);
            })
            .catch(err => console.error(err));
    }

    const listarTecnologias = () => {
        fetch('http://localhost:5000/api/Tecnologia', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetTecnologias(dados)
            })
            .catch(err => console.error(err));
    }

    function ApareceEditarVaga() {
        let idEditarPelicula = document.getElementById("peliculaEditarVaga");
        let idModalVaga = document.getElementById("ModalEditarVaga");
        if (idEditarPelicula.classList == "peliculaEditarVaga none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fechar() {
        let idModalVaga = document.getElementById("ModalEditarVaga");
        let idEditarPelicula = document.getElementById("peliculaEditarVaga");
        if (idEditarPelicula.classList != "peliculaEditarVaga none") {
            idEditarPelicula.classList.add("none");
            idModalVaga.classList.add("none");
        }
    }

    function ApareceAdicionarTecnologia() {
        let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
        let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
        if (idAdcPelicula.classList == "peliculaAddTecnologia none")
            console.log(idVaga);
        idAdcPelicula.classList.remove("none");
        idModalTecnologia.classList.remove("none");
    }

    function btn_fecharTecnologia() {
        let idAdcPelicula = document.getElementById("peliculaAddTecnologia");
        let idModalTecnologia = document.getElementById("ModalAdicionarTecnologia");
        if (idAdcPelicula.classList != "peliculaAddTecnologia none") {
            idAdcPelicula.classList.add("none");
            idModalTecnologia.classList.add("none");
            console.log(idVaga);
        }
    }

    function ApareceRemoverTecnologia() {
        let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
        let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
        if (idAdcPelicula.classList == "peliculaRemoverTecnologia none")
            idAdcPelicula.classList.remove("none");
        idModalTecnologia.classList.remove("none");
    }

    function btn_fecharRemoverTecnologia() {
        let idAdcPelicula = document.getElementById("peliculaRemoverTecnologia");
        let idModalTecnologia = document.getElementById("ModalRemoverTecnologia");
        if (idAdcPelicula.classList != "peliculaRemoverTecnologia none") {
            idAdcPelicula.classList.add("none");
            idModalTecnologia.classList.add("none");
        }
    }

    return (
        <div className="bodyPartVagasPublicadas">
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="ImagemHeader">
                <h1>Bem vindo Empresa</h1>
            </div>

            <div className="ListaDeVagas">
                <h2>Vagas que você publicou nos últimos dias</h2>
                <br />
                {
                    ListaDeVagas.map((item) => {
                        return (
                            <div key={item.idVaga} className="vaga">
                                <div className="Edit-Delete">
                                    <a>Publicou a vaga em 10/02/2020</a>
                                    <img className="Edit" src={imgEdit} id="btn-EditarVaga" onClick={event => {
                                        event.preventDefault();
                                        ApareceEditarVaga();
                                    }} />
                                    <img className="Delete" src={imgDelete} />
                                </div>
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
                                            <InfoVaga NomeProp={"Desenvolvimento"} source={imgDesenvolvimento} />
                                        </div>
                                        <div className="TecnologiasVaga">
                                            {item.tecnologias.map((tec) => {
                                                return (
                                                    <Tag key={tec} NomeTag={tec}></Tag>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="AdicionarRemoverTecnologia">
                                    <h6 className="underlineText" onClick={event => {
                                        event.preventDefault();
                                        ApareceAdicionarTecnologia();
                                        SetIdVaga(item.idVaga);
                                    }}>Adicionar tecnologia</h6>

                                    <h6 className="underlineText" onClick={event => {
                                        event.preventDefault();
                                        ApareceRemoverTecnologia();
                                        SetTecnologiasDaVaga(item.tecnologias);
                                        SetIdVaga(item.idVaga);
                                    }}>Remover tecnologia</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div id="peliculaRemoverTecnologia" className="peliculaRemoverTecnologia none" onClick={btn_fecharRemoverTecnologia}></div>
            <div id="ModalRemoverTecnologia" className="ModalRemoverTecnologia none">
                <h2>Remover tecnologia Vaga</h2>
                <form>
                    <div className="select">
                        <label>Tecnologias</label>
                        <select className="div-select" onChange={e => SetTecnologia(e.target.value)} value={Tecnologia}>
                            <option value="0">Selecione a tecnologia que deseja remover</option>
                            {
                                TecnologiasDaVaga.map((item) => {
                                    return <option value={item.tecnologia}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <button onClick={DeletarTecnologia}>Adicionar</button>
                </form>
            </div>

            <div id="peliculaAddTecnologia" className="peliculaAddTecnologia none" onClick={btn_fecharTecnologia}></div>
            <div id="ModalAdicionarTecnologia" className="ModalAdicionarTecnologia none">
                <h2>Adicionar uma tecnologia na Vaga</h2>
                <form>
                    <div className="select">
                        <label>Tecnologias</label>
                        <select className="div-select" onChange={e => SetTecnologia(e.target.value)} value={Tecnologia}>
                            <option value="0">Selecione uma área de atuação</option>
                            {
                                Tecnologias.map((item) => {
                                    return <option value={item.tecnologia}>{item.nomeTecnologia}</option>
                                })
                            }
                        </select>
                    </div>
                    <button onClick={AdicionarTecnologia}>Adicionar</button>
                </form>
            </div>

            <div id="peliculaEditarVaga" className="peliculaEditarVaga none" onClick={btn_fechar}></div>
            <div id="ModalEditarVaga" className="ModalEditarVaga none">
                <h2>Editar sua Vaga</h2>
                <form>
                    <Input className="InputCadastro" name="TituloVaga" label="Titulo da Vaga" />
                    <Input className="InputCadastro" name="Salario" label="Salario" />
                    <Select label="Área" Name="Area"></Select>
                    <Select label="Experiencia" Name="Experiencia"></Select>
                    <Select label="Tipo do contrato" Name="TipoContrato"></Select>
                    <Input className="InputCadastro" name="Estado" label="Estado" />
                    <Input className="InputCadastro" name="Cidade" label="Cidade" />
                    <Input className="InputCadastro" name="CEP" label="CEP" />
                    <Input className="InputCadastro" name="Logradouro" label="Logradouro" />
                    <Input className="InputCadastro" name="Complemento" label="Complemento" />
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
                    <br />
                    <div className="btVagaDiv">
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}