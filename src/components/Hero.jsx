import { HERO_CONTENT } from '../constants'
// import profilePic from '../assets/foto.jpg'
import {  motion } from 'framer-motion'


const fileUrl = "/public/files/CV MICKAEL RENALDY.pdf"
const profilePic = "/public/files/Foto.jpg"

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
    <div className="border-b pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-6 text-6xl font-extrabold tracking-tight lg:mt-16 lg:text-8xl"><span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent lg:mt-16 lg:text-8xl' >Front</span>end Developer</motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-black bg-clip-text text-3xl tracking-tight text-transparent">Hei! I am Mickael Renaldy </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 py-6 max-w-xl font-extralight tracking-tighter text-xl'>{HERO_CONTENT}</motion.p>
            <div className="flex flex-col items-start  pb-4 gap-3 lg:flex-row ">
              <motion.a variants={container(1.5)} initial="hidden" animate="visible" className="px-6 py-3 mr-4 text-lg font-semibold text-white bg-black border-2 border-black rounded-lg transition-all duration-300 hover:bg-gray-950 hover:scale-105" href={fileUrl}>Download CV</motion.a>
              <motion.a variants={container(1.5)} initial="hidden" animate="visible" className="px-6 py-3  text-lg font-semibold text-black border-2 border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-105" href="#project">View Project</motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center lg:justify-end">
            <motion.img initial={{ x:100, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay: 1.2, duration:1 }}  src={profilePic} alt="Mickael Renaldy" className="w-96 h-100 rounded-full object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero