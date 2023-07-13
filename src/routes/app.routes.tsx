import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Solicitacoes } from "../screens/Solicitacoes";
import { SolicitacoesForm } from "../screens/SolicitacoesForm";
import { SolicitacoesList } from "../screens/SolicitacoesList";
import { Dashboard } from "../screens/dashboard";
import { Solicitacao } from "../screens/solicitacao";

const App = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator>
      <App.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="Solicitacoes"
        component={Solicitacoes}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="SolicitacoesForm"
        component={SolicitacoesForm}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="SolicitacoesList"
        component={SolicitacoesList}
      />
      <App.Screen
        options={{ headerShown: false }}
        name="Solicitacao"
        component={Solicitacao}
      />
    </App.Navigator>
  );
}
