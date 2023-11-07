import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Feedback } from "../Feedbacks/Feedback";
import { useFeedbacks } from "../../contexts/FeedbacksContext";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

function FeedbackDetails() {
  const navigate = useNavigate();

  const { id: feedbackId } = useParams();

  const { isLoading, currentFeedback, handleGetFeedback } = useFeedbacks();

  useEffect(() => {
    handleGetFeedback(feedbackId);
  }, [feedbackId]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container max-w-4xl ">
      <header className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center group"
        >
          <span>
            <i className="text-blue-default  text-xs mr-4 fa-solid fa-chevron-left"></i>
          </span>
          <span className="mt-1 font-bold text-gray-600 transition duration-300 group-hover:underline">
            Go Back
          </span>
        </button>

        <button className="btn bg-blue-default hover:bg-blue-hover">
          Edit Feedback
        </button>
      </header>

      <Feedback feedback={currentFeedback} />

      <section>
        <div className="bg-white p-6 rounded-xl mt-8 shadow-sm">
          <h2 className="text-xl">0 Comments</h2>

          <div className="mt-8  flex items-center gap-6 pb-8 pt-3 border-b last:border-0  ">
            <div className="w-14 h-14 bg-red-400 rounded-full">
              <img src="" alt="" />
            </div>

            <div>
              <h3 className="text-lg">name</h3>
              <p className="text-gray-600">@username</p>
              <p className="text-grey-darkest mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                nihil aperiam! Nesciunt?
              </p>
            </div>

            <button className="ml-auto font-bold text-blue-default hover:underline duration-300">
              Reply
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeedbackDetails;
