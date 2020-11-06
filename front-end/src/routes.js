import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Login from './Pages/Login';
import VagasPublicadas from './Pages/ListarVagasPublicadas/Index';
import CadastarVaga from './Pages/CadastrarVaga/Index';
import Estagio from './Pages/Estagio/Index';
import TesteDePesonalidade from './Pages/TesteDePersonalidade/Index';
import VizualizarVagaEmpresa from './Pages/VizualizarVagaEmpresa';
import Colaboradores from './Pages/CadastrarColaborador';
import CadastroCandidato from './Pages/CadastroCandidato';
import CadastroEmpresa from './Pages/CadastroEmpresa';
import Banidos from './Pages/ListaBanidos';
import Perfil from './Pages/PerfilAdm';
import perfilCandidato from './Pages/PerfilCandidato';
import perfilEmpresa from './Pages/PerfilEmpresa';
import BuscarVagas from './Pages/BuscarVaga';
<<<<<<< HEAD
import VisualizarVagaCandidato from './Pages/VisualizarVagaCandidato';
=======
import Teste from './Pages/Teste';

>>>>>>> 1d36fecc42800e8de31efaba0b57fc5ffefaf878
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/login" component={Login} />
            <Route path="/VagasPublicadas" component={VagasPublicadas} />
            <Route path="/CadastrarVaga" component={CadastarVaga} />
            <Route path="/Estagio" component={Estagio} />
            <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
            <Route path="/VagaEmpresa" component={VizualizarVagaEmpresa}/>
            <Route path="/cadastro" component={CadastroCandidato} />
            <Route path="/cadastroempresa" component={CadastroEmpresa} />
            <Route path="/colaboradores" component={Colaboradores} />
            <Route path="/banidos" component={Banidos} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/perfilCandidato" component={perfilCandidato} />
            <Route path="/perfilEmpresa" component={perfilEmpresa} />
            <Route path="/principal" component={BuscarVagas} />
<<<<<<< HEAD
            <Route path="/VisualizarVagaCandidato" component={VisualizarVagaCandidato} />
=======
            <Route path="/teste" component={Teste} />
>>>>>>> 1d36fecc42800e8de31efaba0b57fc5ffefaf878
        </BrowserRouter>
    );
}

export default Routes;