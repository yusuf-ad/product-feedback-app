import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import CategoryField from "./CategoryField";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export function FeedbackAdd({ handleAddFeedback, isLoading }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState("");
  const [detailsError, setDetailsError] = useState("");

  const navigate = useNavigate();

  const detailsInput = useRef(null);
  const titleInput = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      titleInput.current.focus();
      return setTitleError("Can't be empty");
    }

    if (!details.trim()) {
      detailsInput.current.focus();
      return setDetailsError("Can't be empty");
    }

    const newFeedback = {
      title: title.trim(),
      details: details.trim(),
      category,
    };

    await handleAddFeedback(newFeedback);

    setTitle("");
    setDetails("");
    setDetailsError("");
    setTitleError("");

    navigate("/");
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto max-w-2xl  ">
      <button onClick={() => navigate("/")} className="flex items-center group">
        <span>
          <i className="text-blue-default  text-xs mr-4 fa-solid fa-chevron-left"></i>
        </span>
        <span className="mt-1 font-bold text-gray-600 transition duration-300 group-hover:underline">
          Go Back
        </span>
      </button>

      <div className="relative bg-white px-8 py-16 mt-20 rounded-xl shadow-sm">
        <h1 className="text-3xl">Create New Feedback</h1>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <InputField
            titleInput={titleInput}
            title={title}
            setTitle={setTitle}
            error={titleError}
            setError={setTitleError}
          />

          <CategoryField setCategory={setCategory} />

          <TextAreaField
            detailsInput={detailsInput}
            details={details}
            setDetails={setDetails}
            error={detailsError}
            setError={setDetailsError}
          />

          <div className="flex gap-4 justify-end mt-12">
            <button
              onClick={() => navigate("/")}
              className="btn bg-grey-darkest hover:bg-grey-darker-hover"
            >
              Cancel
            </button>
            <button className="btn bg-purple-default hover:bg-purple-hover">
              Add Feedback
            </button>
          </div>
        </form>

        <div className="absolute -top-8 left-6 bg-customGradient w-16 h-16 rounded-full">
          <i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-2xl text-white fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
}
