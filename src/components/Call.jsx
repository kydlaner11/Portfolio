

const Call = () => {
  return (
    <div className="py-24">
      <div className="bg-orange-400 text-black py-8 px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <h2 className="text-lg md:text-xl font-semibold">
          Interested working with me?
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* See More Projects Button */}
          <button className="border border-black px-6 py-2 text-black rounded-lg hover:bg-black hover:text-white transition">
            See More Projects
          </button>

          {/* Email Me Button */}
          <button className="bg-black px-6 py-2 text-white rounded-lg flex items-center gap-2  transition">
            ✉ Email Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call;
