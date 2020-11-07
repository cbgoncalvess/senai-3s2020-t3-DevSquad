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
<<<<<<< HEAD
import perfilCandidato from './Pages/PerfilCandidato';
import perfilEmpresa from './Pages/PerfilEmpresa';
import BuscarVagas from './Pages/BuscarVaga';
import Teste from './Pages/Teste';
import perfilAdm from './Pages/PerfilAdm/index';

=======
import Banidos from './Pages/ListaBanidos';
import Perfil from './Pages/PerfilAdm';
import perfilCandidato from './Pages/PerfilCandidato';
import perfilEmpresa from './Pages/PerfilEmpresa';
import BuscarVagas from './Pages/BuscarVaga';
import VisualizarVagaCandidato from './Pages/VisualizarVagaCandidato';
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 1ff94155811e23540b69588c33507eb45f76843a
>>>>>>> 922b7db9be4e61dfc4bf824f731240164b9eb6fc
>>>>>>> f93eae7209b921875cb1e3b508e37bd99a5b64ad
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
<<<<<<< HEAD
            <Route path="/perfil" component={perfilAdm} />
=======
            <Route path="/colaboradores" component={Colaboradores} />
            <Route path="/banidos" component={Banidos} />
            <Route path="/perfil" component={Perfil} />
>>>>>>> 1ff94155811e23540b69588c33507eb45f76843a
            <Route path="/perfilCandidato" component={perfilCandidato} />
            <Route path="/perfilEmpresa" component={perfilEmpresa} />
            <Route path="/principal" component={BuscarVagas} />
            <Route path="/VisualizarVagaCandidato" component={VisualizarVagaCandidato} />
        </BrowserRouter>
    );
}

export default Routes;