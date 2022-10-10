import QuoteForm from "../components/Quotes/QuoteForm";

function AddQuote({ route, navigation }) {
  function createQuoteHandler() {}
  const bookToRate = route.params.bookId;
  return <QuoteForm bookToRate={bookToRate} />;
}

export default AddQuote;
