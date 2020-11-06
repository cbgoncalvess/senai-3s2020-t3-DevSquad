import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
    const [CPF, SetCPF] = useState('');
    const [Linkedin, SetLinkedin] = useState('');
    const [Telefone, SetTelefone] = useState('');
    const [Cursos, SetCursos] = useState([]);
    const [Curso, SetCurso] = useState('');
    const [Email, SetEmail] = useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');
    //const [Telefone, SetTelefone] = useState('');
    //const [Curso, SetCurso] = useState('');
    //const [Area, SetArea] = useState('');
    //const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    //const [RespostaSeguranca, SetRespostaSeguranca] = useState('');
    //const [Areas, SetAreas] = useState([]);

    const history = useHistory();

    const emailRegex = RegExp('/^\S+@\S+\.\S+$/');

    useEffect(() => { 
        api.get('/Curso',)
        .then(response => {
            SetCursos(response.data);
        })
    }, []);

    function salvar(e) {

        e.preventDefault();
        
        const data = {
            NomeCompleto:NomeCompleto,
            Rg:Rg,
            CPF:CPF,
            Email:Email,
            Senha:Senha,
            ConfirmarSenha:ConfirmarSenha,
        };
        console.log(emailRegex.test(Email));

        if(Senha !== ConfirmarSenha || Senha === '' || ConfirmarSenha === ''){
            alert('As senhas não coincidem, ou não foram preenchidas');
        }
        // if(emailRegex.test(Email)){
        //     alert('Preencha um e-mail válido');
        //}
        else{
            api.post('/Candidato', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        /*

            Não implementado por causa da api
          <div className="select">
              <label>Área</label>
              <select className="div-select" onChange={e => SetArea(e.target.value)} value={Area}>
                  <option value="0">Selecione uma área de atuação</option>
                  {
                      ListAreas.map((item) => {
                          return <option value={item.idArea}>{item.nomeArea}</option>
                      })
                  }
              </select>
          </div>
          
        */
    }

    return (
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
                            <Input 
                                name="fullName"
                                className="cadastre"
                                label="Digite seu nome completo:"
                                type="text"
                                placeholder="Maria dos Santos"
                                required
                                requiredError="O seu nome deve ser preenchido"
                                onChange={e => SetNomeCompleto(e.target.value)} 
                            />

                            <Input 
                                name="rg"
                                className="cadastre"
                                label="Digite seu RG:"
                                type="text"
                                placeholder="00.000.000-0"
                                required 
                                onChange={e => SetRg(e.target.value)}
                            />

                            <Input 
                                name="cpf"
                                className="cadastre"
                                label="Digite seu CPF:"
                                type="text"
                                placeholder="000.000.000-00"
                                required
                                onChange={e => SetCPF(e.target.value)}
                            />
                            
                            <Input
                                name="telefone"
                                className="cadastre"
                                label="Digite seu Telefone:"
                                type="text"
                                placeholder="(11) 91234-5678"
                                required
                                onChange={e => SetTelefone(e.target.value)}
                            />

                            <Input
                                name="linkedin"
                                className="cadastre"
                                label="Digite seu LinkeIn:"
                                type="text"
                                placeholder="linkedin.com/in/maria-dos-santos"
                                required
                                onChange={e => SetLinkedin(e.target.value)}
                            />
                            
                            <div className="select">
                                <label>Curso</label> <br />
                                <select className="cadastre" onChange={e => SetCurso(e.target.value)} value={Curso}>
                                    <option value="0">Selecione seu curso</option>
                                    {
                                        Cursos.map((item) => {
                                            return <option value={item.idCurso}>{item.nomeCurso}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <Input
                                name="email"
                                className="cadastre"
                                label="Digite seu e-mail:"
                                type="text"
                                placeholder="exemplo@exemplo.com"
                                required
                                onChange={e => {SetEmail(e.target.value)}}
                            />
                            
                            <Input
                                name="password"
                                className="cadastre"
                                label="Digite sua senha:"
                                type="password"
                                placeholder="••••••••"
                                required
                                onChange={e => SetSenha(e.target.value)}
                            />
                            
                            <Input
                                name="password-confirm"
                                className="cadastre"
                                label="Confirme sua senha:"
                                type="password"
                                placeholder="••••••••"
                                required
                                onChange={e => SetConfirmarSenha(e.target.value)}
                            />
                            <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

                            <div className="form-button">
                                <BlueButton type="submit" name="Criar conta">Criar conta</BlueButton>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="box-img">
                    <img src={imagemCadastroCandidato} alt="Pessoa acessando sua conta" className="img-cadastro-candidato" />
                </div>

            </div>
            <Footer />
        </body>
    );
}