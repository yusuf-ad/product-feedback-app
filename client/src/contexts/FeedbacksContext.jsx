import { createContext, useContext, useEffect, useState } from "react";

const BASE_API = "http://localhost:3100";

// 1) create context
const FeedbacksContext = createContext();

// 2) create provider
function FeedbacksProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFeedbacks() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_API}/feedbacks`);
        const { data } = await res.json();

        setFeedbacks(data.feedbacks);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getFeedbacks();
  }, []);

  async function handleAddFeedback(feedback) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_API}/feedback/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
      const data = await res.json();

      setFeedbacks((feedbacks) => [...feedbacks, data.feedback]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FeedbacksContext.Provider
      value={{
        feedbacks,
        handleAddFeedback,
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
