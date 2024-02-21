import { useNavigate, useParams } from "react-router-dom";
import { useFeedbacks } from "../../contexts/FeedbacksContext";
import { useEffect } from "react";
import { useComments } from "../../contexts/CommentsContext";
import { Link } from "react-router-dom";

import Feedback from "./Feedback";
import Comment from "../comment/Comment";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import { CreateComment } from "../comment/CreateComment";

function FeedbackDetails() {
  const navigate = useNavigate();
  const { id: feedbackId } = useParams();
  const { currentFeedback, handleGetFeedback } = useFeedbacks();

  useEffect(() => {
    handleGetFeedback(feedbackId);
  }, [feedbackId, handleGetFeedback]);

  return (
    <div className="container max-w-4xl p-10 md:p-8 lg:p-0">
      <header className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center"
        >
          <span>
            <i className="fa-solid  fa-chevron-left mr-4 text-xs text-blue-default"></i>
          </span>
          <span className="mt-1 font-bold text-gray-600 transition duration-300 group-hover:underline">
            Go Back
          </span>
        </button>

        <Link to={`/feedback/edit/${feedbackId}`}>
          <button className="btn bg-blue-default hover:bg-blue-hover">
            Edit Feedback
          </button>
        </Link>
      </header>

      <Feedback feedback={currentFeedback} />

      <CommentList
        feedbackId={feedbackId}
        render={(comment) => <Comment key={comment._id} comment={comment} />}
      />

      <CreateComment feedbackId={feedbackId} />
    </div>
  );
}

export default FeedbackDetails;

function CommentList({ feedbackId, render }) {
  const { comments, getComments, commentsLoading } = useComments();

  useEffect(() => {
    getComments(feedbackId);
  }, [feedbackId, getComments]);

  return (
    <section>
      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl">{comments.length} Comments</h2>

        {comments.map(render)}

        {commentsLoading && (
          <div className="flex items-center justify-center min-h-[10rem]">
            <LoadingSpinner type={"medium"} />
          </div>
        )}
      </div>
    </section>
  );
}
