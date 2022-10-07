import QuoteForm from "../components/Quotes/QuoteForm";

function AddQuote({ route }) {
  const bookToRate = route.params.bookId;
  return <QuoteForm bookToRate={bookToRate} />;
}

export default AddQuote;
