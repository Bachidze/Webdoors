import { motion } from "motion/react"
import Mainside from "../components/Mainside"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Mainside />
    </motion.div>
  )
}

export default Home
