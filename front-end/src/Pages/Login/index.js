import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// components 
import Footer from '../../Components/Footer';

// styles 
import './style.css';

// imagens
import imglogin from '../../assets/ImagemimgLogin.png';

export default function Login() {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () => {
        const login = {
            email: email,
            senha: senha
        }

        fetch('http://localhost:5000/api/Conta/login', {

            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(response => response.json())
            .then(dados => {
                localStorage.setItem("token", dados.token)
                history.push("/")
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="Login">
            <main className="central-login">
                <section className="sessaoLogar">
                    <div>

                        <button>sou uma empresa</button>

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
                                    <Link className="recuperarPassword" to="/">Recuperar senha</Link>
                                </div>
                            </form>


                            <div className="divisionBtn">
                                <button className="btnNew"><Link className="link-cad-conta" to="/cadastro">criar conta</Link></button>
                                <button className="btnLogar" onClick={login}>entrar</button>
                            </div>
                        </div>
                    </div>
                </section>

                <img src={imglogin} alt="Imagem de computadores" />
            </main>
        </div>
    );
}