import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
  
  return (
    <div className="border-b pb-16">
      <h2 className="mt-20 text-center text-4xl font-extrabold">Projects</h2>
      <p className="mt-2 mb-16 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:mt-1 lg:text-xl">
        My Portfolio Highlights
      </p>
      {/* <div className="flex justify-center mb-16">
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full mr-4">
          All
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white rounded-full mr-4">
          Web
        </button>
        <button className="px-4 py-2 text-gray-400 hover:text-white rounded-full">
          Mobile
        </button>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="relative group bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative overflow-hidden border-b-2 border-black rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <h6 className="text-lg font-semibold text-black">{project.title}</h6>
            <button
              onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
              className="flex items-center gap-1 underline text-gray-400 hover:text-black"
            >
              Project site
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;