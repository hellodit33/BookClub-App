import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "purple" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "purple" },
          }}
        >
          <Stack.Screen
            name="Default"
            component={DefaultScreen}
            options={{
              title: "Bokklubben!",
            }}
          />
          <Stack.Screen
            name="Years"
            component={YearsScreen}
            options={{
              title: "Åren",
            }}
          />
          <Stack.Screen name="BooksOverview" component={BooksOverviewScreen} />
          <Stack.Screen
            name="BookDetailsScreen"
            component={BookDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
