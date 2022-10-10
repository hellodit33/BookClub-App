import { useState } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import { Quote } from "../../models/quote";
import FlatButton from "../../UI/FlatButton";
import LocationPicker from "../BookclubEvent/BookClubLocation";
import ImagePicker from "./ImagePicker";

function QuoteForm({ onCreateQuote, bookToRate }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedPic, setSelectedPic] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function takePicHandler(imageUri) {
    setSelectedPic(imageUri);
  }

  function saveQuote() {
    const quoteData = new Quote(enteredTitle, selectedPic);
    onCreateQuote();
  }
  return (
    <ScrollView>
      <Text>Title</Text>
      <TextInput
        onChangeText={changeTitleHandler}
        value={enteredTitle}
      ></TextInput>
      <Text>{bookToRate}</Text>
      <ImagePicker onTakePic={takePicHandler} />
      <FlatButton onPress={saveQuote}>Spara citatet</FlatButton>
    </ScrollView>
  );
}

export default QuoteForm;
