import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';
import Refresh from '../../assets/images/refresh.png';

export default function ListaBanidos () {
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
                <div className="banidoBox">
                    <div className="colunaMobile">
                        <div className="banido">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="info">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
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

                <div className="banidoBox">
                    <div className="colunaMobile">
                        <div className="banido">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="info">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
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

                <div className="banidoBox">
                    <div className="colunaMobile">
                        <div className="banido">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="info">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
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
            </div>


            <Footer />
        </body>
    )
}