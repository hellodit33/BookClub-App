import { Image, Pressable, View, Text, StyleSheet } from "react-native";

function QuoteItem({ quote, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: quote.imageUri }} />
        <View>
          <Text>{quote.title}</Text>
          <Text>{quote.book}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default QuoteItem;

const styles = StyleSheet.create({});
