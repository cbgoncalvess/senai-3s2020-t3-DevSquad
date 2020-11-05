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
                                <Input name="TituloVaga" label="Titulo da Vaga" />
                                <Input name="Salario" label="Salario" />
                                <Select label="Área" Name="Area"></Select>
                                <Select label="Experiencia" Name="Experiencia"></Select>
                                <Select label="Tipo do contrato" Name="TipoContrato"></Select>
                                <Input name="Estado" label="Estado" />
                                <Input name="Cidade" label="Cidade" />
                                <Input name="CEP" label="CEP" />
                                <Input name="Logradouro" label="Logradouro" />
                                <Input name="Complemento" label="Complemento" />
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