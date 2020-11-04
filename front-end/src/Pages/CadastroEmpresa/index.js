import React,{useEffect,useState}from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';
import BlueButton from '../../Components/BlueButton';
import Footer from '../../Components/Footer';

import imagemCadastroEmpresa from '../../assets/imgCadastroEmpresa.png';

import './style.css';

export default function CadastroEmpresa() {
    const [NomeResponsavel, SetNomeCompleto] = useState('');
    const [RazaoSocial, SetRg] = useState('');
    const [NomeFantasia, SetCPF] = useState('');
    const [CNPJ, SetTelefone] = useState('');
    const [EmailContato, SetLinkedin] = useState('');
    const [Telefone, SetCurso] = useState('');
    const [NumFuncionario, SetArea] = useState('');
    const [NumCNAE, SetEmail] = useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');
    const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    const [RespostaSeguranca, SetRespostaSeguranca] = useState('');

    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />

            <div className="registerCompany">
                
                <div className="box-form">
                    <div className="form-content">
                        <h1>Cadastre-se como Empresa</h1>
                        <p>Bem-vindo ao cadastro de empresa. Ficamos felizes de tê-la na nossa plataforma</p>
                        <div className="form">
                            <Input name="responsibleName" className="cadastre" label="Digite o nome do responsável:" type="text" placeholder="Barão de Mauá" required />
                            <Input name="cnpj" className="cadastre" label="Digite seu CNPJ:" type="text" placeholder="00.000.000/0001-00" required />
                            <Input name="email" className="cadastre" label="Digite seu e-mail:" type="text" placeholder="contato@company.com" required />
                            <Input name="companyName" className="cadastre" label="Digite a razão social:" type="text" placeholder="São Paulo Railway Company" required />
                            <Input name="companyMarket" className="cadastre" label="Digite o ramo da empresa:" type="text" placeholder="Transporte" required />
                            <Input name="phoneNumber" className="cadastre" label="Digite o telefone para contato:" type="text" placeholder="(11) 91234-5678" required />
                            <Input name="password" className="cadastre" label="Digite sua senha:" type="password" placeholder="••••••••" required />
                            <Input name="password-confirm" className="cadastre" label="Confirme sua senha:" type="password" placeholder="••••••••" required />
                            <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

                            <div className="form-button">
                                <BlueButton type="submit" name="Criar conta">Criar conta</BlueButton>
                            </div>
                        </div>
                    </div>
                    

                </div>

                <div className="box-img">
                    <img src={imagemCadastroEmpresa} alt="Pessoa acessando sua conta, com uma película transparente de cor azul."/>
                </div>
            </div>           
            <Footer />
        </body>
    );
}