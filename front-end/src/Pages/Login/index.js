import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt } from '../../services/token'

// components 
import Footer from '../../Components/Footer';

// styles 
import './style.css';

// imagens
import imglogin from '../../assets/ImagemimgLogin.webp';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';

export default function Login() {

    let history = useHistory();

    const [NovaSenha, SetNovaSenha] = useState('');
    const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    const [RespostaSeguranca, SetRespostaSeguranca] = useState('');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () => {

        const loginForm = {
            email: email,
            senha: senha
        }
        fetch('http://localhost:5000/api/Login', {

            method: 'POST',
            body: JSON.stringify(loginForm),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()
        )
            .then(dados => {
                if (dados.token !== undefined) {
                    localStorage.setItem("token", dados.token)
                    console.log(dados.status);
                    if (parseJwt().Role === "1") {
                        history.push("/perfil");
                    } else if (parseJwt().Role === "2") {
                        history.push("/perfilCandidato");
                    } else if (parseJwt().Role === "3") {
                        history.push("/perfilEmpresa");
                    }
                }
            })
            .catch(err => console.error(err))
    }

    const RecuperarSenha = () => {
        const form = {
            email:email,
            pergunta:PerguntaSeguranca,
            resposta:RespostaSeguranca,
            novaSenha:NovaSenha,
        };
        fetch('http://localhost:5000/api/Usuario/RecuperarSenha', {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(respose){
                if(respose.status!==200){
                    alert("Não foi possivel alterar a senha,entre em contato com o admin do site caso necessario");
                }else{
                    alert("Editado com sucesso");
                }
            }).catch(err => console.error(err));
    }

    function ApareceRecuperarSenhaCandidato() {
        let idEditarPelicula = document.getElementById("peliculaRecuperarSenhaCandidato");
        let idModalVaga = document.getElementById("modalRecuperarSenhaCandidato");
        if (idEditarPelicula.classList == "peliculaRecuperarSenhaCandidato none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fecharRecuperarSenhaCandidato() {
        let idModalVaga = document.getElementById("modalRecuperarSenhaCandidato");
        let idEditarPelicula = document.getElementById("peliculaRecuperarSenhaCandidato");
        if (idEditarPelicula.classList != "peliculaRecuperarSenhaCandidato none") {
            idEditarPelicula.classList.add("none");
            idModalVaga.classList.add("none");
        }
    }

    return (
        <div className="Login">
            <AccessBar />
            <Header />
            <AccessMenu />
            <main className="principalLogin">
                <section className="sessaoLogar">

                        <div className="division-logar">

                            <div className="division-logar-title">
                                <h2>login</h2>
                                <p className="sub-titulo">Bem-vindo ao SENAI | TechVagas</p>
                            </div>

                            <form className="form-logar" onSubmit={event => {
                                event.preventDefault();
                                login();
                            }}>

                                <div className="divisionCampo">
                                    <label>Usuário ou E-mail:</label>
                                    <input type="text" name="email" className="inputUser" placeholder="exemplo@exemplo.com / mariasantos" onChange={e => setEmail(e.target.value)} />
                                </div>

                                <div className="divisionCampo divisionPassword">
                                    <label>Senha:</label>
                                    <input type="password" name="password" placeholder="******" className="inputPassword" onChange={e => setSenha(e.target.value)} />
                                    <h5 className="recuperarPassword" onClick={ApareceRecuperarSenhaCandidato}>Recuperar senha</h5>
                                </div>
                            </form>

                            <div className="divisionBtn">
                                <button className="btnNew"><Link className="link-cad-conta" to="/cadastro">criar conta</Link></button>
                                <button className="btnLogar" onClick={login}>entrar</button>
                            </div>

                        </div>
                    


                </section>

                <img src={imglogin} className="imgBannerLogin" />
            </main>

            <div id="peliculaRecuperarSenhaCandidato" className="peliculaRecuperarSenhaCandidato none" onClick={btn_fecharRecuperarSenhaCandidato}></div>
            <div id="modalRecuperarSenhaCandidato" className="modalRecuperarSenhaCandidato none">
                <h2>Alterar senha</h2>
                <form>
                    <div className="select">
                        <label>Resposta de segurança</label>
                        <select className="div-select" onChange={e => SetPerguntaSeguranca(e.target.value)} value={PerguntaSeguranca}>
                            <option value="0">Selecione sua pergunta de segurança</option>
                            <option value="Como se chama o seu cachorro">Como se chama o seu cachorro</option>
                        </select>
                    </div>
                    <Input className="InputCadastro" name="RespostaSeguranca" label="Resposta de seguranca" onChange={e=>SetRespostaSeguranca(e.target.value)}/>
                    <Input className="InputCadastro" name="emailRecuperacao" label="Seu email" onChange={e=>setEmail(e.target.value)}/>
                    <Input className="InputCadastro" name="NovaSenha" label="Nova senha" onChange={e=>SetNovaSenha(e.target.value)}/>
                </form>
                    <button className="btVaga" onClick={RecuperarSenha}>Alterar senha</button>
            </div>
            <Footer />
        </div>
    );
}