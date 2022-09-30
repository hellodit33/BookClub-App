import { useState } from "react";

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

import SuggestionItem from "./SuggestionItem";
import SuggestionInput from "./SuggestionInput";

function DefaultScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Drawer");
  }
  const [suggestionsList, setSuggestionsList] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function openModal() {
    setModalIsVisible(true);
  }
  function closeModal() {
    setModalIsVisible(false);
  }
  function addSuggestionHandler(enteredSuggestionText) {
    setSuggestionsList((currentSuggestions) => [
      ...currentSuggestions,
      { text: enteredSuggestionText, id: Math.random().toString() },
    ]);
    closeModal();
  }

  function deleteSuggestionHandler(id) {
    setSuggestionsList((currentSuggestions) => {
      return currentSuggestions.filter((suggestion) => suggestion.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />

      <LinearGradient
        colors={["lightgreen", "lightblue", "lightyellow"]}
        style={styles.appContainer}
      >
        <ImageBackground
          source={require("../assets/images/booksBackground.jpg")}
          style={styles.appBackground}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.firstScreen}>
            <View style={styles.book}>
              <Text style={styles.book}>
                Månadens bok: Les particules élémentaires
              </Text>
            </View>
            <View>
              <Button
                title="Se alla böcker vi läst"
                onPress={pressHandler}
              ></Button>
            </View>
            <View style={styles.suggestion}>
              <Button
                title="Lägg till ett förslag"
                color="black"
                onPress={openModal}
              />

              <SuggestionInput
                onAddSuggestion={addSuggestionHandler}
                visible={modalIsVisible}
                closeModal={closeModal}
              />

              <View style={styles.list}>
                <FlatList
                  data={suggestionsList}
                  alwaysBounceVertical={false}
                  renderItem={(itemData) => {
                    return (
                      <SuggestionItem
                        text={itemData.item.text}
                        onDeleteItem={deleteSuggestionHandler}
                        id={itemData.item.id}
                      />
                    );
                  }}
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                ></FlatList>
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
    paddingTop: 50,
    padding: deviceWidth < 380 ? 12 : 16,
  },
  title: {
    fontFamily: "open-sans",
    marginTop: 50,
    paddingTop: 50,
    fontSize: 20,
    textAlign: "center",
    maxWidth: "80%",
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
});
