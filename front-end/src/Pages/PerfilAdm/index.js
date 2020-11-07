import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import Input from '../../Components/Input/index';

import imgDelete from '../../assets/delete.png'
import imgPadrao from '../../assets/android-character-symbol.png';

import './style.css';

export default function PerfilAdm() {
    const [Empresas, SetEmpresa] = useState([]);
    useEffect(() => {
        listarEmpresa();
    }, []);

    const listarEmpresa = () => {
        fetch('http://localhost:5000/api/Empresa/ListarEmpresa', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetEmpresa(dados);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="bodyPartVizualizarPerfil">
            <AccessBar />
            <Header />
            <div className="meioPerfil">
                <div className="EsquerdoPerfil">
                    <div className="imgPefilTexto">
                        <img className="imgperfil" src={imgPadrao} alt="perfil" />
                        <h3>Robertinho monstrão</h3>
                        <p>administrador</p>
                    </div>
                    <div className="BotoesPerfil">
                        <button className="btPerfil"><h3>Alterar dados</h3></button>
                        <button className="btPerfil"><h3>Alterar senha</h3></button>
                    </div>
                </div>
                <div className="DireitoPerfil">
                    <br />
                    <div className="RowPerfilAdm">
                        <select className="selectPerfil">
                            <option>Filtre sua busca por...</option>
                            <option>Candidatos</option>
                            <option>Empresa</option>
                        </select>
                        <h3><Link to='/banidos'>Banidos</Link></h3>
                        <h3><Link to='/colaboradores'>Colaboradores</Link></h3>
                    </div>
                    {
                        Empresas.map((item) => {
                            return (
                                <div className="BoxPerfil">
                                    <div className="flexBoxPerfil">
                                        <img className="imgUsuario" src={imgPadrao} alt="usuario" />
                                        <div className="ColumnNomeEmail">
                                            <h2>{item.razaoSocial}</h2>
                                            <p>{item.nomeReponsavel}</p>
                                        </div>
                                    </div>
                                    <div className="ColumnPerfilBanir">
                                        <img className="Delete" src={imgDelete} alt="Delete" />
                                        <button className="btVerPerfil"><h4>Ver perfil</h4></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="peliculaPerfilAdm"></div>
            <div className="modalPerfilAdm">
                <h2>Editar seus dados pessoais</h2>
                <form>
                    <Input className="InputCadastro" name="email" label="Email" />
                    <div className="btEditarEstagioDiv">
                        <button className="btVaga"><h3>Editar</h3></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}