import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { BOOKS } from "../data/data";
import BookDetails from "./BookDetails";
import IconButton from "../components/IconButton";

function BookDetailsScreen({ route, navigation }) {
  const bookId = route.params.bookId;

  const selectedBook = BOOKS.find((book) => book.id === bookId);

  function toRead() {
    console.log("to read!");
  }

  useLayoutEffect(() => {
    const bookName = selectedBook.title;

    navigation.setOptions({
      title: bookName,
      headerRight: () => {
        return (
          <IconButton
            title="Att läsa"
            onPress={toRead}
            icon="bookmark-outline"
            color="white"
          ></IconButton>
        );
      },
    });
  }, [selectedBook, navigation]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedBook.imageUrl }} />

      <View>
        <BookDetails
          rating={selectedBook.rating}
          pages={selectedBook.pages}
          synopsis={selectedBook.synopsis}
          textStyle={styles.textStyle}
        />
      </View>
    </ScrollView>
  );
}

export default BookDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
});
