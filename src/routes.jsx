import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/telainicial/Home";
import { Dados } from "./screens/dadosprevisao/Dados";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="dados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
