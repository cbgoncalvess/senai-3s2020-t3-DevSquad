import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Estagio from './Pages/Estagio/Index';

import Home from './Pages/Home';
import Login from './Pages/Login';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Estagio" component={Estagio} />
        </BrowserRouter>
    );
}

export default Routes;