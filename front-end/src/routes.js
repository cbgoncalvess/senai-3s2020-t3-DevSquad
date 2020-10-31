import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Sobre from './Pages/Sobre';
import CadastrarColaborador from './Pages/CadastrarColaborador';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/colaboradores" component={CadastrarColaborador} />
        </BrowserRouter>
    );
}

export default Routes;