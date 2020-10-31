import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
<<<<<<< HEAD
import Sobre from './Pages/Sobre';
import CadastrarColaborador from './Pages/CadastrarColaborador';
=======
import VagasPublicadas from './Pages/ListarVagasPublicadas/Index';
import CadastarVaga from './Pages/CadastrarVaga/Index';
import Estagio from './Pages/Estagio/Index';
import TesteDePesonalidade from './Pages/TesteDePersonalidade/Index';
import VizualizarVagaEmpresa from './Pages/VizualizarVagaEmpresa';
import CadastroCandidato from './Pages/CadastroCandidato';
import CadastroEmpresa from './Pages/CadastroEmpresa';
>>>>>>> 74ef12fff6d423119b929b78e122e825b5aecd9a

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
<<<<<<< HEAD
            <Route path="/sobre" component={Sobre} />
            <Route path="/colaboradores" component={CadastrarColaborador} />
=======
            <Route path="/VagasPublicadas" component={VagasPublicadas} />
            <Route path="/CadastrarVaga" component={CadastarVaga} />
            <Route path="/Estagio" component={Estagio} />
            <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
            <Route path="/VagaEmpresa" component={VizualizarVagaEmpresa}/>
            <Route path="/cadastro" component={CadastroCandidato} />
            <Route path="/cadastroempresa" component={CadastroEmpresa} />
>>>>>>> 74ef12fff6d423119b929b78e122e825b5aecd9a
        </BrowserRouter>
    );
}

export default Routes;