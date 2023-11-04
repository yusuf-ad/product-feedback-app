import { useNewFeedback } from "../../contexts/NewFeedbackContext";
import Error from "../UI/Error";

function InputField() {
  const { titleInput, title, dispatch, errorMsg } = useNewFeedback();

  function handleChange(e) {
    dispatch({ type: "changeTitle", payload: e.target.value });

    if (!e.target.value.trim())
      dispatch({ type: "error", payload: "Can't be empty" });
    else dispatch({ type: "error", payload: "" });
  }

  return (
    <div>
      <label className="font-bold text-lg" htmlFor="title">
        Feedback Title
      </label>
      <p className="text-gray-600 ">Add a short, descriptive headline</p>
      <input
        ref={titleInput}
        value={title}
        onChange={handleChange}
        className={`shadow-sm mt-5 bg-grey-light px-6 h-14 rounded-md w-full ${
          errorMsg
            ? "outline-red-default/70 text-red-default"
            : "outline-purple-default/50"
        }`}
        id="title"
        type="text"
      />
      {errorMsg && <Error message="Can't be empty" />}
    </div>
  );
}

export default InputField;
