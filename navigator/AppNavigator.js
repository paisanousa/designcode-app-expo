import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const CoursesStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Courses"
      component={CoursesScreen}
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
      component={ProjectsScreen}
      options={{
        title: "Projects", // not necessary, name is default
      }}
    />
  </Stack.Navigator>
);

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
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
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
      <Stack.Screen name="Home" component={HomeTabs} />
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
