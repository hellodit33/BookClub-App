import QuotesList from "../components/Quotes/QuotesList";

function AllQuotes({ route }) {
  const bookToRate = route.params.bookId;
  return <QuotesList bookToRate={bookToRate} />;
}

export default AllQuotes;
