import React, { useEffect, useState } from  'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import api from '../../services/api';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';
import Input from '../../Components/Input';
import AccessBar from '../../Components/AccessBar';
import BlackButton from '../../Components/BlackButton';
import AccessMenu from '../../Components/AccessMenu';



export default function CadastrarColaborador() {

    const [Colaboradores, setColaboradores] = useState([]);

    const [Email,SetEmail]=useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');

    const history = useHistory();

    function salvar(e) {
        e.preventDefault();

        const data = {
            Email: Email,
            Senha: Senha
        };

        if (Senha !== ConfirmarSenha || Senha === '' || ConfirmarSenha === '') {
            alert('As senhas não coincidem, ou não foram preenchidas.');
        }
        else{
            api.post('/Usuario/Colaborador', data)
            .then(function (response){
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            alert("cadastro efetuado com sucesso")
            history.push('/');
        }
    }

    useEffect(() => {
        listarColaboradores();
    }, []);

    const listarColaboradores = () => {
        fetch('http://localhost:5000/api/Usuario/Colaboradores', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                setColaboradores(dados);
            })
            .catch(err => console.error(err));
    }
    
    return (
        <body className="corpo">
            <AccessBar />
            <Header />
            <AccessMenu />
                <div className="margin">
                    <div className="perfis">
                        <h1 className="colaboradores">Colaboradores:</h1>
                        {
                            Colaboradores.map((item) => {
                                return (
                                    <div className="perfilBox">
                                        <div className="horizontal">
                                            <div className="perfil">
                                                <img className="user" src={User}/>
                                                <h4>Colaborador</h4>
                                            </div>
                                            <div className="infos">
                                                <p>ID: {item.idUsuario}</p>
                                                <p>E-mail: {item.email}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="ban">
                                            <div className="banir">
                                                <p>Banir</p>
                                                <img src={Delete}/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })
                            
                        }
                        

                    </div>
                    <hr className="barraVertical"/>
                    <div className="cadastrarBox">
                        
                        <div className="tituloCadastro">
                            <h1>Adicionar novo Colaborador?</h1>
                            <p>Insira os dados do novo colaborador(a), e ela(a) está cadastrado(a).</p>
                        </div>
                        <div className="camposCadastro">
                            <Input 
                            name="email" 
                            label="*E-mail" 
                            type="text" 
                            placeholder="exemplo@exemplo.com"
                            required 
                            onChange={e => SetEmail(e.target.value)} 
                            />

                            <Input 
                            name="senha" 
                            label="*Senha" 
                            type="password" 
                            placeholder="*********" 
                            required
                            onChange={e => SetSenha(e.target.value)}
                            />

                            <Input name="confirmarSenha" 
                            label="*Confirmar Senha" 
                            type="password" 
                            placeholder="*********" 
                            required
                            onChange={e => SetConfirmarSenha(e.target.value)}
                            />
                        </div>
                        <div className="botaoCadastrar">
                            <BlackButton type="submit" name="Cadastrar" onClick={salvar}>Cadastrar</BlackButton>
                        </div>
                    </div>
                </div>
            <Footer />
        </body>
    );
}