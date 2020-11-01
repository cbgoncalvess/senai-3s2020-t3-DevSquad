import React from 'react';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import Select from '../../Components/Select/Index';
import './style.css';


export default function CadastarVaga() {
    return (
        <body>
            <AccessBar />
            <Header />
            <div className="bodyPartCadastrarVaga">
                <div className="meio">
                    <div className="Esquerdo">
                        <div className="ModalCadastro">
                            <h2>Divulgue sua vaga aqui</h2>
                            <form>
                                <Input className="InputCadastro" name="TituloVaga" label="Titulo da Vaga" />
                                <Input className="InputCadastro" name="Salario" label="Salario" />
                                <Select label="Área" Name="Area"></Select>
                                <Select label="Experiencia" Name="Experiencia"></Select>
                                <Select label="Tipo do contrato" Name="TipoContrato"></Select>
                                <Input className="InputCadastro" name="Estado" label="Estado" />
                                <Input className="InputCadastro" name="Cidade" label="Cidade" />
                                <Input className="InputCadastro" name="CEP" label="CEP" />
                                <Input className="InputCadastro" name="Logradouro" label="Logradouro" />
                                <Input className="InputCadastro" name="Complemento" label="Complemento" />
                                <div className="text-area">
                                    <label>Descrição da vaga</label>
                                    <textarea name="DescricaoVaga"></textarea>
                                    <br />
                                    <label>Descrição da empresa</label>
                                    <textarea name="DescricaoEmpresa"></textarea>
                                    <br />
                                    <label>Descrição dos benefícios</label>
                                    <textarea name="DescricaoBeneficio"></textarea>
                                </div>
                                <br/>
                                <div className="btVagaDiv">
                                    <button className="btVaga"><h3>Cadastrar</h3></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="Direito">
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    );
}