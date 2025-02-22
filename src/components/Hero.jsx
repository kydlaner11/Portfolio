import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/Foto2.png'
import fileUrl from '../assets/CV MICKAEL RENALDY.pdf'
import {  motion } from 'framer-motion'


const container = (delay) => ({
  hidden: { x:-100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
})

const Hero = () => {
  return (
    <div className="border-b pb-4 lg:mb-35 border-orange-400">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-6 text-6xl font-extrabold tracking-tight lg:mt-16 lg:text-5xl text-white"><span className='bg-orange-400 bg-clip-text text-6xl tracking-tight text-transparent lg:mt-16 lg:text-5xl' >Front</span>end Developer</motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-black bg-clip-text text-xl tracking-tight text-transparent text-white">Hei! I am Mickael Renaldy </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-1 py-3 max-w-xl font-extralight tracking-tighter text-sm text-white'>{HERO_CONTENT}</motion.p>
            <div className="flex flex-col items-start  pb-4 gap-3 lg:flex-row ">
              <motion.a variants={container(1.5)} initial="hidden" animate="visible" className="px-6 py-3 mr-4 text-lg font-medium text-black bg-orange-400 border-2 border-orange-400 rounded-lg transition-all duration-300  hover:bg-orange-300 hover:scale-105" href={fileUrl}>Download CV</motion.a>
              <motion.a variants={container(1.5)} initial="hidden" animate="visible" className="px-6 py-3 w-44 lg:w-auto  text-lg font-medium text-white border-2 border-white rounded-lg transition-all duration-300  hover:text-orange-400 hover:border-orange-400 hover:scale-105" href="#project">View Project</motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative flex justify-center lg:justify-end py-6 lg:py-0">
            {/* Kotak di belakang */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute bottom-0 w-40 h-80  bg-orange-400 rounded-xl"
            ></motion.div>

            {/* Gambar */}
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              src={profilePic}
              alt="Profile"
              className="relative z-10 w-80 h-auto rounded-xl filter grayscale hover:grayscale-0 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  )
}


export default Hero