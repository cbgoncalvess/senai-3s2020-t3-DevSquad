import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';

import imagemCadastroEmpresa from '../../assets/imgCadastroEmpresa.png';

import './style.css'

export default function CadastroEmpresa() {
    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <h1>Oba! Você chegou na página Cadastro Empresa</h1>

            <div className="box-form">
                <h1>Cadastre-se como nosso Candidato</h1>
                <p>Bem-vindo ao cadastro do candidato. Ficamos felizes de tê-lo na nossa plataforma</p>
                <div className="form">
                    <Input name="responsibleName" className="cadastre" label="Digite o nome do responsável:" type="text" required />
                    <Input name="cnpj" className="cadastre" label="Digite seu CNPJ:" type="text" required />
                    <Input name="email" className="cadastre" label="Digite seu e-mail:" type="text" required />
                    <Input name="companyName" className="cadastre" label="Digite a razão social:" type="text" required />
                    <Input name="companyMarket" className="cadastre" label="Digite o ramo da empresa:" type="text" required />
                    <Input name="phoneNumber" className="cadastre" label="Digite o telefone para contato:" type="text" required />
                    <Input name="password" className="cadastre" label="Digite sua senha:" type="password" required />
                    <Input name="password-confirm" className="cadastre" label="Confirme sua senha:" type="password" required />

                    <button type="button">Criar Conta</button>

                    <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>
                </div>

            </div>

            <div className="box-img">
                <img src={imagemCadastroEmpresa} alt="Pessoa acessando sua conta, com uma película transparente de cor azul."/>
            </div>
            <Footer />
        </body>
    );
}