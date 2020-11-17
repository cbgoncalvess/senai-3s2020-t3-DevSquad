import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';
import Refresh from '../../assets/images/refresh.png';
import AccessMenu from '../../Components/AccessMenu';

export default function ListaBanidos() {
    const [Banidos, setBanidos] = useState([]);
    const [idUsuario, setUsuario] = useState([]);

    useEffect(() => {
        listarBanidos();
    }, []);

    const DesbanirUsuario = () => {
        const form = {
            idUsuario:idUsuario
        };
        fetch('http://localhost:5000/api/Administrador/Desbanir/'+idUsuario, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function(respose){
                if(respose.status!==200){
                    alert("Não foi possivel desbanir este usuario");
                }else{
                    alert("O usuario ja pode voltar a interagir com a plataforma");
                    listarBanidos();
                }
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
                                    <img src={Refresh} onClick={event => {
                                        event.preventDefault();
                                        setUsuario(item.idUsuario);
                                        DesbanirUsuario();
                                    }}/>
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