import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
  <div className="border-b pb-40 mt-32">
    <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
      {/* Bagian Teks */}
      <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
        <h2 className="text-4xl font-bold mb-4 lg:max-w-[12ch]">
          Contact me for <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">collaboration</span>
        </h2>
        <p className="text-gray-400 mb-8 mt-3 max-w-[50ch] lg:max-w-[30ch]:">
          Reach out today to discuss your project needs and start collaborating on something amazing!
        </p>
        <div className="mt-auto lg:mt-2 flex items-center gap-2 text-2xl">
          <a href="https://www.linkedin.com/in/mickaelrenaldy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50">
          <FaLinkedin />
          </a>
          <a href="https://github.com/kydlaner11" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50">
          <FaGithub />
          </a>
          <a href="https://www.instagram.com/mickael.naldy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50">
          <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bagian Formulir */}
      <form
        action="https://getform.io/f/alllwzma"
        method="POST"
        className="xl:pl-10 2xl:pl-20 "
      >
        <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
          <div>
            <label htmlFor="name" className="block text-sm font-normal mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="block outline-none w-full px-3 py-3 text-sm bg-white rounded-xl ring-1 ring-inset ring-transparent transition-shadow border border-zinc-500 focus:border-none hover:ring-zinc-50/5 focus:ring-2 focus:ring-zinc-950"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-normal mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="block outline-none w-full px-3 py-3 text-sm bg-white rounded-xl ring-1 ring-inset ring-transparent transition-shadow border border-zinc-500 focus:border-none hover:ring-zinc-50/5 focus:ring-2 focus:ring-zinc-950"
              required
            />
          </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-normal mb-2 mt-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="block outline-none w-full px-3 py-3 text-sm bg-white rounded-xl ring-1 ring-inset ring-transparent transition-shadow border border-zinc-500 focus:border-none hover:ring-zinc-50/5 focus:ring-2 focus:ring-zinc-950 resize-y min-h-32 max-h-80"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            //styling button submit lebih menarik warna pink to purple
            className="bg-zinc-950 text-white px-8 py-3 mt-4 rounded-xl hover:bg-zinc-700 transition-colors justify-center w-full"
          >
            Submit
          </button>
      </form>
    </div>
  </div>    
  );
};

export default Contact;
