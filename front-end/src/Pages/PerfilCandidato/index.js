import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import Input from '../../Components/Input/index';
import api from '../../services/api';

import imgPadrao from '../../assets/android-character-symbol.webp';

import './style.css';

export default function PerfilCandidato() {
    const [NomeCompleto, SetNomeCompleto] = useState('');
    const [Rg, SetRg] = useState('');
    const [CPF, SetCPF] = useState('');
    const [Telefone, SetTelefone] = useState('');
    const [Linkedin, SetLinkedin] = useState('');
    const [Curso, SetCurso] = useState('');
    const [Area, SetArea] = useState('');

    const [Cursos, setCursos] = useState([]);
    const [Areas, setAreas] = useState([])
    const [Vagas, setVagas] = useState([]);

    const [NovaSenha, SetNovaSenha] = useState('');
    const [PerguntaSeguranca, SetPerguntaSeguranca] = useState('');
    const [RespostaSeguranca, SetRespostaSeguranca] = useState('');

    useEffect(() => {
        listarVagas();
        BuscarCandidatoPorId();
        listarAreas();
        lisCursos();
    }, []);

    const lisCursos = () => {
        api.get('/Usuario/ListarCurso',{
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                setCursos(response.data);
            });
    }

    const listarAreas = () => {
        fetch('http://localhost:5000/api/Usuario/ListarArea', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setAreas(dados);
            })
            .catch(err => console.error(err));
    }

    const BuscarCandidatoPorId = () => {
        fetch('http://localhost:5000/api/Candidato/BuscarCandidatoPorId', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json()).then(dados => {
            SetRg(dados.rg);
            SetCPF(dados.cpf);
            SetTelefone(dados.telefone);
            SetLinkedin(dados.linkLinkedinCandidato);
            SetNomeCompleto(dados.nomeCompleto);
            SetArea(dados.idArea);
            SetCurso(dados.idCurso);
        }).catch(err => console.error(err));
    }

    const AlterarSenha = () => {
        const form = {
            perguntaSeguranca: PerguntaSeguranca,
            respostaSeguranca: RespostaSeguranca,
            senha: NovaSenha,
        };
        fetch('http://localhost:5000/api/Usuario/AlterarSenha', {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel editar esse estagio");
            } else {
                alert("Editado com sucesso");
            }
        }).catch(err => console.error(err));
    }

    const EditarDadosDoUsuario = () => {
        const form = {
            nomeCompleto: NomeCompleto,
            rg: Rg,
            cpf: CPF,
            telefone: Telefone,
            linkLinkedinCanidato: Linkedin,
            idCurso: Curso,
            idArea: Area
        };
        fetch('http://localhost:5000/api/Candidato/AtualizarCandidato', {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel editar esse estagio");
            } else {
                alert("Editado com sucesso");
            }
        }).catch(err => console.error(err));
    }

    const listarVagas = () => {
        fetch('http://localhost:5000/api/Candidato/ListarVagasInscritas', {
            method: 'GET',
            headers:{
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setVagas(dados);
            })
            .catch(err => console.error(err));
    }

    function ApareceEditarDados() {
        let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
        let idModalVaga = document.getElementById("modalPerfilCandidato");
        if (idEditarPelicula.classList == "peliculaPerfilCandidato none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fecharEditarDados() {
        let idModalVaga = document.getElementById("modalPerfilCandidato");
        let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
        if (idEditarPelicula.classList != "peliculaPerfilCandidato none") {
            idEditarPelicula.classList.add("none");
            idModalVaga.classList.add("none");
        }
    }

    function ApareceAlterarSenhaCandidato() {
        let idEditarPelicula = document.getElementById("peliculaAlterarSenhaCandidato");
        let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
        if (idEditarPelicula.classList == "peliculaAlterarSenhaCandidato none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fecharAlterarSenhaCandidato() {
        let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
        let idEditarPelicula = document.getElementById("peliculaAlterarSenhaCandidato");
        if (idEditarPelicula.classList != "peliculaAlterarSenhaCandidato none") {
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
                        <h3>{NomeCompleto}</h3>
                        <p>Candidato</p>
                    </div>
                    <div className="BotoesPerfilCandidato">
                        <button className="btPerfil" onClick={ApareceEditarDados}><h3>Alterar dados</h3></button>
                        <button className="btPerfil" onClick={ApareceAlterarSenhaCandidato}><h3>Alterar senha</h3></button>
                    </div>
                </div>
                <div className="DireitoPerfil">
                    {
                        Vagas.map((item) => {
                            return (
                                <div className="BoxPerfilCandidato">
                                    <div className="flexBoxPerfilCandidato">
                                        <img src={imgPadrao} />
                                        <h3>{item.razaoSocial}</h3>
                                    </div>
                                    <h3>{item.tipoContrato}</h3>
                                    <h3>{item.salario}</h3>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div id="peliculaPerfilCandidato" className="peliculaPerfilCandidato none" onClick={btn_fecharEditarDados}></div>
            <div id="modalPerfilCandidato" className="modalPerfilCandidato none">
                <h2>Editar seus dados pessoais</h2>
                <form>
                    <Input className="InputCadastro" value={NomeCompleto} name="NomeCompleto" label="Nome completo" onChange={e => SetNomeCompleto(e.target.value)} />
                    <Input className="InputCadastro" value={Rg} name="Rg" label="RG" onChange={e => SetRg(e.target.value)} />
                    <Input className="InputCadastro" value={CPF} name="CPF" label="CPF" onChange={e => SetCPF(e.target.value)} />
                    <Input className="InputCadastro" value={Telefone} name="Telefone" label="Telefone" onChange={e => SetTelefone(e.target.value)} />
                    <Input className="InputCadastro" value={Linkedin} name="Linkedin" label="Linkedin" onChange={e => SetLinkedin(e.target.value)} />
                    <div className="select">
                        <label>Cursos</label> <br />
                        <select className="cadastre" onChange={e => SetCurso(e.target.value)} value={Curso}>
                            <option value="0">Selecione seu curso</option>
                            {
                                Cursos.map((item) => {
                                    return (
                                        <option value={item.idCurso}>{item.nomeCurso}</option>
                                    );
                                })
                            }
                        </select>
                    </div>

                    <div className="select">
                        <label>Áreas</label>
                        <select className="cadastre" onChange={e => SetArea(e.target.value)} value={Area}>
                            <option value="0">Selecione sua área</option>
                            {
                                Areas.map((item) => {
                                    return (
                                        <option value={item.idArea}>{item.nomeArea}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div className="btEditarEstagioDiv">
                        <button className="btVaga" onClick={EditarDadosDoUsuario}><h3>Editar</h3></button>
                    </div>
                </form>
            </div>

            <div id="peliculaAlterarSenhaCandidato" className="peliculaAlterarSenhaCandidato none" onClick={btn_fecharAlterarSenhaCandidato}></div>
            <div id="modalAlterarSenhaCandidato" className="modalAlterarSenhaCandidato none">
                <h2>Alterar senha</h2>
                <form>
                    <Input className="InputCadastro" name="NovaSenha" label="Nova senha" onChange={e => SetNovaSenha(e.target.value)} />
                    <button className="btVaga" onClick={AlterarSenha}>Alterar senha</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}