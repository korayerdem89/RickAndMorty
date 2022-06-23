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
            title: "EPISODES",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: COLORS.secondary },
            headerTintColor:COLORS.secondary
          }}
        />
         <Stack.Screen
          options={{
            title: "Character List",
            headerStyle: { backgroundColor:"white"},
            headerTitleStyle: { color: COLORS.secondary },
            headerTintColor:COLORS.secondary
          }}
          name="Episode"
          component={Episode}
        />  
        <Stack.Screen
          options={{
            title: "Character Info",
            headerStyle: { backgroundColor: "white"},
            headerTitleStyle: { color: COLORS.secondary },
            headerTintColor:COLORS.secondary
          }}
          name="Character"
          component={Character}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
