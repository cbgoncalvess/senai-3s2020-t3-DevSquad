import React from 'react';
import {Link} from 'react-router-dom';

// components 
import Footer from '../../Components/Footer';

// styles 
import './style.css';

// imagens
import imglogin from '../../assets/ImagemimgLogin.png';
import imguser from '../../assets/user 1.png';

export default function Login() {
    return (
        <div className="Login">
            <main className="central-login">
                <section className="sessaoLogar">
                    <div>

                        <button>sou uma empresa</button>

                        <div className="division-logar">
                            <div className="division-logar-title">
                                <h2>login</h2>
                                <p className="sub-titulo">Bem-vindo ao SENAI | TechVagas</p>
                            </div>

                            <div>
                                <form className="form-logar">
                                    
                                    <div className="divisionCampo">
                                        <label>Usuário ou E-mail:</label>
                                        <input type="text" name="email" className="inputUser"/>
                                    </div>

                                    <div className="divisionCampo divisionPassword">
                                        <label>Senha:</label>
                                        <input type="password" name="password" placeholder="******" className="inputPassword"/>
                                        <Link className="recuperarPassword" to="/">Recuperar senha</Link>
                                    </div>
                                </form>
                            </div>

                            <div className="divisionBtn">
                                <button className="btnNew">criar conta</button>
                                <button className="btnLogar">entrar</button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <img src={imglogin} alt="Imagem de computadores" />
            </main>
        </div>
    );
}