import React, { useEffect, useState } from 'react';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import { useHistory } from 'react-router-dom';
import './style.css';
import AccessMenu from '../../Components/AccessMenu';

import api from '../../services/api';


export default function CadastrarVaga() {

    const [TituloVaga, SetTituloVaga] = useState('');
    const [Salario, SetSalario] = useState('');
    const [Area, SetArea] = useState('');
    const [Experiencia, SetExperiencia] = useState('');
    const [TipoDeContrato, SetTipoContrato] = useState('');
    const [Estado, SetEstado] = useState('');
    const [Cidade, SetCidade] = useState('');
    const [CEP, SetCEP] = useState('');
    const [Logradouro, SetLogradouro] = useState('');
    const [Complemento, SetComplemento] = useState('');
    const [DescricaoVaga, SetDescricaoVaga] = useState('');
    const [DescricaoEmpresa, SetDescricaoEmpresa] = useState('');
    const [DescricaoBeneficio, SetDescricaoBeneficio] = useState('');
    const [ListAreas, SetListArea] = useState([]);

    useEffect(() => {
        listarAreas();
    }, []);

    let history = useHistory();

    const listarAreas = () => {
        fetch('http://localhost:5000/api/Usuario/ListarArea', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                SetListArea(dados);
            })
            .catch(err => console.error(err));
    }

    const salvar = () => {
        const form = {
            tituloVaga: TituloVaga,
            salario: Salario,
            idArea: Area,
            experiencia: Experiencia,
            tipoContrato: TipoDeContrato,
            estado: Estado,
            localidade: Cidade,
            cep: CEP,
            logradouro: Logradouro,
            complemento: Complemento,
            descricaoVaga: DescricaoVaga,
            descricaoEmpresa: DescricaoEmpresa,
            descricaoBeneficio: DescricaoBeneficio
        };
        api.post('/Empresa/AdicionarVaga', form,{
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(function (respose) {
            if (respose.status !== 200) {
                alert("Não foi possivel cadastrar a vaga");
            } else {
                alert("Vaga cadastrada com sucesso");
                history.push('/VagasPublicadas');
            }
        })
        .catch(err => console.log(err))
    }
    
    
    return (
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="bodyPartCadastrarVaga">
                <div className="meio">
                    <div className="Esquerdo">
                        <div className="ModalCadastro">
                            <h2>Divulgue sua vaga aqui</h2>
                            <form onSubmit={event => {
                                event.preventDefault();
                            }}>
                                <Input className="InputCadastro" name="TituloVaga" label="Título da Vaga" onChange={e => SetTituloVaga(e.target.value)} />
                                <Input className="InputCadastro" name="Salario" label="Salário" onChange={e => SetSalario(e.target.value)} />
                                <div className="select">
                                    <label>Área</label>
                                    <select className="div-select" onChange={e => SetArea(e.target.value)} value={Area}>
                                        <option value="0">Selecione uma área de atuação</option>
                                        {
                                            ListAreas.map((item) => {
                                                return <option value={item.idArea}>{item.nomeArea}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="select">
                                    <label>Experiência</label>
                                    <select className="div-select" onChange={e => SetExperiencia(e.target.value)} value={Experiencia}>
                                        <option value="0">Selecione um nivel de experiencia</option>
                                        <option value="Pleno">Pleno</option>
                                        <option value="Sênior">Sênior</option>
                                        <option value="Junior">Júnior</option>
                                    </select>
                                </div>
                                <div className="select">
                                    <label>Tipo de contrato</label>
                                    <select className="div-select" onChange={e => SetTipoContrato(e.target.value)} value={TipoDeContrato}>
                                        <option value="0">Selecione um tipo de contrato</option>
                                        <option value="CLT">CLT</option>
                                        <option value="PJ">PJ</option>
                                        <option value="Estagio">Estagio</option>
                                    </select>
                                </div>
                                <Input className="InputCadastro" name="Estado" label="Estado" onChange={e => SetEstado(e.target.value)} />
                                <Input className="InputCadastro" name="Cidade" label="Cidade" onChange={e => SetCidade(e.target.value)} />
                                <Input className="InputCadastro" name="CEP" label="CEP" onChange={e => SetCEP(e.target.value)} maxLength={"8"} />
                                <Input className="InputCadastro" name="Logradouro" label="Logradouro" onChange={e => SetLogradouro(e.target.value)} />
                                <Input className="InputCadastro" name="Complemento" label="Complemento" onChange={e => SetComplemento(e.target.value)} />
                                <div className="text-area">
                                    <label>Descrição da vaga</label>
                                    <textarea name="DescricaoVaga" onChange={e => SetDescricaoVaga(e.target.value)}></textarea>
                                    <br />
                                    <label>Descrição da empresa</label>
                                    <textarea onChange={e => SetDescricaoEmpresa(e.target.value)} name="DescricaoEmpresa"></textarea>
                                    <br />
                                    <label>Descrição dos benefícios</label>
                                    <textarea name="DescricaoBeneficio" onChange={e => SetDescricaoBeneficio(e.target.value)}></textarea>
                                </div>
                                <br />
                                <div className="btVagaDiv">
                                    <button className="btVaga" onClick={salvar}>Cadastrar</button>
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