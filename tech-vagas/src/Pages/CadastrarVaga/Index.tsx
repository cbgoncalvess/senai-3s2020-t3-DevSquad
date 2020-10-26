import React from 'react';
import AccessBar from '../../Components/AccessBar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './style.css';
import Input from '../../Components/Input/Index';


export default function VagasPublicadas() {
    return (
        <body>
            <AccessBar />
            <Header />
            <div className="bodyPart">
                <div className="ModalCadastro">
                    <h2>Divulgue sua vaga aqui</h2>
                    <form>
                    <Input name="TituloVaga" label="Titulo da Vaga" />
                    <Input name="TituloVaga" label="Titulo da Vaga" />
                    <Input name="TituloVaga" label="Titulo da Vaga" />
                    <Input name="TituloVaga" label="Titulo da Vaga" />
                    </form>
                </div>
            </div>
            <Footer />
        </body>
    );
}