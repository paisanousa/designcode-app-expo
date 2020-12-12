import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home", // not necessary, name is default
        }}
      />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        options={{
          title: "Section", // not necessary, name is default
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
