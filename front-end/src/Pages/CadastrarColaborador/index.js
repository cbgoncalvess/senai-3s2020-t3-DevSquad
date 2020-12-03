import React, { useEffect, useState } from  'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import api from '../../services/api';

import './style.css';

import User from '../../assets/images/user.webp';
import Delete from '../../assets/images/cancel.webp';
import Input from '../../Components/Input';
import AccessBar from '../../Components/AccessBar';
import BlackButton from '../../Components/BlackButton';
import AccessMenu from '../../Components/AccessMenu';

export default function CadastrarColaborador() {
    const [Colaboradores, setColaboradores] = useState([]);
    const [Email,SetEmail]=useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');


    useEffect(() => {
        listarColaboradores();
    }, []);

    function salvar() {
        const data = {
            Email: Email,
            Senha: Senha,
            perguntaSeguranca:"Em que ano o senai foi fundado",
            respostaSeguranca:"1942"
        };

        if (Senha !== ConfirmarSenha || Senha === '' || ConfirmarSenha === '') {
            alert('As senhas não coincidem, ou não foram preenchidas.');
        }
        else{
            api.post('/Administrador/AdicionarColaborador', data,{
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(dados => {
                alert(dados);
                listarColaboradores();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    const listarColaboradores = () => {
        fetch('http://localhost:5000/api/Administrador/ListarColaboradores', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setColaboradores(dados);
            })
            .catch(err => console.error(err));
    }
    
    const DeletarAdm =(idAdm)=>{
            fetch('http://localhost:5000/api/Administrador/DeletarAdminstrador/'+idAdm, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .then(dados => {
                alert(dados);
                listarColaboradores();
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="corpo">
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
                                                <p>Deletar</p>
                                                <img src={Delete} onClick={()=>DeletarAdm(item.idUsuario)}/>
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
                            maxLength={254}
                            minLength={3}
                            required
                            onChange={e => SetEmail(e.target.value)} 
                            />

                            <Input 
                            name="senha" 
                            label="*Senha" 
                            type="password" 
                            placeholder="*********" 
                            maxLength={15}
                            minLength={9}
                            required
                            onChange={e => SetSenha(e.target.value)}
                            />

                            <Input name="confirmarSenha" 
                            label="*Confirmar Senha" 
                            type="password" 
                            placeholder="*********" 
                            maxLength={15}
                            minLength={9}
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
        </div>
    );
}