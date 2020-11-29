import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import VizualizarVagaEmpresa from './Pages/VizualizarVagaEmpresa/index'
import VizualizarCandidatosAprovados from "./Pages/VizualizarCandidatosAprovados";
import ListarVagasEmpresa from "./Pages/ListarVagasEmpresa";

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListarVagaEmpresa">
          <Stack.Screen name="ListarVagaEmpresa" component={ListarVagasEmpresa}/>
          <Stack.Screen name="VagaEmpresa" component={VizualizarVagaEmpresa}/>
          <Stack.Screen name="CandidatosAprovados" component={VizualizarCandidatosAprovados}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


