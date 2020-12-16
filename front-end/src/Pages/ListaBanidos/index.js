import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.jpg';
import Refresh from '../../assets/images/refresh.jpg';
import AccessMenu from '../../Components/AccessMenu';

export default function ListaBanidos() {
    const [Banidos, setBanidos] = useState([]);

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
                {
                    Banidos.map((item) => {
                        return (
                            <div key={item.idUsuario} className="banidoBox">
                                <div className="colunaMobile">
                                    <div className="banido">
                                        <img className="user" src={'http://localhost:5000/imgPerfil/'+item.caminhoImagem} alt="Imagem de perfil do usuario" />
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
                                        <img src={Refresh} onClick={() => DesbanirUsuario(item.idUsuario)} alt="Botão que retorna o aceeso ao usuario banido" />
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