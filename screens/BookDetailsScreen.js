import { Text, View, Image } from "react-native";
import { BOOKS } from "../data/data";
import BookDetails from "./BookDetails";

function BookDetailsScreen({ route }) {
  const bookId = route.params.bookId;

  const selectedBook = BOOKS.find((book) => book.id === bookId);
  return (
    <View>
      <Image source={{ uri: selectedBook.imageUrl }} />
      <Text>{selectedBook.title}</Text>
      <View>
        <BookDetails
          rating={selectedBook.rating}
          pages={selectedBook.pages}
          synopsis={selectedBook.synopsis}
        />
      </View>
    </View>
  );
}

export default BookDetailsScreen;
