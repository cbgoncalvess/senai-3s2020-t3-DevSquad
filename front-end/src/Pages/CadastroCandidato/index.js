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
    const [Curso, SetCurso] = useState(0);
    const [Email, SetEmail] = useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');
<<<<<<< HEAD
    //const [Telefone, SetTelefone] = useState('');
    //const [Curso, SetCurso] = useState('');
=======
<<<<<<< HEAD
    const [Area, SetArea] = useState('');
    //const [Areas, SetAreas] = useState([]);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const [Area, SetArea] = useState('');
    //const [Areas, SetAreas] = useState([]);
=======
<<<<<<< HEAD
=======
    //const [Telefone, SetTelefone] = useState('');
    //const [Curso, SetCurso] = useState('');
>>>>>>> f06b0d22fe3f6bdac53eed0ff2270f3729c0e382
>>>>>>> d75875f4606b4fcbfdcab05a99426af22c83ac23
>>>>>>> 1ff94155811e23540b69588c33507eb45f76843a
>>>>>>> f93eae7209b921875cb1e3b508e37bd99a5b64ad
    //const [Area, SetArea] = useState('');
>>>>>>> 8f3d49cb032971f61133d0331fa9ba5039621602
>>>>>>> 922b7db9be4e61dfc4bf824f731240164b9eb6fc
    //const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    //const [RespostaSeguranca, SetRespostaSeguranca] = useState('');
    
    const history = useHistory();
    
    //const emailRegex = RegExp('/^\S+@\S+\.\S+$/');
    //console.log(emailRegex.test(Email));

    useEffect(() => {
        api.get('/Curso',)
            .then(response => {
                SetCursos(response.data);
            })
    }, []);

    function salvar(e) {

        e.preventDefault();

        const data = {
            NomeCompleto: NomeCompleto,
            Rg: Rg,
            cpf: CPF,
            Telefone: Telefone,
            LinkLinkedinCandidato: Linkedin,
            idCurso: Curso,
            Area: Area,
            Email: Email,
            Senha: Senha
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
            NomeCompleto:NomeCompleto,
            Rg:Rg,
            CPF:CPF,
            Email:Email,
            Senha:Senha,
            ConfirmarSenha:ConfirmarSenha,
>>>>>>> f06b0d22fe3f6bdac53eed0ff2270f3729c0e382
>>>>>>> 8f3d49cb032971f61133d0331fa9ba5039621602
>>>>>>> d75875f4606b4fcbfdcab05a99426af22c83ac23
>>>>>>> 1ff94155811e23540b69588c33507eb45f76843a
>>>>>>> 922b7db9be4e61dfc4bf824f731240164b9eb6fc
>>>>>>> f93eae7209b921875cb1e3b508e37bd99a5b64ad
        };

        if (Senha !== ConfirmarSenha || Senha === '' || ConfirmarSenha === '') {
            alert('As senhas não coincidem, ou não foram preenchidas');
        }else{
            api.post('/Candidato', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            history.push('/');
        }
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
                        <p>Bem-vindo ao cadastro do candidato. <br/>Ficamos felizes de tê-lo na nossa plataforma</p>
                        <form className="form" onSubmit={salvar}>
                            <Input
                                name="fullName"
                                className="cadastre"
                                label="Nome completo:"
                                type="text"
                                placeholder="Maria dos Santos"
                                required
                                requiredError="O seu nome deve ser preenchido"
                                onChange={e => SetNomeCompleto(e.target.value)}
                            />

                            <Input
                                name="rg"
                                className="cadastre"
                                label="RG:"
                                type="text"
                                placeholder="00.000.000-0"
                                required
                                onChange={e => SetRg(e.target.value)}
                            />

                            <Input
                                name="cpf"
                                className="cadastre"
                                label="CPF:"
                                type="text"
                                placeholder="000.000.000-00"
                                required
                                onChange={e => SetCPF(e.target.value)}
                            />

                            <Input
                                name="telefone"
                                className="cadastre"
                                label="Telefone:"
                                type="text"
                                placeholder="(11) 91234-5678"
                                required
                                onChange={e => SetTelefone(e.target.value)}
                            />

                            <Input
                                name="linkedin"
                                className="cadastre"
                                label="LinkedIn:"
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
                                            console.log(item.idCurso, item.nomeCurso)
                                            return (
                                                <option value={item.idCurso}>{item.nomeCurso}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>

                            <div className="select">
                                <label>Área</label>
                                <select className="cadastre" onChange={e => SetArea(e.target.value)} value={Area}>
                                    <option value="0">Selecione sua área</option>
                                    <option value="front-end">Desenvolvedor Front-end</option>
                                    <option value="back-end">Desenvolvedor Back-end</option>
                                    <option value="jogos">Desenvolvedor de Jogos</option>
                                    <option value="redes">Redes de Computadores</option>
                                    <option value="ciencia-dados">Cientista de Dados</option>
                                    <option value="ux-designer">UX Designer</option>
                                    <option value="ui-designer">UI Designer</option>
                                </select>
                            </div>

                            <Input
                                name="email"
                                className="cadastre"
                                label="E-mail:"
                                type="text"
                                placeholder="exemplo@exemplo.com"
                                required
                                onChange={e => { SetEmail(e.target.value) }}
                            />

                            <Input
                                name="password"
                                className="cadastre"
                                label="Senha:"
                                type="password"
                                placeholder="Digite sua senha"
                                required
                                onChange={e => SetSenha(e.target.value)}
                            />

                            <Input
                                name="password-confirm"
                                className="cadastre"
                                label="Senha:"
                                type="password"
                                placeholder="Confirme a senha"
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