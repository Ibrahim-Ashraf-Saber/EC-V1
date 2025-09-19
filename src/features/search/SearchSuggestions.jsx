import SuggestionsItem from "./SuggestionsItem";

function SearchSuggestions({ suggestionsProducts }) {
  return (
    <div className="absolute top-full left-0 z-50 w-full divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white shadow-lg">
      {suggestionsProducts.slice(0, 5).map((product) => (
        <SuggestionsItem key={product.id} item={product} />
      ))}
    </div>
  );
}

export default SearchSuggestions;
