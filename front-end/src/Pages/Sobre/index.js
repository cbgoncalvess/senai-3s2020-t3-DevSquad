import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import AccessMenu from '../../Components/AccessMenu';

import LogoSenai from '../../assets/images/logo_senai.png';
import LogoTime from '../../assets/images/logo_devsquad.png';

import Alexia from '../../assets/images/linkedin_alexia.png';
import Andre from '../../assets/images/linkedin_andre.png';
import Carlos from '../../assets/images/linkedin_carlos.png';
import Douglas from '../../assets/images/linkedin_douglas.png';
import Marcos from '../../assets/images/linkedin_marcos.png';

import './style.css';
// import AccessBar from '../../Components/AccessBar';

export default function Sobre() {
    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="sobrePage">
                <div className="sobreBox">
                    <h1 className="sobre">Sobre</h1>

                    <br/>

                    <div className="textoBox">
                        <p>O SENAI TechVagas tem como foco facilitar o ingresso dos estudantes no mercado de trabalho e permitir as empresas a suprir suas demandas internas e externas.</p>
                        <br/>
                        <p>Em parceiria com o SENAI, a DevSquad é uma empresa composta por alunos do próprio com o objetivo de prestar serviços de tecnologia da informação para promover soluções mais eficientes para empresas.</p>
                    </div>                

                    <div className="imgBox">
                        <img classname="logos" src={LogoTime} alt="Logo do time DevSquad"/>
                        <img classname="logos" src={LogoSenai} alt="Logo da escola SENAI"/>
                    </div>

                    <h2 className="sobre">Conheça os desenvolvedores que produziram essa aplicação!</h2>
                    
                    <br/>

                    <div className ="devsBox">
                        <div id="item1" className="dev">
                            <img src={Alexia} alt="Linkedin da desenvolvedora Alexia"/>
                            <h3>Aléxia Melhado</h3>
                        </div>
                        <div id="item2" className="dev">
                            <img src={Andre} alt="Linkedin do desenvolvedor Andre"/>
                            <h3>Andre Akira</h3>
                        </div>
                        <div id="item3" className="dev">
                            <img src={Carlos} alt="Linkedin do desenvolvedor Carlos"/>
                            <h3>Carlos Eduardo</h3>
                        </div>
                        <div id="item4" className="dev">
                            <img src={Douglas} alt="Linkedin do desenvolvedor Douglas"/>
                            <h3>Douglas Mantovani</h3>
                        </div>
                        <div id="item5" className="dev">
                            <img src={Marcos} alt="Linkedin do desenvolvedor Marcos"/>
                            <h3>Marcos Tomás</h3>
                        </div>          
                    </div>

                </div>
            </div>
            <Footer />
        </body>
    );
}