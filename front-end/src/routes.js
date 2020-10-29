import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CadastarVaga from './Pages/CadastrarVaga/Index';
import Estagio from './Pages/Estagio/Index';

import Home from './Pages/Home';
import VagasPublicadas from './Pages/ListarVagasPublicadas/Index';
import Login from './Pages/Login';
import TesteDePesonalidade from './Pages/TesteDePersonalidade/Index';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/VagasPublicadas" component={VagasPublicadas} />
            <Route path="/CadastrarVaga" component={CadastarVaga} />
            <Route path="/Estagio" component={Estagio} />
            <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
        </BrowserRouter>
    );
}

export default Routes;