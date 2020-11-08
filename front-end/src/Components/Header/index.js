import React, { ButtonHTMLAttributes } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt } from '../../services/token'
import MenuMobile from '../imgsvg/menu';

import xBurguer from '../../assets/x.png';
import logops from '../../assets/logops.png';
import burguerMenu from '../../assets/menumobile.png';

import './style.css';

const meuEstilo = {
    backgroundColor: '#557799'
}

export default function Header() {

    let history = useHistory();

    const BurguerMenu = () => {
        let menumobile = document.getElementById("burguer");
        let modalPrincipal = document.getElementById("modalPrincipal");
        let menuhidden = document.getElementById("menu-hide");

        if (modalPrincipal.classList == "modalPrincipal none") {
            modalPrincipal.classList.remove("none");
            menuhidden.classList.remove("none");
            menumobile.classList.add("none");
            return false
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    const FecharMenu = () => {
        let modalPrincipal = document.getElementById("modalPrincipal");
        let menuhidden = document.getElementById("menu-hide");

        if (modalPrincipal.classList == "modalPrincipal") {
            modalPrincipal.classList.add("none");
            menuhidden.classList.add("none");
            return false;
        }
    }

    const token = localStorage.getItem('token');

    //se o valor de token estiver indefinido ou nulo, chama o menu deslogado, se não chama o menu para quando o usuário estiver logado
    if (token === null) {
        // Deslogado
        return (
            <header>
                <div className="header">
                    <Link to="/" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                        <img src={logops} className="logo" alt="" />
                    </Link>
                    <nav className="navbar">
                        <ul id="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link className="botao" to="/login">Login</Link></li>
                            <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                    <MenuMobile className="navmobile none burguer" id="burguer" alt="Menu mobile - Clique para abrir" onClick={event => {
                        event.preventDefault();
                        BurguerMenu();
                    }} />
                    {/* <img src={burguerMenu} className="navmobile none burguer" id="burguer" alt="" onClick={event => {
                    event.preventDefault();
                    BurguerMenu();
                }}
                /> */}
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="Menu mobile" onClick={event => {
                            event.preventDefault();
                            FecharMenu();
                        }}
                        />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link className="botao" to="/login">Login</Link></li>
                            <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="" />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link className="botao" to="/login">Login</Link></li>
                            <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    } else if (parseJwt().Role === "1") {
        return (
            <header>
                <div className="header">
                    <Link to="/" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                        <img src={logops} className="logo" alt="" />
                    </Link>
                    <nav className="navbar">
                        <ul id="menu">
                            <li><Link to="/">Perfil</Link></li>
                            <li><Link to="/Estagio">Estagio</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                    <MenuMobile className="navmobile none burguer" id="burguer" alt="Menu mobile - Clique para abrir" onClick={event => {
                        event.preventDefault();
                        BurguerMenu();
                    }} />
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="Menu mobile" onClick={event => {
                            event.preventDefault();
                            FecharMenu();
                        }}
                        />
                        <ul id="menu-hide" className="none">
                        <li><Link to="/">Perfil</Link></li>
                            <li><Link to="/Estagio">Estagio</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="" />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Perfil</Link></li>
                            <li><Link to="/Estagio">Estagio</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    } else if (parseJwt().Role === "2") {
        return (
            <header>
                <div className="header">
                    <Link to="/" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                        <img src={logops} className="logo" alt="" />
                    </Link>
                    <nav className="navbar">
                        <ul id="menu">
                            <li><Link to="/perfilCandidato">Perfil</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/">Ver inscrições</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                    <MenuMobile className="navmobile none burguer" id="burguer" alt="Menu mobile - Clique para abrir" onClick={event => {
                        event.preventDefault();
                        BurguerMenu();
                    }} />
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="Menu mobile" onClick={event => {
                            event.preventDefault();
                            FecharMenu();
                        }}
                        />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Principal</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/">Ver inscrições</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="" />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Principal</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/">Ver inscrições</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

    else if (parseJwt().Role === "3") {
        return (
            <header>
                <div className="header">
                    <Link to="/" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                        <img src={logops} className="logo" alt="" />
                    </Link>
                    <nav className="navbar">
                        <ul id="menu">
                            <li><Link to="/">Sobre</Link></li>
                            <li><Link to="/CadastrarVaga">Divulgar vaga</Link></li>
                            <li><Link to="/VagasPublicadas">Minhas vagas</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                    <MenuMobile className="navmobile none burguer" id="burguer" alt="Menu mobile - Clique para abrir" onClick={event => {
                        event.preventDefault();
                        BurguerMenu();
                    }} />
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="Menu mobile" onClick={event => {
                            event.preventDefault();
                            FecharMenu();
                        }}
                        />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Sobre</Link></li>
                            <li><Link to="/CadastrarVaga">Divulgar vaga</Link></li>
                            <li><Link to="/VagasPublicadas">Minhas vagas</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>

                <div id="modalPrincipal" className="modalPrincipal none">
                    <nav className="menumodal">
                        <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="" />
                        <ul id="menu-hide" className="none">
                            <li><Link to="/">Sobre</Link></li>
                            <li><Link to="/CadastrarVaga">Divulgar vaga</Link></li>
                            <li><Link to="/VagasPublicadas">Minhas vagas</Link></li>
                            <li><Link className="botao1" onClick={logout}>Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}