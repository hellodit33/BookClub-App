import { useContext, useEffect, useState } from "react";
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
import IconButton from "./components/IconButton";
import Suggestions from "./screens/Suggestions";
import User from "./screens/User";
import RateItem from "./screens/RateItem";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.lightgreen },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.darkgreen },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function BottomNav() {
  const authCtx = useContext(AuthContext);

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.saumon },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.saumon },
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.middlebrown,
        headerRight: () => (
          <View style={styles.headerRight}>
            <IconButton
              icon="person"
              size={20}
              color={Colors.red}
              onPress={() => {
                navigation.navigate("User");
              }}
            />

            <IconButton
              icon="log-out"
              size={20}
              color={Colors.red}
              onPress={authCtx.logout}
            />
          </View>
        ),
      })}
    >
      <BottomTabs.Screen
        name="Default"
        component={DefaultScreen}
        options={{
          title: "Bokklubben",
          tabBarLabel: "Hem",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Suggestions"
        component={Suggestions}
        options={{
          title: "Bokförslag",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      ></BottomTabs.Screen>

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

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.saumon },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.beige },
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
      <Stack.Screen name="BooksOverview" component={BooksOverviewScreen} />
      <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
      <Stack.Screen
        name="User"
        component={User}
        options={{ presentation: "modal", title: "Min profil" }}
      />
      <Stack.Screen
        name="RateItem"
        component={RateItem}
        options={{ presentation: "modal", title: "Ge ett betyg" }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <ToReadContextProvider>
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
    </ToReadContextProvider>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }
  return <Navigation />;
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    paddingRight: 5,
  },
});
