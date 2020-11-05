import React, { useEffect, useState } from 'react';

import imgDelete from '../../assets/delete.png'
import imgEdit from '../../assets/black-ink-pen.png'

import imgEnterprise from '../../assets/enterprise.png'
import imgCertificate from '../../assets/certificate.png';
import imgWorker from '../../assets/worker.png'
import imgPadrao from '../../assets/android-character-symbol.png';

import './style.css'

import AccessMenu from '../../Components/AccessMenu';
import Tag from '../../Components/Tag/Index';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Select from '../../Components/Select/Index';

export default function Estagio() {
    const [Estagios, SetEstagios] = useState([]);

    useEffect(() => {
        listarEstagios();
    }, []);

    const listarEstagios = () => {
        fetch('http://localhost:5000/api/Estagios', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetEstagios(dados);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="bodyPartEstagio">
            <AccessBar />
            <Header />
            <AccessMenu />
            <br />
            <div className="Estatisticas">
                <div className="Empresascadastradas">
                    <img src={imgEnterprise} />
                    <div className="EstatiscaColumn">
                        <h5>30</h5>
                        <br />
                        <h5>Empresas cadastradas</h5>
                    </div>
                </div>
                <div className="Candidatoscontratados">
                    <img src={imgCertificate} />
                    <div className="EstatiscaColumn">
                        <h5>30</h5>
                        <br />
                        <h5>Candidatos contratados</h5>
                    </div>
                </div>
                <div className="Candidatoscadastrados">
                    <img src={imgWorker} />
                    <div className="EstatiscaColumn">
                        <h5>30</h5>
                        <br />
                        <h5>Candidatos cadastrados</h5>
                    </div>
                </div>
            </div>
            <br />
            <select className="selectEstagio">
                <option>Filtre sua busca por meses</option>
                <option>3Meses</option>
                <option>6Meses</option>
                <option>9Meses</option>
                <option>12Meses</option>
            </select>
            <div className="ListaEstagios">
                {
                    Estagios.map((item) => {
                        return (
                            <div className="Estagio">
                                <div className="Ferramentas">
                                    <img className="Edit" src={imgEdit} />
                                    <img className="Delete" src={imgDelete} />
                                </div>
                                <div className="CabecaEstagio">
                                    <img src={imgPadrao} alt="ImagemPerfil" />
                        <h3>{item.idCandidatoNavigation.nomeCompleto}</h3>
                                    <hr className="hr" />
                                    <h5> Cursando 2°termo de desenvolvimento</h5>
                                </div>
                                <div className="CorpoEstagio">
                                    <Tag NomeTag={"Email@exemplo.com"}></Tag>
                                    <Tag NomeTag={"Telefone"}></Tag>
                                    <Tag NomeTag={"Status:Desempregado"}></Tag>
                                    <Tag NomeTag={item.periodoEstagio}></Tag>
                                    <Tag NomeTag={"Tempo de estagio:10meses"}></Tag>
                                    <Tag NomeTag={"Empresa:"+item.idEmpresaNavigation.razaoSocial}></Tag>
                                    <a className="Link" href="teste">Ver perfil</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="peliculaEstagio"></div>
            <div className="modalEstagio">
                <h2>Editar estágio</h2>
                <form>
                    <Select label="Nome do candidato" Name="NomeCandidato"></Select>
                    <Select label="Periodo de estagio" Name="Periodo"></Select>
                    <Select label="Nome da empresa" Name="NomeEmpresa"></Select>
                    <div className="btEditarEstagioDiv">
                        <button className="btVaga"><h3>Editar</h3></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div >
    );
}