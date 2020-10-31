import React from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';

import imagemCadastroCandidato from '../../assets/imgCadastroCandidato.png';

import './style.css';

export default function CadastroEmpresa() {

    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <h1>Oba! Você chegou na página Cadastro Candidato</h1>
            
            <div className="box-form">
                <h1>Cadastre-se como nosso Candidato</h1>
                <p>Bem-vindo ao cadastro do candidato. Ficamos felizes de tê-lo na nossa plataforma</p>
                <div className="form">
                    <Input name="fullName" label="Digite seu nome completo:" type="text" required />
                    <Input name="rg" label="Digite seu RG:" type="text" required />
                    <Input name="cpf" label="Digite seu CPF:" type="text" required />
                    <Input name="ra" label="Digite seu R.A:" type="text" required />
                    <Input name="email" label="Digite seu e-mail:" type="text" required />
                    <Input name="password" label="Digite sua senha:" type="password" required />
                    <Input name="password-confirm" label="Confirme sua senha:" type="password" required />

                    <button type="button">Criar Conta</button>
                    <h1>Resultado</h1>

                    <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>
                </div>

            </div>
            <div className="box-img">
                <img src={imagemCadastroCandidato} alt="Pessoa acessando sua conta"/>
            </div>
            <Footer />
        </body>
    );
}