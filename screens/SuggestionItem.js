import { StyleSheet, Text, View, Pressable } from "react-native";
function SuggestionItem(props) {
  return (
    <View style={styles.suggestionItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "black" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.suggestionText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default SuggestionItem;

const styles = StyleSheet.create({
  suggestionItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
    color: "black",
  },
  suggestionText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
