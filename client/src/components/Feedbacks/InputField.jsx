import Error from "../UI/Error";

function InputField({ titleInput, title, setTitle, error, setError }) {
  function handleChange(e) {
    setTitle(e.target.value);

    if (!e.target.value.trim()) setError("Can't be empty");
    else setError("");
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
          error
            ? "outline-red-default/70 text-red-default"
            : "outline-purple-default/50"
        }`}
        id="title"
        type="text"
      />
      {error && <Error message="Can't be empty" />}
    </div>
  );
}

export default InputField;
