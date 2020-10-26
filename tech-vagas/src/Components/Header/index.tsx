import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import xBurguer from '../../assets/x.png';
import logops from '../../assets/logops.png';
import burguerMenu from '../../assets/menumobile.png';

import './style.css';

const meuEstilo = {
    backgroundColor: '#557799'
}

export default function Header() {

    /* 
        CÓDIGO ANTIGO
    
        const menumobile = document.getElementById("burguer");
        const menumodal = document.getElementById("menumodal");
        const modalPrincipal = document.getElementById("modalPrincipal");
        const menuhidden = document.getElementById("menu-hide");

        menumobile.onclick = function () { 
            if(modalPrincipal.classList == "modalPrincipal none"){
                modalPrincipal.classList.remove("none");
                menuhidden.classList.remove("none");
                menumobile.classList.add("none");
            }
        }

        menumodal.onclick = function () {
            if(modalPrincipal.classList == "modalPrincipal") {  
                modalPrincipal.classList.add("none");
            }
        }
    */

    // const btnMobile:HTMLHeadingElement = document.getElementById("burguer");

    // event.target.classList.add('class3'); // To ADD
    // event.target.classList.remove('class1'); // To Remove


    // menumobile.onclick = function () { 
            // if(modalPrincipal?.classList == "modalPrincipal none"){
            //     modalPrincipal?.classList.remove("none");
            //     menuhidden?.classList.remove("none");
            //     menumobile?.classList.add("none");
            // }
        // }

    // menumobile?.classList.add("none");
    // menumodal?.classList.remove("none");

    



    // let modalPrincipal:any = document.getElementById("modalPrincipal");
    // let menuhidden:any = document.getElementById("menu-hide");
    // const menumodal = document.getElementById("menumodal");

    // if(modalPrincipal.classList == "modalPrincipal none"){
            //     modalPrincipal.classList.remove("none");
            //     menuhidden.classList.remove("none");
            //     menumobile.classList.add("none");
            // }

    
    const BurguerMenu = () => {
        let menumobile:any = document.getElementById("burguer");
        let modalPrincipal:any = document.getElementById("modalPrincipal");
        let menuhidden:any = document.getElementById("menu-hide");

        if(modalPrincipal.classList == "modalPrincipal none")
        {
            modalPrincipal.classList.remove("none");
            menuhidden.classList.remove("none");
            menumobile.classList.add("none");
            
            return false
        }
    }

    const FecharMenu = () => {
        let modalPrincipal:any = document.getElementById("modalPrincipal");
        let menuhidden:any = document.getElementById("menu-hide");
        
        if(modalPrincipal.classList == "modalPrincipal")
        {
            modalPrincipal.classList.add("none");
            menuhidden.classList.add("none");
            return false;
        }
    }

    return (
        <header>
            <div className="header">
                <Link to="/home" title="Logomarca da empresa TechVagas. Home SENAI TechVagas">
                    <img src={logops} className="logo" alt=""/>
                </Link>
                <nav className="navbar">
                    <ul id="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link className="botao" to="/login">Login</Link></li>
                        <li><Link className="botao1" to="/cadastro">Cadastro</Link></li>
                    </ul>
                </nav>
                <img src={burguerMenu} className="navmobile none burguer" /*style={meuEstilo}*/ id="burguer" alt="" onClick={event => {
                    event.preventDefault(); 
                    BurguerMenu();
                }}
                />
            </div>

            <div id="modalPrincipal" className="modalPrincipal none">
                <nav className="menumodal">
                    <img src={xBurguer} className="navmobile burguer dex" id="menumodal" alt="" onClick={event => {
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
}