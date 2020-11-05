import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';
import BlueButton from '../../Components/BlueButton';
import Footer from '../../Components/Footer';

import imagemCadastroCandidato from '../../assets/imgCadastroCandidato.png';

import './style.css';

export default function CadastroEmpresa() {
    
    const [NomeCompleto, SetNomeCompleto] = useState('');
    const [Rg, SetRg] = useState('');
    const [Email, SetEmail] = useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');
    const [CPF, SetCPF] = useState('');
    const [Telefone, SetTelefone] = useState('');
    //const [Curso, SetCurso] = useState('');
    //const [Area, SetArea] = useState('');
    //const [Linkedin, SetLinkedin] = useState('');
    //const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    //const [RespostaSeguranca, SetRespostaSeguranca] = useState('');
    //const [Cursos, SetCursos] = useState([]);
    //const [Areas, SetAreas] = useState([]);

    const history = useHistory();

    async function salvar(e) {

        e.preventDefault();

        const data = {
            NomeCompleto,
            Rg,
            CPF,
            Telefone,
            Email,
            Senha,
            ConfirmarSenha,
        };

        api.post('/Candidato', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // try{
        //     const response = await api.post('/Candidato', data)
        //     alert('A cobra tá fumando')

        //     history.push('/')
        // }catch(err){
        //     alert(err);
        // }

        // fetch('http://localhost:5000/api/Candidato', {
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // })
        //     .then(response => {
        //         if(response.status === 200){
        //               alert(response.mensage)
        //         }else{
        //             alert('Não foi possível, tente novamente')
        //         }
        //     })
        //     .catch(err => console.error(err));
    }

    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />

            <div className="registerApplicant">

                <div className="box-form">
                    <div className="form-content">
                        <h1>Cadastre-se como Candidato</h1>
                        <p>Bem-vindo ao cadastro do candidato. Ficamos felizes de tê-lo na nossa plataforma</p>
                        <form className="form" onSubmit={salvar}>
                            <Input name="fullName" className="cadastre" label="Digite seu nome completo:" type="text" placeholder="Maria dos Santos" required onChange={e => SetNomeCompleto(e.target.value)} />
                            <Input name="rg" className="cadastre" label="Digite seu RG:" type="text" placeholder="00.000.000-0" required onChange={e => SetRg(e.target.value)} />
                            <Input name="cpf" className="cadastre" label="Digite seu CPF:" type="text" placeholder="000.000.000-00" required onChange={e => SetCPF(e.target.value)}/>
                            <Input name="email" className="cadastre" label="Digite seu e-mail:" type="text" placeholder="exemplo@exemplo.com" required onChange={e => SetEmail(e.target.value)}/>
                            <Input name="password" className="cadastre" label="Digite sua senha:" type="password" placeholder="••••••••" required onChange={e => SetSenha(e.target.value)}/>
                            <Input name="password-confirm" className="cadastre" label="Confirme sua senha:" type="password" placeholder="••••••••" required onChange={e => SetConfirmarSenha(e.target.value)}/>
                            <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>
                            
                            <div className="form-button">
                                <button type="submit">Criar conta</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="box-img">
                    <img src={imagemCadastroCandidato} alt="Pessoa acessando sua conta" className="img-cadastro-candidato"/>
                </div>

            </div>
            <Footer />
        </body>
    );
}