import { Link } from "react-router-dom";

export function Feedback({ feedback }) {
  return (
    <div className="bg-white p-6 rounded-xl mt-8 flex gap-8 items-center shadow-sm ">
      <div className="bg-grey-light rounded-xl hover:bg-grey-hover transition-colors duration-200 cursor-pointer ">
        <p className="flex flex-col items-center px-3 py-2 font-bold ">
          <span>
            <i className="text-blue-default text-sm  fa-solid fa-chevron-up"></i>
          </span>
          {feedback.totalUpvotes}
        </p>
      </div>
      <Link className="w-full" to={`/feedback/detail/${feedback._id}`}>
        <div className="cursor-pointer group flex-grow transition-colors duration-300">
          <h4 className="text-xl mb-1 group-hover:text-blue-default">
            {feedback.title}
          </h4>
          <p className="text-gray-600">{feedback.details}</p>
          <p className="bg-grey-light mt-3  text-blue-default font-bold inline-block px-4 py-2 rounded-xl">
            {feedback.category || "category"}
          </p>
        </div>
      </Link>
      <p className="ml-auto font-bold">
        <span>
          <i className="text-gray-400 mr-1 fa-regular fa-comment"></i>
        </span>
        {feedback.totalComments}
      </p>
    </div>
  );
}
