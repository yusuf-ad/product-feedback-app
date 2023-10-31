import { useRef, useState } from "react";

const sortItems = [
  "Most upvotes",
  "Least upvotes",
  "Most comments",
  "Least comments",
];

function SortButton() {
  const [sortBy, setSortBy] = useState("Most upvotes");

  const sortList = useRef(null);
  const sortByContent = useRef(null);

  function handleClick(e) {
    sortList.current.classList.toggle("active");

    const sortItem = e.target.closest(".sortItem");

    if (!sortItem) return;

    setSortBy(sortItem.textContent);
  }

  return (
    <div onClick={handleClick} className="relative flex items-center mt-1">
      <button className="text-white hover:text-grey-hover">
        <p>
          Sort by:{" "}
          <span ref={sortByContent} className="font-bold mr-2">
            {sortBy}
          </span>
          <span>
            <i className="text-xs fa-solid fa-chevron-down"></i>
          </span>
        </p>
      </button>
      <div
        ref={sortList}
        className="absolute rounded-xl w-56 bg-white shadow-sm top-0 pointer-events-none opacity-0 "
      >
        <ul>
          {sortItems.map((item) => (
            <SortItem key={item} isActive={sortBy === item}>
              {item}
            </SortItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SortItem({ isActive, children }) {
  return (
    <li className="sortItem">
      {children}
      {isActive && (
        <span className="text-purple-default">
          <i className="fa-solid fa-check"></i>
        </span>
      )}
    </li>
  );
}

export default SortButton;
