import React from 'react';

import './style.css';

import BlackButton from '../../Components/BlackButton';
import Input from '../../Components/Input';
import Header from '../../Components/Header';
import AccessBar from '../../Components/AccessBar';
import AccessMenu from '../../Components/AccessMenu';
import Footer from '../../Components/Footer';

export default function CadastrarEstagiario() {
    return(
        <body>
            <AccessBar/>
            <Header/>
            <AccessMenu/>
            <div className="margin">
                <div className="estagiarioBox">           
                    <div className="tituloEstagiario">
                        <h1>Cadastrar Estagiario</h1>
                        <p>Bem-vindo ao cadastro do estagiário, cadastre ele aqui quando o mesmo for contratado por uma empresa podendo assim acompanha-lo e receber atualizações do seu estagio.</p>
                    </div>
                    <div className="alinharEstagiario">
                        <div className="camposEstagiario">
                            <Input 
                            name="name" 
                            label="*Digite o nome do candidato" 
                            type="text" 
                            placeholder="exemplo: Maria Santos"
                            required 
                            //onChange={} 
                            />

                            <div className="selectEstagiario">
                                <label>*Selecione o curso atual do candidato</label>
                                <select className="selectCurso" >
                                    <option>Desenvolvimento de Sistemas - 1T - M</option>
                                    <option>Desenvolvimento de Sistemas - 2T - M</option>
                                    <option>Desenvolvimento de Sistemas - 3T - M</option>
                                    <option>Desenvolvimento de Sistemas - 1T - T</option>
                                    <option>Desenvolvimento de Sistemas - 2T - T</option>
                                    <option>Desenvolvimento de Sistemas - 3T - T</option>
                                    <option>Redes de Computadores - 1T - M</option>
                                    <option>Redes de Computadores - 2T - M</option>
                                    <option>Redes de Computadores - 3T - M</option>
                                </select>
                            </div>
                            
                            <Input 
                            name="email" 
                            label="*Digite o email do candidato" 
                            type="text" 
                            placeholder="exemplo@exemplo.com"
                            required 
                            //onChange={} 
                            />

                            <Input 
                            name="cpf" 
                            label="*Digite o CPF" 
                            type="text" 
                            placeholder="000.000.000-00" 
                            required
                            //onChange={}
                            />

                            <div className="selectEstagiario">
                                <label>*Selecione qual a duração do contrato</label>
                                <select className="selectCurso" >
                                    <option>3 Meses</option>
                                    <option>6 Meses</option>
                                    <option>9 Meses</option>
                                    <option>12 Meses</option>
                                </select>
                            </div>

                            <Input 
                            name="telefone" 
                            label="*Digite o telefone para contato" 
                            type="text" 
                            placeholder="(00) 0000-00000" 
                            required
                            //onChange={}
                            />

                            <Input 
                            name="name" 
                            label="*Digite o nome da empresa contratante" 
                            type="text" 
                            placeholder="exemplo: TechVagas"
                            required 
                            //onChange={} 
                            />
                        </div>

                        <div className="botaoCadastrarEs">
                            <BlackButton type="submit" name="Cadastrar" >Cadastrar</BlackButton>
                        </div>
                    </div>
                
                </div>
            </div>
            <Footer/>

        </body>
        
    );
}