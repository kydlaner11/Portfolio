import { FaBootstrap, FaLaravel, FaFigma } from "react-icons/fa"
import { RiReactjsLine, RiNextjsLine } from "react-icons/ri"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
})

const Technology = () => {
  return (
    <div className="border-b pb-24">
      <h2 className="mt-20 text-center text-4xl font-extrabold">Technologies</h2>
      <p className="mt-1 mb-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:mt-1 lg:text-xl">Essential Tools I use</p>
      <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0, x:-100 }} transition={{ duration:1.5 }} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <RiReactjsLine className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <RiNextjsLine className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <SiTailwindcss  className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <FaFigma className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <FaLaravel className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-2 border-gray-950 p-4 shadow-lg">
          <BiLogoPostgresql className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology