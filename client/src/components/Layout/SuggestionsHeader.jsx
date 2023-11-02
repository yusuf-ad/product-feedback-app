import { Link } from "react-router-dom";
import SortButton from "../UI/SortButton";

export function SuggestionsHeader({ numFeedbacks }) {
  return (
    <header className="px-6 py-4 bg-grey-darker rounded-xl flex gap-8  ">
      <div className="flex items-center gap-4">
        <img src="./assets/suggestions/icon-suggestions.svg" alt="bulb" />
        <p className="font-bold mt-1 text-white">{numFeedbacks} Suggestions</p>
      </div>

      <SortButton />

      <Link to="/feedback/add" className="ml-auto">
        <button className="btn  bg-purple-default   hover:bg-purple-hover">
          <i className="text-xs  fa-solid fa-plus"></i>
          <span className="ml-2">Add Feedback</span>
        </button>
      </Link>
    </header>
  );
}
