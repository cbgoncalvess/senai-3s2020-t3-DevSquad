import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import VizualizarVagaEmpresa from "./Pages/VizualizarVagaEmpresa/index";
import VizualizarCandidatosAprovados from "./Pages/VizualizarCandidatosAprovados";
import ListarVagasEmpresa from "./Pages/ListarVagasEmpresa";
<<<<<<< HEAD
import ListarVagasInscritas from "./Pages/ListarVagasInscritas";
=======
import Splash from "./Pages/Splash";
>>>>>>> ade6c0449de0c4ec7041cfd1a7d32726e5621214

export default function App() {
  const Stack = createStackNavigator();
  return (
<<<<<<< HEAD
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListarVagasInscritas">
          <Stack.Screen name="ListarVagaEmpresa" component={ListarVagasEmpresa}/>
          <Stack.Screen name="VagaEmpresa" component={VizualizarVagaEmpresa}/>
          <Stack.Screen name="CandidatosAprovados" component={VizualizarCandidatosAprovados}/>
          <Stack.Screen name="ListarVagasInscritas" component={ListarVagasInscritas}/>
        </Stack.Navigator>
      </NavigationContainer>
=======
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="ListarVagaEmpresa" component={ListarVagasEmpresa} />
        <Stack.Screen name="VagaEmpresa" component={VizualizarVagaEmpresa} />
        <Stack.Screen
          name="CandidatosAprovados"
          component={VizualizarCandidatosAprovados}
        />
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> ade6c0449de0c4ec7041cfd1a7d32726e5621214
  );
}
