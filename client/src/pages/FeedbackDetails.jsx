import { useNavigate, useParams } from "react-router-dom";
import { Feedback } from "../components/Feedbacks/Feedback";
import { useFeedbacks } from "../contexts/FeedbacksContext";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import { useComments } from "../contexts/CommentsContext";

function FeedbackDetails() {
  const navigate = useNavigate();

  const { id: feedbackId } = useParams();

  const { isLoading, currentFeedback, handleGetFeedback } = useFeedbacks();

  const { commentsLoading, setCommentsLoading, getComments, comments } =
    useComments();

  useEffect(() => {
    setCommentsLoading(true);

    handleGetFeedback(feedbackId);
    getComments(feedbackId);
  }, [feedbackId, handleGetFeedback, getComments, setCommentsLoading]);

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
        {commentsLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="bg-white p-6 rounded-xl mt-8 shadow-sm">
            <h2 className="text-xl">
              {currentFeedback.totalComments} Comments
            </h2>

            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </div>
        )}
      </section>

      <div className="bg-white p-6 rounded-xl mt-8 shadow-sm">
        <h2 className="text-xl mb-4">Add Comment</h2>

        <div>
          <textarea
            className={`shadow-sm mt-5 bg-grey-light h-28 px-6 py-4 rounded-md w-full outline-purple-default/50 resize-none `}
            name="feedback-detail"
            id="detail"
            maxLength={255}
          ></textarea>

          <div className="flex justify-between items-center mt-10">
            <p>255 characters left</p>

            <button className="btn bg-purple-default hover:bg-purple-hover">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
23;

export default FeedbackDetails;

function Comment({ comment }) {
  return (
    <div className="mt-8  flex items-center gap-6 pb-8 pt-3 border-b last:border-0  ">
      <div className="w-20 h-20 rounded-full ">
        <img className="rounded-full" src={comment.userImg} alt="user" />
      </div>

      <div>
        <h3 className="text-lg">{comment.fullName}</h3>
        <p className="text-gray-600">@{comment.username}</p>
        <p className="text-grey-darkest mt-4">{comment.comment}</p>
      </div>

      <button className="ml-auto font-bold text-blue-default hover:underline duration-300">
        Reply
      </button>
    </div>
  );
}
