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
import ModalMensagem from '../../Components/ModalMensagem';

export default function Login() {

    let history = useHistory();

    const [Mensagem,setMensagem]=useState('Suas informações são inválidas');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    
const login = () => 
{
    if(email.length>5&&senha.length>5){
        if(email=="Administrador@gmail.com" && senha=="123123123"){
            localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvc3NhcmxlQGdtYWlsLmNvbSIsImp0aSI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIxIiwiUm9sZSI6IjEiLCJleHAiOjE2MDY5OTkxMDUsImlzcyI6IlNlbmFpVGVjaFZhZ2FzLldlYkFwaSIsImF1ZCI6IlNlbmFpVGVjaFZhZ2FzLldlYkFwaSJ9.6Bnx7BgvHNrbON3rSwVpMgF46ChL-T50mu6d5puHBC4");
        }

        if(email=="Candidato@gmail.com" && senha=="123123123"){
            localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRvdWdsYXNAZ21haWwuY29tIiwianRpIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJSb2xlIjoiMiIsImV4cCI6MTYwNjk5ODc1NCwiaXNzIjoiU2VuYWlUZWNoVmFnYXMuV2ViQXBpIiwiYXVkIjoiU2VuYWlUZWNoVmFnYXMuV2ViQXBpIn0.-1Tqy6liFvkz-b2Ga024nyHr5FcYJJl29DER3HOWYqA");
        }

        if(email=="Empresa@gmail.com" && senha=="123123123"){
            localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNlbmFpQGdtYWlsLmNvbSIsImp0aSI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIzIiwiUm9sZSI6IjMiLCJleHAiOjE2MDY5OTkyMDQsImlzcyI6IlNlbmFpVGVjaFZhZ2FzLldlYkFwaSIsImF1ZCI6IlNlbmFpVGVjaFZhZ2FzLldlYkFwaSJ9.NeMTGacPQ1_hK_3CfSd7nlgzhmtxN7LUAow3-jHY56o");
        }
        if(email=="Administrador@gmail.com"||email=="Candidato@gmail.com"||email=="Empresa@gmail.com"){
            if (parseJwt().Role === "1") {
                history.push("/perfil");
            } else if (parseJwt().Role === "2") {
                history.push("/perfilCandidato");
            } else if (parseJwt().Role === "3") {
                history.push("/perfilEmpresa");
            }    
        }else{
            setMensagem("Suas credencias não são válidas")
            AparecelbErro();
        }
    }else{
            setMensagem("Suas credencias não são válidas")
            AparecelbErro();
        }
    }

    function AparecelbErro(){
        let idlbErro = document.getElementById("lbErro");
        if (idlbErro.classList == "LabelErro none")
        idlbErro.classList.remove("none");
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
                                <label htmlFor="EmailLogin">E-mail:</label>
                                <input id="EmailLogin" type="text" name="email" className="inputUser" placeholder="exemplo@exemplo.com / mariasantos" onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="divisionCampo divisionPassword">
                                <label htmlFor="SenhaLogin">Senha:</label>
                                <input id="SenhaLogin" type="password" name="password" placeholder="******" className="inputPassword" onChange={e => setSenha(e.target.value)} />
                            </div>
                    <label className="LabelErro none" id="lbErro">{Mensagem}</label>
                                <h5 className="recuperarPassword" onClick={ApareceRecuperarSenhaCandidato}>Recuperar senha</h5>
                        </form>

                        <div className="divisionBtn">
                            <button className="btnNew"><Link className="link-cad-conta" to="/cadastro">criar conta</Link></button>
                            <button className="btnLogar" onClick={login}>entrar</button>
                        </div>

                    </div>
                </section>

                <img src={imglogin} className="imgBannerLogin" alt="Banner do site"/>
            </main>

            <div
                id="peliculaRecuperarSenhaCandidato"
                className="peliculaRecuperarSenhaCandidato none"
                onClick={btn_fecharRecuperarSenhaCandidato}
            ></div>
            <div
                id="modalRecuperarSenhaCandidato"
                className="modalRecuperarSenhaCandidato none"
            >
                <h2>Alterar senha</h2>
                <form>
                    <div className="select-final">
                        <label htmlFor="RecuperarSelect">Pergunta de segurança</label>
                        <select
                        id="RecuperarSelect"
                            required
                        >
                            <option value="0">Selecione sua pergunta de segurança</option>
                            <option value="Como se chama o seu cachorro">Como se chama o seu cachorro</option>
                            <option value="Qual o seu sobrenome">Qual o seu sobrenome</option>
                            <option value="Qual o nome da sua mãe/pai">Qual o nome da sua mãe/pai</option>
                            <option value="Para qual país você gostaria de viajar">Para qual país você gostaria de viajar</option>
                            <option value="Qual era sua matéria preferida na escola">Qual era sua matéria preferida na escola</option>
                            <option value="De onde vem sua família">De onde vem sua família</option>
                            <option value="Do que você mais gosta de fazer nas suas horas vagas">Do que você mais gosta de fazer nas suas horas vagas</option>
                            <option value="Qual a palavra que te define como pessoa">Qual a palavra que te define como pessoa</option>
                            <option value="Qual o ano mais importante da sua vida">Qual o ano mais importante da sua vida</option>
                        </select>
                    </div>
                    <Input
                    id="RespostaSegurancaRecuperar"
                        className="InputCadastro"
                        name="RespostaSegurancaRecuperar"
                        label="Resposta de seguranca"
                        maxLength={20}
                        minLength={5}
                        required
                    />

                    <Input
                    id="emailRecuperacao"
                        className="InputCadastro"
                        name="emailRecuperacao"
                        label="Seu email"
                        maxLength={254}
                        minLength={5}
                        required
                    />

                    <Input
                        id="NovaSenhaRecuperar"
                        className="InputCadastro"
                        name="NovaSenhaRecuperar"
                        label="Nova senha"
                        maxLength={15}
                        minLength={9}
                        type="password"
                        required
                    />
                </form>
                <button className="btVaga" onClick={()=>alert("Senha alterada com sucesso")}>
                    Alterar senha
                </button>  
            </div>
            <Footer />
        </div>
    );
}

