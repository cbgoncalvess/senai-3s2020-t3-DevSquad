import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.webp';
import Refresh from '../../assets/images/refresh.webp';
import AccessMenu from '../../Components/AccessMenu';

export default function ListaBanidos() {
    const [Banidos, setBanidos] = useState([]);
    const [idUsuario, setUsuario] = useState([]);

    useEffect(() => {
        listarBanidos();
    }, []);

    const DesbanirUsuario = (idUsuario) => {
        fetch('http://localhost:5000/api/Administrador/Desbanir/' + idUsuario, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json())
            .then(dados => {
                alert(dados);
                listarBanidos();
            }).catch(err => console.error(err));
    }

    const listarBanidos = () => {
        fetch('http://localhost:5000/api/Administrador/ListarBanidos', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setBanidos(dados);
            })
            .catch(err => console.error(err));
    }

    return (
        <body className="corpo">
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="marginBanidos">
                <h1 className="tituloBanidos">Lista de Banidos</h1>

                <div className="filtroBanidos">
                    <h5>Filtrar por: </h5>
                    <select className="selectBanidos">
                        <option value="" disabled selected>Selecione</option>
                        <option value="Empresas">Empresas</option>
                        <option value="Candidatos">Candidatos</option>
                        <option value="Colaboradores">Colaboradores</option>
                    </select>
                </div>
                {
                    Banidos.map((item) => {
                        return (
                            <div key={item.idUsuario} className="banidoBox">
                                <div className="colunaMobile">
                                    <div className="banido">
                                        <img className="user" src={User} />
                                        <p>{item.email}</p>
                                        <h4>Marcelo Fontes</h4>
                                    </div>
                                    <div className="info">
                                        <p>ID:{item.idUsuario}</p>
                                        <p>E-mail: {item.email}</p>
                                    </div>
                                </div>
                                <div className="data">
                                    <div className="desbanir">
                                        <p>Desbanir</p>
                                        <img src={Refresh} onClick={() => DesbanirUsuario(item.idUsuario)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </body>
    )
}