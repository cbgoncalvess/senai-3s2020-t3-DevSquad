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
            <div className="registerApplicant">

                <div className="box-form">
                    <h1>Cadastre-se como nosso Candidato</h1>
                    <p>Bem-vindo ao cadastro do candidato. Ficamos felizes de tê-lo na nossa plataforma</p>
                    <div className="form">
                        <Input name="fullName" className="cadastre" label="Digite seu nome completo:" type="text" placeholder="Maria dos Santos" required />
                        <Input name="rg" className="cadastre" label="Digite seu RG:" type="text" placeholder="00.000.000-0" required />
                        <Input name="cpf" className="cadastre" label="Digite seu CPF:" type="text" placeholder="000.000.000-00" required />
                        <Input name="email" className="cadastre" label="Digite seu e-mail:" type="text" placeholder="exemplo@exemplo.com" required />
                        <Input name="password" className="cadastre" label="Digite sua senha:" type="password" placeholder="••••••••" required />
                        <Input name="password-confirm" className="cadastre" label="Confirme sua senha:" type="password" placeholder="••••••••" required />

                        <button type="button">Criar Conta</button>

                        <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>
                    </div>

                </div>

                <div className="box-img">
                    <img src={imagemCadastroCandidato} alt="Pessoa acessando sua conta"/>
                </div>
            </div>
            <Footer />
        </body>
    );
}