import { Link } from "react-router-dom";

function SuggestionsItem({ item }) {
  return (
    <Link
      to={`/products/${item.id}`}
      className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <img
        className="h-12 w-12 rounded-md object-contain"
        src={item.images[0]}
        alt="Product"
      />
      <div className="flex flex-col">
        <p className="line-clamp-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {item.title}
        </p>
        <span className="line-clamp-1 text-xs text-gray-500 capitalize dark:text-gray-400">
          {item.category.replace("-", " ")}
        </span>
      </div>
    </Link>
  );
}

export default SuggestionsItem;
