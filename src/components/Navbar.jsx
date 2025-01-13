import logo from "../assets/Renaldy.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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