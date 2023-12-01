import DropdownButton from "../UI/DropdownButton";

function SelectionField({
  select = "Category",
  selectMsg = "Choose a category for your feedback",
  menuItems,
}) {
  return (
    <div>
      <label className="font-bold text-lg" htmlFor="category">
        {select}
      </label>
      <p className="text-gray-600 ">{selectMsg}</p>

      <DropdownButton menuItems={menuItems} />
    </div>
  );
}

export default SelectionField;
