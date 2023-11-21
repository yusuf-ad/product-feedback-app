import { RoadmapSidebar } from "../UI/RoadmapSidebar";
import { SuggestionsHeader } from "./SuggestionsHeader";
import { FeedbackBoard } from "../UI/FeedbackBoard";
import { FeedbackCategories } from "../UI/FeedbackCategories";
import Aside from "../Layout/Aside";
import Main from "../Layout/Main";
import Section from "../Layout/Section";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { Feedback } from "../Feedbacks/Feedback";
import { useFeedbacks } from "../../contexts/FeedbacksContext";
import { useEffect } from "react";

function AppLayout() {
  const { feedbacks, isLoading } = useFeedbacks();

  return (
    <div className="container grid grid-cols-4 gap-12">
      <Aside>
        <FeedbackBoard />
        <FeedbackCategories />
        <RoadmapSidebar />
      </Aside>
      <Main>
        <SuggestionsHeader numFeedbacks={feedbacks.length} />
        <Section>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            feedbacks.map((feedback) => (
              <Feedback key={feedback._id} feedback={feedback} />
            ))
          )}
        </Section>
      </Main>
    </div>
  );
}

export default AppLayout;
