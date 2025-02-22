import logo from "../assets/Renaldy.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center font-extrabold text-orange-400">
        Mickaelnaldy
      </div>
      <div className="hidden lg:flex items-center gap-6 ">
        <a href="#project" className="text-sm font-normal text-orange-400 hover:text-orange-300">
          All Projects
        </a>
        <a href="#contact" className="text-sm font-normal text-orange-400 hover:text-orange-300">
          Contact
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-orange-400">
        <a href="https://www.linkedin.com/in/mickaelrenaldy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
        <FaLinkedin />
        </a>
        <a href="https://github.com/kydlaner11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/mickael.naldy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
        <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar; 