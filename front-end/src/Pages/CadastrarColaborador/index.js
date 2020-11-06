import React from  'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import './style.css';

import User from '../../assets/images/user.png';
import Delete from '../../assets/images/cancel.png';
import Input from '../../Components/Input';
import AccessBar from '../../Components/AccessBar';
import BlackButton from '../../Components/BlackButton';
import AccessMenu from '../../Components/AccessMenu';


export default function CadastrarColaborador() {
    
    return (
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
                <div className="margin">
                    <div className="perfis">
                        <h1 className="colaboradores">Colaboradores:</h1>
                        <div className="perfilBox">
                            <div className="perfil">
                                <img className="user" src={User}/>
                                <p>Colaborador</p>
                                <h4>Marcelo Fontes</h4>
                            </div>
                            <div className="infos">
                                <p>ID:000000000000</p>
                                <p>E-mail: colaboradormarcelo@email.com</p>
                            </div>
                            <div className="banir">
                                <p>Banir</p>
                                <img src={Delete}/>
                            </div>
                        </div>

                        <div className="perfilBox">
                            <div className="perfil">
                                <img className="user" src={User}/>
                                <p>Colaborador</p>
                                <h4>Marcelo Fontes</h4>
                            </div>
                            <div className="infos">
                                <p>ID:000000000000</p>
                                <p>E-mail: colaboradormarcelo@email.com</p>
                            </div>
                            <div className="banir">
                                <p>Banir</p>
                                <img src={Delete}/>
                            </div>
                        </div>

                        <div className="perfilBox">
                            <div className="perfil">
                                <img className="user" src={User}/>
                                <p>Colaborador</p>
                                <h4>Marcelo Fontes</h4>
                            </div>
                            <div className="infos">
                                <p>ID:000000000000</p>
                                <p>E-mail: colaboradormarcelo@email.com</p>
                            </div>
                            <div className="banir">
                                <p>Banir</p>
                                <img src={Delete}/>
                            </div>
                        </div>
                    </div>
                    <hr className="barraVertical"/>
                    <div className="cadastrarBox">
                        
                        <div className="tituloCadastro">
                            <h1>Adicionar novo Colaborador?</h1>
                            <p>Insira os dados do novo colaborador(a), e ela(a) está cadastrado(a).</p>
                        </div>
                        <div className="camposCadastro">
                            <Input name="nome" label="*Nome" type="text" placeholder="exemplo: Maria Santos" />
                            <Input name="email" label="*E-mail" type="text" placeholder="exemplo@exemplo.com" />
                            <Input name="senha" label="*Senha" type="password" placeholder="*********" />
                            <Input name="confirmarSenha" label="*Confirmar Senha" type="password" placeholder="*********" />
                        </div>
                        <div className="botaoCadastrar">
                            <BlackButton type="submit" name="Cadastrar">Cadastrar</BlackButton>
                        </div>
                    </div>
                </div>
            <Footer />
        </body>
    );
}