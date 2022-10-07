import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import SuggestionItem from "./SuggestionItem";
import SuggestionInput from "./SuggestionInput";
import Colors from "../constants/colors";
import { useContext, useEffect, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/context/auth-context";
import LocationPicker from "../components/BookclubEvent/BookClubLocation";
import BookClubLocation from "../components/BookclubEvent/BookClubLocation";
import FlatButton from "../UI/FlatButton";

function DefaultScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const [pickedLocation, setPickedLocation] = useState();

  const authCtx = useContext(AuthContext);

  const token = authCtx.token;
  useEffect(() => {
    axios
      .get(
        "https://bookclub-course-default-rtdb.firebaseio.com//message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      }),
      [];
  });
  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickLocationHandler(location) {
    setPickedLocation(location);
  }

  function saveBookclub() {
    console.log(pickedLocation);
  }

  return (
    <>
      <StatusBar style="light" />

      <LinearGradient
        colors={[Colors.saumon, Colors.middlebrown, Colors.lightbrown]}
        style={styles.appContainer}
      >
        <ImageBackground
          source={require("../assets/images/booksBackground.jpg")}
          style={styles.appBackground}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.firstScreen}>
            <View style={[styles.month, styles.book]}>
              <Text>{fetchedMessage}</Text>
              <Text>Månadens bok:</Text>
              <TextInput>Decamerone</TextInput>
              <TextInput keyboardType="default">13/11/2022</TextInput>
              <View>
                <BookClubLocation onPickLocation={pickLocationHandler} />
                <FlatButton
                  color={Colors.brown}
                  size={24}
                  onPress={saveBookclub}
                >
                  Spara
                </FlatButton>
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default DefaultScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#A6C48A",
  },
  firstScreen: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 10,
    padding: deviceWidth < 380 ? 12 : 16,
  },
  title: {
    fontFamily: "open-sans",
    marginTop: 50,
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
    maxWidth: "80%",
  },
  month: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  book: {
    alignItems: "center",
    width: "80%",
    marginTop: 100,
    fontFamily: "open-sans-bold",
  },
  suggestion: {
    alignItems: "center",
  },
  list: {
    flex: 3,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  appBackground: {
    flex: 1,
  },
  button: {
    padding: 20,
  },
});
