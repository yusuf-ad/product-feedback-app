import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import { FeedbackAdd } from "./components/Feedbacks/FeedbackAdd";

import { FeedbacksProvider } from "./contexts/FeedbacksContext";
import { NewFeedbackProvider } from "./contexts/NewFeedbackContext";

import PageNotFound from "./pages/PageNotFound";
import FeedbackDetails from "./pages/FeedbackDetails";

function App() {
  return (
    <FeedbacksProvider>
      <NewFeedbackProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<AppLayout />} />
            <Route path="/feedback/add" element={<FeedbackAdd />} />
            <Route path="/feedback/detail/:id" element={<FeedbackDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </NewFeedbackProvider>
    </FeedbacksProvider>
  );
}

export default App;
