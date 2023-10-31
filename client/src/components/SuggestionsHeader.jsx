import SortButton from "./SortButton";

export function SuggestionsHeader() {
  return (
    <header className="px-6 py-4 bg-grey-darker rounded-xl flex gap-8  ">
      <div className="flex items-center gap-4">
        <img
          src="./public/assets/suggestions/icon-suggestions.svg"
          alt="bulb"
        />
        <p className="font-bold mt-1 text-white">0 Suggestions</p>
      </div>

      <SortButton />

      <button className="py-3 px-6 text-white font-bold rounded-xl  bg-purple-default ml-auto transition-colors duration-300 hover:bg-purple-hover">
        <i className="text-xs  fa-solid fa-plus"></i>
        <span className="ml-2">Add Feedback</span>
      </button>
    </header>
  );
}
