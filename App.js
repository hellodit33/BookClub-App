import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ImageBackground,
  Dimensions,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import SuggestionItem from "./screens/SuggestionItem";
import SuggestionInput from "./screens/SuggestionInput";
import YearsScreen from "./screens/YearsScreen";
import BooksOverviewScreen from "./screens/BooksOverviewScreen";
import DefaultScreen from "./screens/DefaultScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";
import ToReadScreen from "./screens/ToReadScreen";
import ToReadContextProvider from "./store/context/toread-context";
import Colors from "./constants/colors";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNav() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.beige },
        headerTintColor: Colors.darkgreen,
        tabBarStyle: { backgroundColor: Colors.beige },
        tabBarActiveTintColor: Colors.darkgreen,
        tabBarInactiveTintColor: Colors.saumon,
      }}
    >
      <BottomTabs.Screen
        name="Default"
        component={DefaultScreen}
        options={{
          title: "Bokklubben",
          tabBarLabel: "Hem",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Years"
        component={YearsScreen}
        options={{
          title: "Historik",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      ></BottomTabs.Screen>

      <BottomTabs.Screen
        name="ToRead"
        component={ToReadScreen}
        options={{
          title: "Att läsa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      ></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTintColor: "grey",
        sceneContainerStyle: { backgroundColor: "white" },
        drawerContentStyle: { backgroundColor: "white" },
        drawerInactiveTintColor: "purple",
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "purple",
      }}
    >
      <Drawer.Screen
        name="Years"
        component={YearsScreen}
        options={{
          title: "Åren",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="ToRead"
        component={ToReadScreen}
        options={{
          title: "Böcker att läsa",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size}></Ionicons>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ToReadContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "purple" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "purple" },
            }}
          >
            <Stack.Screen
              name="BottomTabss"
              component={BottomNav}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="BooksOverview"
              component={BooksOverviewScreen}
            />
            <Stack.Screen
              name="BookDetailsScreen"
              component={BookDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ToReadContextProvider>
    </>
  );
}
