import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import BookItem from "../components/BookItem.js";
import { BOOKS, YEARS } from "../data/data.js";

function BooksOverviewScreen({ route, navigation }) {
  const year = route.params.year;
  const catId = route.params.categoryId;

  const displayedBooks = BOOKS.filter((bookItem) => {
    return bookItem.categoryIds === catId;
  });
  useLayoutEffect(() => {
    const categoryYear = YEARS.find((category) => category.id === catId).year;

    navigation.setOptions({
      title: "Böckerna vi läst " + categoryYear,
    });
  }, [catId, navigation]);

  function renderBookItem(itemData) {
    const item = itemData.item;
    const bookItemProps = {
      id: item.id,
      title: item.title,
      image: item.imageUrl,
      type: item.type,
      rating: item.rating,
    };
    return <BookItem {...bookItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedBooks}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
      ></FlatList>
    </View>
  );
}

export default BooksOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
