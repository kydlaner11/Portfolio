import { EXPERIENCES } from "../constants";
import Slider from "react-slick";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Ikon untuk navigasi

const Experiences = () => {
  // Inisialisasi ref untuk slider
  const sliderRef = useRef(null);

  // Pengaturan slider
  const settings = {
    dots: false, // Menampilkan titik navigasi
    infinite: true, // Slider terus berputar
    speed: 500,
    slidesToShow: 2, // Menampilkan 2 slide
    slidesToScroll: 1,
    arrows: false, // Nonaktifkan panah bawaan
    responsive: [
      {
        breakpoint: 769, // Untuk layar tablet atau lebih kecil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Tampilkan 1 slide
        },
      },
    ],
  };

  return (
    <div className="border-b pb-4 relative">
      <h2 className="my-20 text-center text-4xl">Work Experience</h2>
      <div className="relative">
        {/* Tombol Navigasi */}
        <button
        //styling button navigasi lebih menarik
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="px-3" // Padding to create space between slides
            >
              <div className=" border-gray-950 border-2 rounded-2xl p-6 h-full">
                <h6 className="mb-2 font-black text-black text-lg">
                  {experience.role}{" "}
                  <span className="text-purple-500 ">at {experience.company}</span>
                </h6>
                <p className="mb-2 text-sm text-neutral-800">{experience.year}</p>
                <p className="mb-4 text-neutral-900">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800/70 text-zinc-200 px-3 py-1 text-sm font-medium rounded mr-2 mb-2"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experiences;
