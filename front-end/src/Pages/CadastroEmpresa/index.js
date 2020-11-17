import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Input from '../../Components/Input';
import BlueButton from '../../Components/BlueButton';
import Footer from '../../Components/Footer';

import imagemCadastroEmpresa from '../../assets/imgCadastroEmpresa.webp';

import './style.css';

export default function CadastroEmpresa() {

    const [NomeResponsavel, SetNomeResponsavel] = useState('');
    const [CNPJ, SetCNPJ] = useState('');
    const [Email, SetEmail] = useState('');
    const [NomeFantasia, SetNomeFantasia] = useState('');
    const [RazaoSocial, SetRazaoSocial] = useState('');
    const [Telefone, SetTelefone] = useState('');
    const [NumFuncionario, SetNumFuncionario] = useState('');
    const [NumCNAE, SetNumCNAE] = useState('');
    const [CEP, SetCEP] = useState('');
    const [Logradouro, SetLogradouro] = useState('');
    const [Complemento, SetComplemento] = useState('');
    const [EmailContato, SetEmailContato] = useState('');
    const [PerguntaSeguranca, SetPergunta] = useState('');
    const [RespostaSeguranca, SetResposta] = useState('');
    const [Estado, SetEstado] = useState('');
    const [Senha, SetSenha] = useState('');
    const [ConfirmarSenha, SetConfirmarSenha] = useState('');
    const [Cidade, SetCidade] = useState('');

    const history = useHistory();

    function salvar(e) {
        e.preventDefault();
        if(Senha!==ConfirmarSenha){
         alert("as senhas não estão equivalentes")
        }else{
            const data = {
                NomeReponsavel: NomeResponsavel,
                Cnpj: CNPJ,
                EmailContato: EmailContato,
                NomeFantasia: NomeFantasia,
                RazaoSocial: RazaoSocial,
                Telefone: Telefone,
                NumFuncionario: NumFuncionario,
                NumCnae: NumCNAE,
                Cep: CEP,
                Logradouro: Logradouro,
                Complemento: Complemento,
                Estado: Estado,
                Localidade: Cidade,
                Email: Email,
                Senha: Senha,
                RespostaSeguranca: RespostaSeguranca,
                PerguntaSeguranca: PerguntaSeguranca
            };
            fetch('http://localhost:5000/api/Usuario/Empresa', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => {
                if (response.status !== 200) {
                    alert("Não foi possivel efetuar o cadastro");
                }else{
                    alert("Cadastrado com sucesso");
                    history.push("/");
                }
            }).catch(err => console.error(err))
        }
    }

    return (
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />

            <div className="registerCompany">

                <div className="box-form">
                    <div className="form-content">
                        <h1>Cadastre-se como Empresa</h1>
                        <p>Bem-vindo ao cadastro de empresa. Ficamos felizes de tê-la na nossa plataforma</p>
                        <form className="form" onSubmit={salvar}>
                            <Input
                                name="responsibleName"
                                className="cadastre"
                                label="Nome do responsável:"
                                type="text"
                                placeholder="Barão de Mauá"
                                required
                                onChange={e => SetNomeResponsavel(e.target.value)}
                            />
                            <Input
                                name="cnpj"
                                className="cadastre"
                                label="CNPJ:"
                                type="text"
                                placeholder="00.000.000/0001-00"
                                required
                                onChange={e => SetCNPJ(e.target.value)}
                            />

                            <Input
                                name="emailContato"
                                className="cadastre"
                                label="E-mail para contato:"
                                type="text"
                                placeholder="contato@company.com"
                                required
                                onChange={e => SetEmailContato(e.target.value)}
                            />

                            <Input
                                name="companyFakeName"
                                className="cadastre"
                                label="Nome fantasia:"
                                type="text"
                                placeholder="CPTM"
                                required
                                onChange={e => SetNomeFantasia(e.target.value)}
                            />

                            <Input
                                name="companyName"
                                className="cadastre"
                                label="Razão social:"
                                type="text"
                                placeholder="São Paulo Railway Company Ltd."
                                required
                                onChange={e => SetRazaoSocial(e.target.value)}
                            />
                            <Input
                                name="phoneNumber"
                                className="cadastre"
                                label="Telefone da empresa:"
                                type="text"
                                placeholder="(11) 4002-8922"
                                required
                                onChange={e => SetTelefone(e.target.value)}
                            />

                            <Input
                                name="workersCompanyNumber"
                                className="cadastre"
                                label="Número de funcionários:"
                                type="number"
                                required
                                onChange={e => SetNumFuncionario(e.target.value)}
                            />

                            <Input
                                name="cnaeNumber"
                                className="cadastre"
                                label="Número CNAE:"
                                type="text"
                                placeholder="00.00-0-0"
                                required
                                onChange={e => SetNumCNAE(e.target.value)}
                            />

                            <Input
                                name="cep"
                                className="cadastre"
                                label="CEP:"
                                type="text"
                                placeholder="00000-000"
                                required
                                onChange={e => SetCEP(e.target.value)}
                            />

                            <Input
                                name="address"
                                className="cadastre"
                                label="Endereço da empresa:"
                                type="text"
                                required
                                onChange={e => SetLogradouro(e.target.value)}
                            />

                            <Input
                                name="address2"
                                className="cadastre"
                                label="Complemento:"
                                type="text"
                                onChange={e => SetComplemento(e.target.value)}
                            />

                            <div className="select">
                                <label>Estado</label>
                                <select className="cadastre" onChange={e => SetEstado(e.target.value)} value={Estado}>
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

                            <Input
                                name="ciadade"
                                className="cadastre"
                                label="Cidade:"
                                type="text"
                                placeholder="São paulo"
                                required
                                onChange={e => SetCidade(e.target.value)}
                            />

                            <Input
                                name="EmailUser"
                                className="cadastre"
                                label="Email de acesso:"
                                type="text"
                                required
                                onChange={e => SetEmail(e.target.value)}
                            />

                            <Input
                                name="password"
                                className="cadastre"
                                label="Senha de acesso:"
                                placeholder="login@gmail.com"
                                type="password"
                                required
                                onChange={e => SetSenha(e.target.value)}
                            />

                            <Input
                                name="password-confirm"
                                className="cadastre"
                                label="Confirme a senha:"
                                type="password"
                                required
                                onChange={e => SetConfirmarSenha(e.target.value)}
                            />

                            <div className="select">
                                <label>Pergunta de segurança</label>
                                <select className="cadastre" onChange={e => SetPergunta(e.target.value)} value={PerguntaSeguranca}>
                                    <option value="0">Selecione uma pergunta de segurança</option>
                                    <option value="Como se chama o seu cachorro">Como se chama o seu cachorro</option>
                                </select>
                            </div>

                            <Input
                                name="Resposta seguranca"
                                className="cadastre"
                                label="Resposta de segurança:"
                                type="text"
                                placeholder="Meu cachorro se chama..."
                                required
                                onChange={e => SetResposta(e.target.value)}
                            />
                            <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

                            <div className="form-button">
                            <BlueButton type="submit" name="Criar conta">Criar conta</BlueButton>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="box-img">
                    <img src={imagemCadastroEmpresa} alt="Pessoa acessando sua conta, com uma película transparente de cor azul." />
                </div>
            </div>
            <Footer />
        </body>
    );
}