import React ,{useState}from 'react';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';
import { useHistory } from 'react-router-dom';
import './style.css';
import AccessMenu from '../../Components/AccessMenu';


export default function CadastrarVaga() {
    let history = useHistory();
    let [CEP, SetCEP] = useState("");
    let [Logradouro, SetLogradouro] = useState("");
    let [Estado, SetEstado] = useState("");
    let [Cidade, SetCidade] = useState("");
    const validaCep = /^[0-9]{8}$/g;
    let verificacaoCep = validaCep.test(CEP);

    function buscarCep(valor) {
        if (verificacaoCep) {
            const URL = `https://viacep.com.br/ws/${valor}/json/`;
            fetch(URL)
                .then((resposta) => resposta.json())
                .then((data) => {
                    if (data.logradouro || data.localidade || data.uf !== undefined) {
                        document.getElementById("rua").value = data.logradouro;
                        document.getElementById("cidade").value = data.localidade;
                        document.getElementById("uf").value = data.uf;
                        SetLogradouro(data.logradouro);
                        SetCidade(data.localidade);
                        SetEstado(data.uf);
                    } else {
                        alert('O CEP não existe');
                    }
                })
                .catch((erro) => console.error(erro));
        } else {
            alert("O CEP deve conter apenas 8 números");
        }
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
                                    id="TituloVagaCadastro"
                                    name="TituloVagaCadastro"
                                    label="Título da Vaga"
                                    type="text"
                                    maxLength={50}
                                    minLength={5}
                                    required
                                />

                                <Input className="InputCadastro"
                                id="SalarioCadastro"
                                    name="SalarioCadastro"
                                    type="number"
                                    label="Salário"
                                    required
                                />

                                <div className="select-final">
                                    <label htmlFor="selectAreaCadastro">Área</label>
                                    <select id="selectAreaCadastro" required>
                                    </select>
                                </div>

                                <div className="select-final">
                                    <label htmlFor="selectTipoPresencaCadastro">Tipo de presença</label>
                                    <select id="selectTipoPresencaCadastro" required>
                                    </select>
                                </div>

                                <div className="select-final">
                                    <label htmlFor="selectExperienciaCadastro">Experiência</label>
                                    <select id="selectExperienciaCadastro" required>
                                        <option value="0">Selecione um nivel de experiencia</option>
                                        <option value="Pleno">Pleno</option>
                                        <option value="Sênior">Sênior</option>
                                        <option value="Júnior">Júnior</option>
                                    </select>
                                </div>
                                <div className="select-final">
                                    <label htmlFor="selectTipoContratoCadastro">Tipo de contrato</label>
                                    <select id="selectTipoContratoCadastro" required>
                                        <option value="0">Selecione um tipo de contrato</option>
                                        <option value="CLT">CLT</option>
                                        <option value="PJ">PJ</option>
                                        <option value="Estagio">Estagio</option>
                                    </select>
                                </div>
                                <div className="Input">
                                    <label htmlFor="cepCadastroVaga">CEP:</label>
                                    <br />
                                    <input
                                    maxLength={8}
                                    minLength={8}
                                        type="text"
                                        className="cadastre"
                                        id="cepCadastroVaga"
                                        onBlur={(e) => {
                                            e.preventDefault();
                                            buscarCep(e.target.value);
                                        }}
                                        onChange={(e) => SetCEP(e.target.value)}
                                    />
                                </div>

                                <Input
                                    id="rua"
                                    className="InputCadastro"
                                    name="Logradouro"
                                    label="Logradouro"
                                    type="text"
                                    maxLength={150}
                                    minLength={5}
                                    required
                                />

                                <Input
                                id="ComplementoCadastroVaga"
                                    className="InputCadastro"
                                    name="ComplementoCadastroVaga"
                                    label="Complemento"
                                    type="text"
                                    maxLength={255}
                                    minLength={5}
                                />

                                <div className="Input">
                                    <label>Cidade:</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="cadastre"
                                        id="cidade"
                                        required
                                        disabled
                                        maxLength={255}
                                        minLength={5}
                                    />
                                </div>

                                <div className="Input">
                                    <label>UF:</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="cadastre"
                                        id="uf"
                                        required
                                        disabled
                                        maxLength={2}
                                        minLength={2}
                                    />
                                </div>

                                <div className="text-area">
                                    <label htmlFor="DescricaoVagaCadastro">Descrição da vaga</label>
                                    <textarea
                                    id="DescricaoVagaCadastro"
                                        name="DescricaoVaga"
                                        required
                                        maxLength={750}
                                        minLength={5}
                                    ></textarea>
                                    <br />
                                    <label htmlFor="DescricaoEmpresaCadastro">Descrição da empresa</label>
                                    <textarea
                                        name="DescricaoEmpresa"
                                        required
                                        maxLength={750}
                                        minLength={5}
                                        id="DescricaoEmpresaCadastro"
                                    ></textarea>
                                    <br />
                                    <label htmlFor="DescricaoBeneficioCadastro">Descrição dos benefícios</label>
                                    <textarea name="DescricaoBeneficio"
                                        required
                                        maxLength={750}
                                        minLength={5}
                                        id="DescricaoBeneficioCadastro"
                                    ></textarea>
                                </div>
                                <br />
                                <div className="btVagaDiv">
                                    <button className="btVaga" onClick={()=>history.push('/VagasPublicadas')}>Cadastrar</button>
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