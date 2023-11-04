import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import { FeedbackAdd } from "./components/Feedbacks/FeedbackAdd";

const BASE_API = "http://localhost:3100";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFeedbacks() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_API}/feedbacks`);
        const { data } = await res.json();

        console.log(data.feedbacks);

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
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<AppLayout feedbacks={feedbacks} isLoading={isLoading} />}
        />
        <Route
          path="/feedback/add"
          element={
            <FeedbackAdd
              handleAddFeedback={handleAddFeedback}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="*"
          element={<h1 className="text-red-700 text-4xl"> 404 NOT FOUND</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
