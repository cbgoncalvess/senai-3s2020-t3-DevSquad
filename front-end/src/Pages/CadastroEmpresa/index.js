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
            <h1>Oba! Você chegou na página Cadastro Empresa</h1>
            <Footer />
        </body>
    );
}