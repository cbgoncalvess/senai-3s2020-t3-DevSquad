import React from  'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';

export default function CadastrarColaborador() {
    return (
        <body>
            <Header />
                <div className="margin">
                    <h1 className="colaboradores">Colaboradores:</h1>
                    <div className="perfilBox">
                        <div className="perfil">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="infos">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
                        </div>
                        <div className="banir">
                            <p>Banir</p>
                            <img src={Delete}/>
                        </div>
                    </div>

                    <div className="perfilBox">
                        <div className="perfil">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="infos">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
                        </div>
                        <div className="banir">
                            <p>Banir</p>
                            <img src={Delete}/>
                        </div>
                    </div>

                    <div className="perfilBox">
                        <div className="perfil">
                            <img className="user" src={User}/>
                            <p>Colaborador</p>
                            <h4>Marcelo Fontes</h4>
                        </div>
                        <div className="infos">
                            <p>ID:000000000000</p>
                            <p>E-mail: colaboradormarcelo@email.com</p>
                        </div>
                        <div className="banir">
                            <p>Banir</p>
                            <img src={Delete}/>
                        </div>
                    </div>
                </div>
            <Footer />
        </body>
    );
}