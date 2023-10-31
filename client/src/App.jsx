import { RoadmapSidebar } from "./components/RoadmapSidebar";
import { SuggestionsHeader } from "./components/SuggestionsHeader";
import { FeedbackBoard } from "./components/FeedbackBoard";
import { FeedbackCategories } from "./components/FeedbackCategories";

function App() {
  return (
    <div className="container grid grid-cols-4 gap-12">
      <aside className="col-span-1">
        <FeedbackBoard />
        <FeedbackCategories />
        <RoadmapSidebar />
      </aside>
      <section className="col-span-3 bg-red-400 h-4">
        <SuggestionsHeader />
      </section>
    </div>
  );
}

export default App;
