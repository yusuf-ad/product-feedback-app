import { useEffect } from "react";
import { useFeedbacks } from "../../contexts/FeedbacksContext";
import { Feedback } from "./Feedback";

function FeedbacksList() {
  const { sortedFeedbacks: feedbacks, sortBy } = useFeedbacks();

  useEffect(() => {
    console.log(sortBy);

    feedbacks.forEach((fb) => console.log(fb.totalUpvotes, "*"));
  }, [sortBy, feedbacks]);

  return (
    <div>
      {feedbacks.map((feedback) => (
        <Feedback key={feedback._id} feedback={feedback} />
      ))}
    </div>
  );
}

export default FeedbacksList;
