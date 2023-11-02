import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownButton from "../UI/DropdownButton";
import Error from "../UI/Error";

export function FeedbackAdd({ handleAddFeedback }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState("");
  const [detailsError, setDetailsError] = useState("");

  const navigate = useNavigate();

  const titleInput = useRef(null);
  const detailsInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("Can't be empty");
      titleInput.current.classList.add(
        "outline-red-default/70",
        "text-red-default"
      );
      titleInput.current.focus();
      return;
    }

    if (!details.trim()) {
      setDetailsError("Can't be empty");
      detailsInput.current.classList.add(
        "outline-red-default/70",
        "text-red-default"
      );
      detailsInput.current.focus();
      return;
    }

    const newFeedback = {
      title,
      details,
      category,
    };

    handleAddFeedback(newFeedback);

    setTitle("");
    setDetails("");
    setDetailsError("");
    setTitleError("");
  }

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

      <div className="bg-white px-8 py-16 mt-16 rounded-xl shadow-sm">
        <h1 className="text-3xl">Create New Feedback</h1>

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="mb-8 ">
            <label className="font-bold text-lg" htmlFor="title">
              Feedback Title
            </label>
            <p className="text-gray-600 ">Add a short, descriptive headline</p>
            <input
              ref={titleInput}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);

                if (!title.trim()) {
                  titleInput.current.classList.remove(
                    "outline-red-default/70",
                    "text-red-default"
                  );

                  setTitleError("");
                }
              }}
              className="shadow-sm mt-5 bg-grey-light px-6 h-14 rounded-md w-full outline-purple-default/50"
              id="title"
              type="text"
            />
            {titleError && <Error message="Can't be empty" />}
          </div>

          <div className="mb-8">
            <label className="font-bold text-lg" htmlFor="category">
              Category
            </label>
            <p className="text-gray-600 ">
              Choose a category for your feedback
            </p>

            <DropdownButton setValue={setCategory} />
          </div>

          <div className="mb-8 ">
            <label className="font-bold text-lg" htmlFor="detail">
              Feedback Detail
            </label>
            <p className="text-gray-600 ">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              ref={detailsInput}
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);

                if (!details.trim()) {
                  detailsInput.current.classList.remove(
                    "outline-red-default/70",
                    "text-red-default"
                  );

                  setDetailsError("");
                }
              }}
              className="shadow-sm mt-5 bg-grey-light h-24 px-6 py-4 rounded-md w-full outline-purple-default/50 resize-none"
              name="feedback-detail"
              id="detail"
              maxLength={255}
            ></textarea>
            {detailsError && <Error message="Can't be empty" />}
          </div>

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
      </div>
    </div>
  );
}
