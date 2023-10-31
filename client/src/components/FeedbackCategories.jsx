export function FeedbackCategories() {
  return (
    <div className="mt-8 rounded-xl p-6 bg-white shadow-sm">
      <ul className="flex flex-wrap gap-4">
        <li className="feedbackCategory bg-blue-default text-white">All</li>
        <li className="feedbackCategory">UI</li>
        <li className="feedbackCategory">UX</li>
        <li className="feedbackCategory">Enhancement</li>
        <li className="feedbackCategory">Feature</li>
        <li className="feedbackCategory">Bug</li>
      </ul>
    </div>
  );
}
