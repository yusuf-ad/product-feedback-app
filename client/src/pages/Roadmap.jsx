import { Link } from "react-router-dom";

function Roadmap() {
  return (
    <div className="container ">
      <header className="px-8 py-6 bg-grey-darkest rounded-xl flex items-center gap-8  ">
        <div>
          <button className="text-white flex items-center group">
            <span>
              <i className=" text-grey-75 text-sm mt-[6px] font-extrabold  mr-4 fa-solid fa-chevron-left"></i>
            </span>
            <span className="mt-1 font-extrabold text-lg   transition duration-300 group-hover:underline">
              Go Back
            </span>
          </button>

          <h1 className="font-extrabold text-white text-3xl mt-4">Roadmap</h1>
        </div>

        <Link to="/feedback/add" className="ml-auto">
          <button className="btn  bg-purple-default   hover:bg-purple-hover">
            <i className="text-xs  fa-solid fa-plus"></i>
            <span className="ml-2">Add Feedback</span>
          </button>
        </Link>
      </header>

      <main className="mt-14">
        <div>
          <header>
            <h2 className="text-2xl">Planned (2)</h2>
            <p className="mt-2 text-lg text-grey-dark ">
              Ideas prioritized for research
            </p>
          </header>

          <ul className="mt-8">
            <li className="max-w-max border-t-8 border-t-orange bg-white py-10 px-8 rounded-md">
              <p className="flex items-center text-grey-dark text-lg">
                <span className="block mr-4 w-3 h-3 rounded-full bg-orange"></span>
                Planned
              </p>

              <h3 className="text-xl mt-3">More comprehensive reports</h3>
              <p className="text-grey-darker">
                It would be great to see a more detailed breakdown of solutions.
              </p>

              <p className="bg-grey-light mt-3  text-blue-default font-bold inline-block px-4 py-2 rounded-xl">
                Feature
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Roadmap;
