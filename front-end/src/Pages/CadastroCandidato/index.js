import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Footer from '../../Components/Footer';

export default function CadastroEmpresa() {
    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <h1>Oba! Você chegou na página Cadastro Candidato</h1>
            
            <div className="box">
                <h1>Cadastre-se como nosso Candidato</h1>
                <p>Bem-vindo ao cadastro do candidato, ficamos felizes de tê-lo na nossa plataforma</p>
                <div className="form">

                </div>

            </div>
            <Footer />
        </body>
    );
}