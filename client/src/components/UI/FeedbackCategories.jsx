import { useFeedbacks } from "../../contexts/FeedbacksContext";

const categoryList = ["All", "UI", "UX", "Enhancement", "Feature", "Bug"];

export function FeedbackCategories() {
  const { activeFilter: active, setActiveFilter: setActive } = useFeedbacks();

  function handleClick(category) {
    setActive(category);
  }

  return (
    <div className="mt-8 rounded-xl p-6 bg-white shadow-sm">
      <ul className="flex flex-wrap gap-4">
        {categoryList.map((category) => (
          <FeedbackCategory
            key={category}
            category={category}
            isActive={active === category}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

function FeedbackCategory({ category, isActive, handleClick }) {
  return (
    <li
      onClick={() => handleClick(category)}
      className={`feedbackCategory  ${
        isActive ? "bg-blue-default text-white" : "hover:bg-grey-hover "
      } `}
    >
      {category}
    </li>
  );
}
