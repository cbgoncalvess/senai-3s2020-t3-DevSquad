import React from 'react';
import { Link } from 'react-router-dom';
import xBurguer from '../../assets/x.png';
import logops from '../../assets/logops.png';
import burguerMenu from '../../assets/menumobile.png';
import './style.css';

export default function Header() {   
    return (
        <header>
            <div className="header">
                <Link to="/home" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                    <img src={logops} className="logo" />
                </Link>
                <nav className="navbar">
                    <ul id="menu">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link className="botao" to="/login">Login</Link></li>
                        <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                    </ul>
                </nav>
                <img src={burguerMenu} className="navmobile none burguer" id="burguer" />
            </div>

            <div id="modalPrincipal" className="modalPrincipal none">
                <nav className="menumodal">
                    <img src={xBurguer} className="navmobile burguer dex" id="menumodal" />
                    <ul id="menu-hide" className="none">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link className="botao" to="/login">Login</Link></li>
                        <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}