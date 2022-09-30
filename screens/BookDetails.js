import { View, Text, StyleSheet } from "react-native";

function BookDetails({ synopsis, rating, pages }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{synopsis}</Text>
      <Text style={styles.detailItem}>{pages}</Text>
      <Text style={styles.detailItem}>{rating}</Text>
    </View>
  );
}

export default BookDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  detailItem: {
    fontWeight: "bold",
    marginHorizontal: 4,
    fontSize: 20,
  },
});
