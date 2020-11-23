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
    const [ListTipoPresencas,setTipoPresencas]=useState([]);
    const [IdTipoPresenca,setIdTipoPresenca]=useState(0);

    useEffect(() => {
        listarAreas();
        ListarTipoPresencas();
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

    const ListarTipoPresencas = () => {
        fetch('http://localhost:5000/api/Empresa/ListarTipoPresenca', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setTipoPresencas(dados);
            })
            .catch(err => console.error(err));
    }

    const salvar = () => {
        const form = {
            tituloVaga: TituloVaga,
            salario: Salario,
            idArea: Area,
            idTipoRegimePresencial:IdTipoPresenca,
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
        api.post('/Empresa/AdicionarVaga', form, {
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
                                <Input className="InputCadastro"
                                    name="TituloVaga"
                                    label="Título da Vaga"
                                    onChange={e => SetTituloVaga(e.target.value)}
                                    type="text"
                                    maxLength={40}
                                    minLength={5}
                                    required
                                />

                                <Input className="InputCadastro"
                                    name="Salario"
                                    type="number"
                                    label="Salário"
                                    onChange={e => SetSalario(e.target.value)}
                                    required
                                />

                                <div className="select">
                                    <label>Área</label>
                                    <select className="div-select" onChange={e => SetArea(e.target.value)} value={Area} required>
                                        <option value="0">Selecione uma área de atuação</option>
                                        {
                                            ListAreas.map((item) => {
                                                return <option value={item.idArea}>{item.nomeArea}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="select">
                                    <label>Tipo de presença</label>
                                    <select className="div-select" onChange={e => setIdTipoPresenca(e.target.value)} value={IdTipoPresenca} required>
                                        <option value="0">Selecione um tipo de presenca</option>
                                        {
                                            ListTipoPresencas.map((item) => {
                                                return <option value={item.idTipoRegimePresencial}>{item.nomeTipoRegimePresencial}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="select">
                                    <label>Experiência</label>
                                    <select className="div-select" onChange={e => SetExperiencia(e.target.value)} value={Experiencia} required>
                                        <option value="0">Selecione um nivel de experiencia</option>
                                        <option value="Pleno">Pleno</option>
                                        <option value="Sênior">Sênior</option>
                                        <option value="Júnior">Júnior</option>
                                    </select>
                                </div>
                                <div className="select">
                                    <label>Tipo de contrato</label>
                                    <select className="div-select" onChange={e => SetTipoContrato(e.target.value)} value={TipoDeContrato} required>
                                        <option value="0">Selecione um tipo de contrato</option>
                                        <option value="CLT">CLT</option>
                                        <option value="PJ">PJ</option>
                                        <option value="Estagio">Estagio</option>
                                    </select>
                                </div>
                                <div className="select">
                                    <label>Estado</label>
                                    <select className="cadastre" onChange={e => SetEstado(e.target.value)} value={Estado} required>
                                        <option value="0">Selecione seu estado</option>
                                        <option value="AC">Acre</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="PR">Paraná</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                </div>
                                <Input className="InputCadastro"
                                    name="Cidade"
                                    label="Cidade"
                                    type="text"
                                    onChange={e => SetCidade(e.target.value)}
                                    maxLength={50}
                                    minLength={5}
                                    required />

                                <Input className="InputCadastro"
                                    name="CEP"
                                    type="text"
                                    label="CEP"
                                    onChange={e => SetCEP(e.target.value)}
                                    maxLength={8}
                                    minLength={8}
                                    required
                                />

                                <Input className="InputCadastro"
                                    name="Logradouro"
                                    label="Logradouro"
                                    type="text"
                                    onChange={e => SetLogradouro(e.target.value)}
                                    maxLength={255}
                                    minLength={5}
                                    required
                                />

                                <Input className="InputCadastro"
                                    name="Complemento"
                                    label="Complemento"
                                    type="text"
                                    onChange={e => SetComplemento(e.target.value)}
                                    maxLength={255}
                                    minLength={5}
                                    required
                                />
                                <div className="text-area">
                                    <label>Descrição da vaga</label>
                                    <textarea
                                        name="DescricaoVaga"
                                        onChange={e => SetDescricaoVaga(e.target.value)}
                                        required
                                        maxLength={700}
                                        minLength={5}
                                    ></textarea>
                                    <br />
                                    <label>Descrição da empresa</label>
                                    <textarea onChange={e => SetDescricaoEmpresa(e.target.value)}
                                        name="DescricaoEmpresa"
                                        required
                                        maxLength={700}
                                        minLength={5}
                                    ></textarea>
                                    <br />
                                    <label>Descrição dos benefícios</label>
                                    <textarea name="DescricaoBeneficio"
                                        onChange={e => SetDescricaoBeneficio(e.target.value)}
                                        required
                                        maxLength={700}
                                        minLength={5}
                                    ></textarea>
                                </div>
                                <br />
                                <div className="btVagaDiv">
                                    <button className="btVaga" onClick={salvar}><h3>Cadastrar</h3></button>
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