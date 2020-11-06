import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AccessBar from '../../Components/AccessBar';
import Tag from '../../Components/Tag/Index';
import AccessMenu from '../../Components/AccessMenu';
import Svg from '../../Components/imgsvg/Index';
import Confidence from '../../Components/imgsvg/confidence';
import Surprise from '../../Components/imgsvg/surprise';

import { Link } from 'react-router-dom';

import imgPadrao from '../../assets/android-character-symbol.png';
import imgPerfil from '../../assets/perfil-comportamental-online.png';

import './style.css';

export default function Home() {
    return (
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />
            <div className="bodyPart">
                <div className="StartImage">
                    <div className="StartText">
                        <h1>Bem vindo ao SENAI TechVagas!</h1>
                        <p>O site de emprego que oferece as melhores vagas de tecnologia da informação</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Dê seu primeiro passo:</h3>

                    <div className="EmpresaCandidato">
                        <div className="Empresa">
                            <p>Empresas com interesse de divulgar </p>
                            <p>oportunidades</p>
                            <br />
                            <div>
                                <Link to="/cadastroempresa"><button className="BtnStartEmpresa"><h2>EMPRESA</h2></button></Link>
                            </div>
                        </div>

                        <div className="Candidato">
                            <p>Alunos que acabaram de ingressar</p>
                            <p>no curso</p>
                            <br />
                            <div>
                                <Link to="/cadastro"><button className="BtnStartCandidato"><h2>CANDIDATO</h2></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Imagens">
                    <div className="ColumnImages">
                        <Svg />
                        <h2>Profissionalismo</h2>
                        <p>Um dos principais pilares da nossa</p>
                        <p>aplicação para demosntrar nosso</p>
                        <p>compromisso o aluno e a empresa</p>
                    </div>
                    <div className="ColumnImages">
                        <Confidence />
                        <h2>Confiança</h2>
                        <p>Taxa de empregabilidade supera 80% entre</p>
                        <p>profissionais que concluíram cursos em </p>
                        <p>áreas de tecnologia da informaçãos</p>
                    </div>
                    <div className="ColumnImages">
                        <Surprise />
                        <h2>Surpresa</h2>
                        <p>Quando você menos espera...</p>
                        <p>VOCÊ FOI ACEITO! A plataforma faz com </p>
                        <p>que você tratalhe seus potenciais</p>
                    </div>
                </div>
                <div className="QuadroDeVagas">
                    <br />
                    <h2>Quadro de vagas</h2>
                    <p>Aqui você encontra as melhores vagas disponiveis</p>
                    <br />
                    <div className="BoxDeVagas">
                        <div className="Vaga">
                            <div className="Space">
                                <img src={imgPadrao} alt="" />
                                <h3>Google</h3>
                                <br />
                                <hr className="hr" />
                                <br />
                                <h4>Desenvolvedor Back-end Jr</h4>
                                <br />
                                <div className="Tecnologias">
                                    <Tag NomeTag={"Fluther"}></Tag>
                                    <Tag NomeTag={"Dart"}></Tag>
                                    <Tag NomeTag={"Javascript"}></Tag>
                                    <Tag NomeTag={"CSharp"}></Tag>
                                    <Tag NomeTag={"React"}></Tag>
                                </div>
                            </div>
                            <div className="LinkVaga">
                                <a className="Link" href="teste">Ver mais sobre a vaga</a>
                            </div>
                        </div>
                        <div className="Vaga">
                            <div className="Space">
                                <img src={imgPadrao} alt="" />
                                <h3>Youtube</h3>
                                <br />
                                <hr className="hr" />
                                <br />
                                <h4>Desenvolvedor Back-end Jr</h4>
                                <br />
                                <div className="Tecnologias">
                                    <Tag NomeTag={"Angular"}></Tag>
                                    <Tag NomeTag={"C++"}></Tag>
                                    <Tag NomeTag={"Python"}></Tag>
                                    <Tag NomeTag={"Html5"}></Tag>
                                    <Tag NomeTag={"Css3"}></Tag>
                                    <Tag NomeTag={"Java"}></Tag>
                                </div>
                            </div>
                            <div className="LinkVaga">
                                <a className="Link" href="teste">Ver mais sobre a vaga</a>
                            </div>
                        </div>
                        <div className="Vaga">
                            <div className="Space">
                                <img src={imgPadrao} alt="" />
                                <h3>Apple</h3>
                                <br />
                                <hr className="hr" />
                                <br />
                                <h4>Desenvolvedor Back-end Jr</h4>
                                <br />
                                <div className="Tecnologias">
                                    <Tag NomeTag={"NodeJs"}></Tag>
                                    <Tag NomeTag={"VueJs"}></Tag>
                                    <Tag NomeTag={"MVC"}></Tag>
                                    <Tag NomeTag={".Net"}></Tag>
                                    <Tag NomeTag={"Entity Framework"}></Tag>
                                    <Tag NomeTag={"SQL"}></Tag>
                                    <Tag NomeTag={"MongoDB"}></Tag>
                                </div>
                            </div>
                            <div className="LinkVaga">
                                <a className="Link" href="teste">Ver mais sobre a vaga</a>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

                <div className="TesteDePersonalidade">
                    <div className="imgTeste">
                        <img src={imgPerfil} alt="" />
                    </div>
                    <div className="TextoTeste">
                        <br />
                        <h2>Teste de perfil comportamental</h2>
                        <p>As características do mundo animal também podem ser usadas no mundo corporativo.</p>
                        <p>É possível traçar o perfil de personalidade de cada pessoa e tipo de personalidade, a partir de mapa comportamental.</p>
                        <p>Este teste indica o animal que nos humanos seríamos no ambiente de trabalho, apontando pontos positivos e negativos</p>
                        <p>do nosso comportamento.</p>
                        <br />
                        <h4>Você é uma Águia, Lobo, Gato ou Tubarão?</h4>
                        <h4>Faça o teste e descubra!</h4>
                        <br />
                        <br />
                        <div className="btnTeste">
                            <a href="/TesteDePersonalidade"><button className="bt"><h4>FAZER O TESTE</h4></button></a>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="Depoimentos">
                    <h2>Depoimentos</h2>
                    <p>Veja o que estão falando de nós</p>
                    <br />
                    <br />
                    <div className="BoxDepoimentos">

                        <div className="BoxTexto">
                            <div className="Depo">
                                <p>“Fui aluno do SENAI Informática de </p>
                                <p>1999, mas ainda tenho ótimas </p>
                                <p>memórias da época de estudei lá. </p>
                                <p>Hoje sou CEO da Itaú Personalitte e </p>
                                <p>tudo graças ao maravilhoso curso </p>
                                <p>técnico de desenvolviment de </p>
                                <p>sistemas. Só tenho a agradecer essa</p>
                                <p>maravilhoso instituição que pôde me</p>
                                <p>dar essa oportunidade de crescer </p>
                                <p>como profissional e como ser </p>
                                <p>humano.</p>
                                <p>Muito sucesso para a equipe SENAI!”</p>
                            </div>
                            <h5 className="NomeDepo">Alberto Blablabla - CEO Itaú</h5>
                        </div>

                        <div className="BoxTexto">
                            <div className="Depo">
                                <p>“SENAI foi muito importante para a </p>
                                <p>minha formação. Comecei fazendo </p>
                                <p>cursos de redes e hoje trabalho</p>
                                <p>instalando roteadores de fibra ótica</p>
                                <p>da vivo.</p>
                                <p>Muito obrigado SENAI por fazer isso</p>
                                <p>ser possível! :)”</p>
                            </div>
                            <h5 className="NomeDepo">Reinaldo Blablabla - Analista de Redes</h5>
                        </div>

                        <div className="BoxTexto">
                            <div className="Depo">
                                <p>“Depois de algumas delisusões da</p>
                                <p>área da docencia decidi fazer o curso</p>
                                <p>de desenvolvimento de sistemas. </p>
                                <p>Nunca achei que poderia me</p>
                                <p>encontrar numa área que parecia ser</p>
                                <p>impossível para mim. Agradeço ao </p>
                                <p>SENAI e seu corpo docente que </p>
                                <p>estão tornando a minha formação </p>
                                <p>cada vez mais concreta. Hoje posso</p>
                                <p>ainda ser u estudante, mas tenho</p>
                                <p>certeza que terei todas a chances </p>
                                <p>que precias.</p>
                                <p>Obrigado SENAI.”</p>
                            </div>
                            <h5 className="NomeDepo">Oswaldo Blablabla - Estudante</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    );
}