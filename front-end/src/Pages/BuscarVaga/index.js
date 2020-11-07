import React,{useEffect,useState}from 'react';

import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import AccessMenu from '../../Components/AccessMenu';
import Footer from '../../Components/Footer';
import Input from '../../Components/Input';

import imgEmpresa from '../../assets/Teste.png'
import Tag from '../../Components/Tag/Index';
import InfoVaga from '../../Components/InfoVaga/Index';
import imgDesenvolvimento from '../../assets/web-programming.png';
import imgLocalizacao from '../../assets/big-map-placeholder-outlined-symbol-of-interface.png';
import imgSalario from '../../assets/money (1).png';
import imgTipoContrato from '../../assets/gears.png';
import imgFuncao from '../../assets/rocket-launch.png';
import IconEmpresa from '../../assets/building.png';

import banner from '../../assets/bannerBuscarVagas.png';

import './style.css';

export default function BuscarVaga(){
    
    const [ListVagas, SetListVagas] = useState([]);
    const [Tecologias, SetTecnologia] = useState([]);

    
    useEffect(() => {
        listarVagas();
    }, []);

    const listarVagas = () => {
        fetch('http://localhost:5000/api/Vagas/ListarVagasPublicadas', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetTecnologia(dados.tecnologias)
                SetListVagas(dados);
            })
            .catch(err => console.error(err));
    }

    const listarTecnologias = () => {
        fetch('http://localhost:5000/api/Empresa/ListarTecnologia', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(dados => {
                SetTecnologia(dados)
            })
            .catch(err => console.error(err));
    }


    return(
        <body>
            <AccessBar />
            <Header />
            <AccessMenu />

            <div className="content-searchJobs">
                <div>
                    <Input label="Busque sua vaga aqui" type="text" placeholder="Ex.: Desenvolvedor" />
                    <button class="fa fa-search btn-search"></button>
                    <img src={banner} alt="Pessoa utilizando um computador, que está em cima de uma mesa" className="imgBackground-searchJobs"/>
                </div>

                <div className="vagas">
                {
                    ListVagas.map((item) => {
                        return (
                            <div key={item.idVaga} className="vaga">
                                <div className="VagaCompleta">
                                    <img src={imgEmpresa} className="ImagemEmpresa" alt=""></img>
                                    <div className="MainVaga">
                                        <h3>Titulo da vaga</h3>
                                        <div className="InfoVagas">
                                            <InfoVaga NomeProp={item.razaoSocial} source={IconEmpresa} />
                                            <InfoVaga NomeProp={item.localidade} source={imgLocalizacao} />
                                            <InfoVaga NomeProp={item.experiencia} source={imgFuncao} />
                                            <InfoVaga NomeProp={item.tipoContrato} source={imgTipoContrato} />
                                            <InfoVaga NomeProp={item.salario} source={imgSalario} />
                                            <InfoVaga NomeProp={item.nomeArea} source={imgDesenvolvimento} />
                                        </div>
                                        <div className="TecnologiasVaga">
                                            {item.tecnologias.map((tec) => {
                                                return (
                                                    <Tag key={tec}  NomeTag={tec}></Tag>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <Footer />
        </body>
    );
}