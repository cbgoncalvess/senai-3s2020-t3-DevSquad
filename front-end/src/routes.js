import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CadastarVaga from './Pages/CadastrarVaga/Index';
import Estagio from './Pages/Estagio/Index';

import Home from './Pages/Home';
import VagasPublicadas from './Pages/ListarVagasPublicadas/Index';
import Login from './Pages/Login';
<<<<<<< HEAD
import TesteDePesonalidade from './Pages/TesteDePersonalidade/Index';
import VizualizarVagaEmpresa from './Pages/VizualizarVagaEmpresa';
=======
import CadastroCandidato from './Pages/CadastroCandidato';
import CadastroEmpresa from './Pages/CadastroEmpresa';
>>>>>>> 8f95b7fa2a7d955e009c579eeb033e046390d4f4

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
<<<<<<< HEAD
            <Route path="/VagasPublicadas" component={VagasPublicadas} />
            <Route path="/CadastrarVaga" component={CadastarVaga} />
            <Route path="/Estagio" component={Estagio} />
            <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
            <Route path="/VagaEmpresa" component={VizualizarVagaEmpresa}/>
=======
            <Route path="/cadastro" component={CadastroCandidato} />
            <Route path="/cadastroempresa" component={CadastroEmpresa} />
>>>>>>> 8f95b7fa2a7d955e009c579eeb033e046390d4f4
        </BrowserRouter>
    );
}

export default Routes;