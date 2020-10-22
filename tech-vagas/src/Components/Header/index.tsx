import React from 'react';
import { Link } from 'react-router-dom';

import xBurguer from '../../assets/x.png';
import logops from '../../assets/logops.png';
import burguerMenu from '../../assets/menumobile.png';

import './style.css';

export default function Header() {

    /*
        PESSOAL DO TYPESCRIPT, SE VIREM PARA RESOLVER. EU NÃO PEDI POR ISSO: :]
        const menumobile = document.getElementById("burguer");
        const menumodal = document.getElementById("menumodal");
        const modalPrincipal = document.getElementById("modalPrincipal");
        const menuhidden = document.getElementById("menu-hide");

        menumobile.onclick = function (){
          if(modalPrincipal.classList == "modalPrincipal none"){
            modalPrincipal.classList.remove("none");
            menuhidden.classList.remove("none");
            menumobile.classList.add("none");
          }
        };

        menumodal.onclick = function (){
          if(modalPrincipal.classList == "modalPrincipal"){
            modalPrincipal.classList.add("none");
          }
        }
    */
    
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