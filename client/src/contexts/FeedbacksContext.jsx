import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import BASE_URL from "../utils/BASE_URL";
import { toCamelCase } from "../utils/toCamelCase";

// 1) create context
const FeedbacksContext = createContext();

// 2) create provider
function FeedbacksProvider({ children }) {
  const [currentFeedback, setCurrentFeedback] = useState({});

  const [feedbacks, setFeedbacks] = useState([]);
  const [sortedFeedbacks, setSortedFeedbacks] = useState([]);

  const [sortBy, setSortBy] = useState("Most upvotes");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // The problem might be arising because Array.sort() mutates the original array in place, causing unexpected behavior when you set the state based on the sorted array directly.

    let sorted = [...feedbacks]; // Create a new array instance

    switch (toCamelCase(sortBy)) {
      case "mostUpvotes":
        setSortedFeedbacks(sorted);
        break;
      case "leastUpvotes":
        sorted.sort((a, b) => a["totalUpvotes"] - b["totalUpvotes"]);
        setSortedFeedbacks([...sorted]); // Set a new sorted array
        break;
      case "mostComments":
        sorted.sort((a, b) => b["totalComments"] - a["totalComments"]);
        setSortedFeedbacks([...sorted]); // Set a new sorted array
        break;
      case "leastComments":
        sorted.sort((a, b) => a["totalComments"] - b["totalComments"]);
        setSortedFeedbacks([...sorted]); // Set a new sorted array
        break;
      default:
        throw new Error("Error has occurred in sorting");
    }
  }, [sortBy, feedbacks]);

  useEffect(() => {
    async function getFeedbacks() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/feedbacks`);
        const { data } = await res.json();

        console.log(data);
        setFeedbacks(data.feedbacks);
      } catch (err) {
        console.log("ERR 🔥", err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getFeedbacks();
  }, [currentFeedback]);

  async function handleAddFeedback(feedback) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/feedbacks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
      const data = await res.json();

      console.log(data);

      setFeedbacks((feedbacks) => [...feedbacks, data.feedback]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleGetFeedback = useCallback(async function (id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/feedbacks/${id}`);
      const { data } = await res.json();

      setCurrentFeedback(data.feedback);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const upvoteFeedback = async function (id) {
    try {
      const res = await fetch(`${BASE_URL}/feedbacks/${id}`, {
        method: "PATCH",
      });
      const { data } = await res.json();

      setFeedbacks((feedbacks) =>
        feedbacks.map((feedback) =>
          feedback._id === data.feedback._id
            ? {
                ...feedback,
                upvoted: data.feedback.upvoted,
                totalUpvotes: data.feedback.totalUpvotes,
              }
            : feedback
        )
      );

      if (data.feedback._id === currentFeedback._id) {
        currentFeedback.upvoted = data.feedback.upvoted;
        currentFeedback.totalUpvotes = data.feedback.totalUpvotes;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FeedbacksContext.Provider
      value={{
        currentFeedback,
        setCurrentFeedback,
        feedbacks,
        sortBy,
        setSortBy,
        sortedFeedbacks,
        setFeedbacks,
        handleAddFeedback,
        handleGetFeedback,
        upvoteFeedback,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FeedbacksContext.Provider>
  );
}

function useFeedbacks() {
  const value = useContext(FeedbacksContext);

  if (value === undefined)
    throw new Error(
      "FeedbacksContext was used outside of the FeedbacksContextProvider"
    );

  return value;
}

export { FeedbacksProvider, useFeedbacks };
