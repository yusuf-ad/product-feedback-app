import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import BASE_URL from "../utils/BASE_URL";

// 1) create context
const FeedbacksContext = createContext();

// 2) create provider
function FeedbacksProvider({ children }) {
  const [currentFeedback, setCurrentFeedback] = useState({});

  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <FeedbacksContext.Provider
      value={{
        currentFeedback,
        setCurrentFeedback,
        feedbacks,
        setFeedbacks,
        handleAddFeedback,
        handleGetFeedback,
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
