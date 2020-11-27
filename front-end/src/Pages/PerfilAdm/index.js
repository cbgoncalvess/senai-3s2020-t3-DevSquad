import React, { useState} from 'react';
import {useHistory } from 'react-router-dom'

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import Input from '../../Components/Input/index';

import imgDelete from '../../assets/delete.webp'
import imgPadrao from '../../assets/android-character-symbol.webp';

import './style.css';

export default function PerfilAdm() {
    let [idVaga, setidVaga] = useState(0);
    const[idUsuario,setidUsuario]=useState(0);

    const [Vagas, setVagas] = useState([]);
    const [Empresas, SetEmpresa] = useState([]);
    const [Candidatos, SetCandidato] = useState([]);
    const [NovaSenha, SetNovaSenha] = useState('');
    const [Email, SetEmail] = useState([]);
    let [Opcao, SetOpcao] = useState('');

    let history=useHistory();
    
    function IrParaInscricoes(){
        localStorage.setItem("idVagaSelecionadaAdm", idVaga);
        history.push("/VizualizarVagaAdmin");
    }

    const Banir =(id)=>{
        fetch('http://localhost:5000/api/Administrador/Banir/'+id, {
            method: 'PUT',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
            .then(dados => {
                alert(dados);
                listarEmpresa();
                listarCandidatos();
            }).catch(err => console.error(err));
}

const DeletarVaga = (id) => {
    fetch('http://localhost:5000/api/Administrador/DeletarVaga/' + id, {
        method: 'DELETE',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(response => response.json())
    .then(dados => {
        alert(dados);
        listarVagas();
    }).catch(err => console.error(err));
}

    const listarEmpresa = () => {
        fetch('http://localhost:5000/api/Administrador/ListarEmpresas', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                SetEmpresa(dados);
            })
            .catch(err => console.error(err));
    }

    const listarVagas = () => {
        fetch('http://localhost:5000/api/Usuario/ListarTodasAsVagas', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setVagas(dados);
            })
            .catch(err => console.error(err));
    }

    const listarCandidatos = () => {
        fetch('http://localhost:5000/api/Administrador/ListarCandidatos', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                SetCandidato(dados);
            })
            .catch(err => console.error(err));
    }

    function Listar() {
        if (Opcao === "Candidatos" && Candidatos.length <= 0) {
            listarCandidatos();
            Opcao = '';
        }
        else if (Opcao === "Empresas" && Empresas.length <= 0) {
            listarEmpresa();
            Opcao = '';
        }
        else if (Opcao === "Vagas" && Vagas.length <= 0) {
            listarVagas();
            Opcao = '';
        }
    }

    const AlterarSenha = () => {
        const form = {
            email: Email,
            senha: NovaSenha
        };
        fetch('http://localhost:5000/api/Administrador/AlterarSenhaDeQualquerUsuario', {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json())
        .then(dados => {
            alert(dados);
        }).catch(err => console.error(err));
    }

    function ApareceAlterarSenha() {
        let idEditarPelicula = document.getElementById("peliculaAlterarSenhaUsuario");
        let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
        if (idEditarPelicula.classList == "peliculaAlterarSenhaUsuario none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fecharAlterarSenha() {
        let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
        let idEditarPelicula = document.getElementById("peliculaAlterarSenhaUsuario");
        if (idEditarPelicula.classList != "AlterarSenhaUsuario none") {
            idEditarPelicula.classList.add("none");
            idModalVaga.classList.add("none");
        }
    }

    return (
        <div className="bodyPartVizualizarPerfil">
            <AccessBar />
            <Header />
            <div className="meioPerfil">
                <div className="EsquerdoPerfil">
                    <div className="imgPefilTexto">
                        <img className="imgperfil" src={imgPadrao} alt="perfil" />
                        <h3>Robertinho monstrão</h3>
                        <p>administrador</p>
                    </div>
                    <div className="BotoesPerfil">
                        <button className="btPerfil" onClick={ApareceAlterarSenha}><h3>Alterar qualquer senha</h3></button>
                    </div>
                </div>
                <div className="DireitoPerfil">
                    <br />
                    <div className="RowPerfilAdm">
                        <select className="selectPerfil" onChange={e => SetOpcao(e.target.value)} onClick={Listar} value={Opcao}>
                            <option>Filtre sua busca por...</option>
                            <option value="Candidatos">Candidatos</option>
                            <option value="Empresas">Empresa</option>
                            <option value="Vagas">Vagas</option>
                        </select>
                    </div>
                    {
                        View()
                    }
                </div>
            </div>
            <div id="peliculaAlterarSenhaUsuario" className="peliculaAlterarSenhaUsuario none" onClick={btn_fecharAlterarSenha}></div>
            <div id="modalAlterarSenhaUsuario" className="modalAlterarSenhaUsuario none">
                <h2>Alterar senha</h2>
                <form>
                    <Input className="InputCadastro" name="Email" label="Email" onChange={e => SetEmail(e.target.value)}
                    maxLength={154}
                    minLength={5}
                    required
                    />
                    <Input className="InputCadastro" name="NovaSenha" label="Nova senha" onChange={e => SetNovaSenha(e.target.value)}
                    maxLength={15}
                    minLength={9}
                    required
                    />
                    <button className="btVaga" onClick={AlterarSenha}>Alterar senha</button>
                </form>
            </div>
            <Footer />
        </div>
    );

    function View() {
        if (Opcao === 'Candidatos') {
            return (
                <div>
                    {
                        Candidatos.map((item) => {
                            return (
                                <div key={item.idCandidato} className="BoxPerfil">
                                    <div className="flexBoxPerfil">
                                        <img className="imgUsuario" src={imgPadrao} alt="usuario" />
                                        <div className="ColumnNomeEmail">
                                            <h2>{item.nomeCompleto}</h2>
                                            <p>{item.idUsuarioNavigation.email}</p>
                                        </div>
                                    </div>
                                    <div className="ColumnPerfilBanir">
                                        <img className="Delete" src={imgDelete} alt="Delete" onClick={()=>Banir(item.idUsuario)}/>
                                        <button className="btVerPerfil"><h4>Ver perfil</h4></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        } else if (Opcao === 'Empresas') {

            return (
                <div>
                    {
                        Empresas.map((item) => {
                            return (
                                <div key={item.idEmpresa} className="BoxPerfil">
                                    <div className="flexBoxPerfil">
                                        <img className="imgUsuario" src={imgPadrao} alt="usuario" />
                                        <div className="ColumnNomeEmail">
                                            <h2>{item.razaoSocial}</h2>
                                            <p>{item.emailContato}</p>
                                        </div>
                                    </div>
                                    <div className="ColumnPerfilBanir">
                                        <img className="Delete" onClick={()=>Banir(item.idUsuario)} src={imgDelete} alt="Delete" />
                                        <button className="btVerPerfil"><h4>Ver perfil</h4></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        } else if (Opcao === 'Vagas') {
            return (
                <div>
                    {
                        Vagas.map((item) => {
                            return (
                                <div key={item.idEmpresa} className="BoxPerfil">
                                    <div className="flexBoxPerfil">
                                        <img className="imgUsuario" src={imgPadrao} alt="usuario" />
                                        <div className="ColumnNomeEmail">
                                            <h2>{item.tituloVaga}</h2>
                                            <p>{item.nomeArea}</p>
                                        </div>
                                    </div>
                                    <div className="ColumnPerfilBanir">
                                        <img className="Delete" src={imgDelete} alt="Delete" onClick={()=>DeletarVaga(item.idVaga)}/>
                                        <button className="btVerPerfil" onClick={e=>{
                                            e.preventDefault();
                                            idVaga=item.idVaga;
                                            IrParaInscricoes();
                                        }}><h4>Ver vaga</h4></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }
}

