import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = () => (
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
);

const CoursesStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Courses"
      component={SectionScreen}
      options={{
        title: "Courses", // not necessary, name is default
      }}
    />
  </Stack.Navigator>
);

const ProjectsStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Projects"
      component={SectionScreen}
      options={{
        title: "Projects", // not necessary, name is default
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home", // not necessary, name is default
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-home" size={26} color={focused ? activeColor : inactiveColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesStack}
        options={{
          tabBarLabel: "Courses", // not necessary, name is default
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-albums" size={26} color={focused ? activeColor : inactiveColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsStack}
        options={{
          tabBarLabel: "Projects", // not necessary, name is default
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-folder" size={26} color={focused ? activeColor : inactiveColor} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
