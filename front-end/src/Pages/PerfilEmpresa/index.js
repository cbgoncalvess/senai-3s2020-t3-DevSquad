import React from 'react';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import Select from '../../Components/Select/Index';
import Input from '../../Components/Input/index';

import imgPadrao from '../../assets/android-character-symbol.png';

import './style.css';

export default function perfilEmpresa() {
    return (
        <div className="bodyPartVizualizarPerfil">

            <AccessBar />
            <Header />
            <div className="meioPerfil">
                <div className="EsquerdoPerfil">
                    <img className="imgperfil" src={imgPadrao} alt="perfil" />
                    <h3>Apple</h3>
                    <p>Empresa</p>
                    <div className="BotoesPerfil">
                        <button className="btPerfil"><h3>Alterar dados</h3></button>
                        <button className="btPerfil"><h3>Alterar senha</h3></button>
                    </div>
                </div>
                <div className="DireitoPerfil">
                    <div className="BoxPerfilCandidato">
                        <div className="flexBoxPerfilCandidato">
                            <img src={imgPadrao} />
                            <h3>Stan Lee</h3>
                        </div>
                        <h3>Area de desenvolvimento</h3>
                        <h3>Dev 2°Termo-Manhã</h3>
                    </div>
                </div>
            </div>
            <div className="peliculaPerfilEmpresa"></div>
            <div className="modalPerfilEmpresa">
                <h2>Editar seus dados pessoais</h2>
                <form>
                    <Input className="InputCadastro" name="Telefone" label="Nome do responsável" />
                    <Input className="InputCadastro" name="Linkedin" label="Razão social" />
                    <Input className="InputCadastro" name="Telefone" label="Nome fantasia" />
                    <Input className="InputCadastro" name="Linkedin" label="CNPJ" />
                    <Input className="InputCadastro" name="Telefone" label="Email para contato" />
                    <Input className="InputCadastro" name="Linkedin" label="Telefone" />
                    <Input className="InputCadastro" name="Telefone" label="Número de fúncionarios" />
                    <Input className="InputCadastro" name="Linkedin" label="Número do CNAE" />
                    <Input className="InputCadastro" name="Telefone" label="CEP" />
                    <Input className="InputCadastro" name="Linkedin" label="Logradouro" />
                    <Input className="InputCadastro" name="Telefone" label="Complemento" />
                    <Input className="InputCadastro" name="Linkedin" label="Estado" />
                    <Input className="InputCadastro" name="Telefone" label="Cidade" />
                    <div className="btEditarEstagioDiv">
                        <button className="btVaga"><h3>Editar</h3></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}