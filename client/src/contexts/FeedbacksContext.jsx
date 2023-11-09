import { createContext, useContext, useEffect, useState } from "react";

const BASE_API = "http://localhost:3100/api/v1/feedbacks";

// 1) create context
const FeedbacksContext = createContext();

// 2) create provider
function FeedbacksProvider({ children }) {
  const [currentFeedback, setCurrentFeedback] = useState({});
  const [comments, setComments] = useState([]);

  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFeedbacks() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_API}`);
        const { data } = await res.json();

        setFeedbacks(data.feedbacks);
      } catch (err) {
        console.log("ERR 🔥", err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getFeedbacks();
  }, []);

  async function handleAddFeedback(feedback) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_API}`, {
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

  async function handleGetFeedback(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_API}/${id}`);
      const { data } = await res.json();

      setCurrentFeedback(data.feedback);
      setComments(data.feedback.comments);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FeedbacksContext.Provider
      value={{
        currentFeedback,
        comments,
        feedbacks,
        handleAddFeedback,
        handleGetFeedback,
        isLoading,
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
