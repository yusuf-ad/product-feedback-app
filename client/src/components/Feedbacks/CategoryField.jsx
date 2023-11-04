import DropdownButton from "../UI/DropdownButton";

function CategoryField() {
  return (
    <div>
      <label className="font-bold text-lg" htmlFor="category">
        Category
      </label>
      <p className="text-gray-600 ">Choose a category for your feedback</p>

      <DropdownButton />
    </div>
  );
}

export default CategoryField;
