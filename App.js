import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/pages/MainScreen";
import COLORS from "./src/assets/colors";
import Episode from "./src/pages/Episode";
import Character from "./src/pages/Character";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: "Rick And Morty",
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle: { color: "white" },
            headerTintColor:"white"
          }}
        />
         <Stack.Screen
          options={{
            title: "Character Page",
            headerStyle: { backgroundColor: COLORS.primary},
            headerTitleStyle: { color: "white" },
            headerTintColor:"white"
          }}
          name="Episode"
          component={Episode}
        />  
        <Stack.Screen
          options={{
            title: "Character",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
            headerTintColor:"white"
          }}
          name="Character"
          component={Character}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
