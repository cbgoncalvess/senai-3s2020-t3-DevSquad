import React, { useState, useEffect } from 'react';

import AccessBar from '../../Components/AccessBar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';
import Refresh from '../../assets/images/refresh.png';

export default function ListaBanidos () {
    const [banidos, setBanidos] = useState([]);

    useEffect(() => {
        listarBanidos();
        //listarTipoUsuario();
    }, []);

    const listarBanidos = () => {
        fetch('http://localhost:5000/api/Usuario/Banidos', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                setBanidos(dados);
            })
            .catch(err => console.error(err));
    }

    //const listarTipoUsuario = () => {
        //fetch('http://localhost:5000/api/TipoUsuario/id', {
            //method: 'GET',
        //})
            //.then(response => response.json())
            //.then(dados => {
                //setTipoUsuario(dados);
            //})
            //.catch(err => console.error(err));
    //}
    return (
        <body>
            <AccessBar />
            <Header />
            <div className="marginBanidos">
                <h1 className="tituloBanidos">Lista de Banidos</h1>

                <div className="filtroBanidos">
                    <h5>Filtrar por: </h5>    
                    <select className="selectBanidos">
                        <option value="" disabled selected>Selecione</option>
                        <option value="Empresas">Empresas</option>
                        <option value="Vagas">Vagas</option>
                        <option value="Administradores">Administradores</option>
                        <option value="Colaboradores">Colaboradores</option>
                    </select>
                </div>
                {banidos.map((item) => {
                    return (
                        <div key={item.idUsuario} className="banidoBox">
                            <div className="colunaMobile">
                                <div className="banido">
                                    <img className="user" src={User}/>
                                    <p>{item.nomeTipoUsuario}</p>
                                    <h4>Marcelo Fontes</h4>
                                </div>
                                <div className="info">
                                    <p>ID:{item.idUsuario}</p>
                                    <p>E-mail: {item.email}</p>
                                </div>
                            </div>
                            <div className="data">
                                <p>Banido em: 25/08/20</p>
                                <div className="desbanir">
                                    <p>Desbanir</p>
                                    <img src={Refresh}/>
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