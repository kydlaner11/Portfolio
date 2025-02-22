import { PROJECTS } from "../constants";
import { FileText, Link as LinkIcon } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

const Project = () => {
  
  return (
    <div className="pb-16 ">
      <h2 className="mt-20 text-center text-4xl font-extrabold text-orange-400">Projects</h2>
      <p className="mt-2 mb-16 text-center text-white bg-clip-text text-xl tracking-tight text-transparent lg:mt-1 lg:text-xl">
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
      <div className="flex flex-col gap-32 w-full p-4">
      {PROJECTS.slice(0, 4).map((project, index) => (
        <div key={index} className="relative group w-full mx-auto">
          {/* Clickable Image */}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-lg shadow-lg transition-transform duration-500 cursor-pointer"
            />
          </a>

          {/* Button at Bottom */}
          <div className="pt-4 flex justify-start space-x-4 underline">
            {project.studyCase ? (
              <a
                href={project.studyCase}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition cursor-pointer"
              >
                <FileText size={16} /> View Study Case
              </a>
            ) : (
              null
            )}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition cursor-pointer"
              >
                <MdArrowOutward size={16} /> Visit website
              </a>
            ) : (
              null
            )}
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Project;