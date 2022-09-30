import { View, Text, StyleSheet } from "react-native";

function BookDetails({ synopsis, rating, pages, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle, styles.synopsis]}>
        {synopsis}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>{pages} sidor</Text>
      <Text style={[styles.detailItem, textStyle]}>
        Vårt betyg: {rating} / 10
      </Text>
    </View>
  );
}

export default BookDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  detailItem: {
    fontWeight: "bold",
    marginHorizontal: 4,
    fontSize: 20,
  },
  synopsis: {
    color: "white",
    fontSize: 15,
    margin: 6,
  },
});
