import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import { usuarioAutenticado } from "./services/token";

import Banidos from "./Pages/ListaBanidos";
import BuscarVagas from "./Pages/BuscarVaga";
import CadastrarVaga from "./Pages/CadastrarVaga/Index";
import CadastroCandidato from "./Pages/CadastroCandidato";
import CadastroEmpresa from "./Pages/CadastroEmpresa";
import Colaboradores from "./Pages/CadastrarColaborador";
import Estagio from "./Pages/Estagio/Index";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Perfil from "./Pages/PerfilAdm";
import PerfilCandidato from "./Pages/PerfilCandidato";
import PerfilEmpresa from "./Pages/PerfilEmpresa";
import Sobre from "./Pages/Sobre";
import TesteDePesonalidade from "./Pages/TesteDePersonalidade/Index";
import VagasPublicadas from "./Pages/ListarVagasPublicadas/Index";
import VisualizarVagaCandidato from "./Pages/VisualizarVagaCandidato";
import VizualizarVagaEmpresa from "./Pages/VizualizarVagaEmpresa";
import ListarCandidatosInscritos from "./Pages/ListarCandidatosInscritosAdmin";
import DashboardInscricaoCandidato from "./Pages/DashbordInscricaoCandidato";
import CadastrarEstagiario from "./Pages/CadastrarEstagiario";
import Unauthorized from "./Pages/Unauthorized";
import VizualizarCandidatosAprovados from "./Pages/CandidatosAprovados";

/*const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      usuarioAutenticado() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/unauthorized", state: { from: props.location } }}
        />
      )
    }
  />;
};*/

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/banidos" component={Banidos} />
        <Route
          path="/candidatosAprovados"
          component={VizualizarCandidatosAprovados}
        />
        <Route path="/principal" component={BuscarVagas} />
        <Route path="/cadastro/vaga" component={CadastrarVaga} />
        <Route path="/cadastro/Estagio" component={CadastrarEstagiario} />
        <Route path="/cadastro" exact component={CadastroCandidato} />
        <Route path="/cadastro/empresa" component={CadastroEmpresa} />
        <Route path="/colaboradores" component={Colaboradores} />
        <Route path="/Estagio" component={Estagio} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/perfilCandidato" component={PerfilCandidato} />
        <Route path="/perfilEmpresa" component={PerfilEmpresa} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
        <Route path="/VagasPublicadas" component={VagasPublicadas} />
        <Route
          path="/VisualizarVagaCandidato"
          component={VisualizarVagaCandidato}
        />
        <Route path="/VagaEmpresa" component={VizualizarVagaEmpresa} />
        <Route
          path="/VizualizarVagaAdmin"
          component={ListarCandidatosInscritos}
        />
        <Route
          path="/DashboardInscricaoCandidato"
          component={DashboardInscricaoCandidato}
        />
        <Route path="/unauthorized" component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
