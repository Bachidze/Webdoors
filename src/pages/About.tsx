import { motion } from "motion/react"

const stats = [
  { value: "2018", label: "Founded" },
  { value: "50+", label: "Projects" },
  { value: "100%", label: "Client Satisfaction" },
]

const values = [
  "Innovation at our core",
  "Quality over quantity",
  "Client-first approach",
  "Continuous learning",
]

const About = () => {
  return (
    <motion.div
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 xl:px-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center mb-20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[20px] text-white mb-2">
          GET TO KNOW <span className="text-[#BFB0FF]">US</span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-[#BFB0FF]">Webdoors</span>
        </h1>
        <p className="text-[#C1D7EC] text-lg max-w-2xl mx-auto">
          A full-service digital agency reimagining digital experiences
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-20">
        <motion.section
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#C1D7EC] text-lg leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna
            sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.
            Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna
            sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.
            Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
          </p>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-[#1a1825]/60 rounded-2xl border border-white/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(191, 176, 255, 0.5)" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <motion.span
                className="text-4xl font-bold text-[#BFB0FF] block mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-white/80">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1825]/40 border border-white/5"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10, borderColor: "rgba(191, 176, 255, 0.3)" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#BFB0FF]" />
                <span className="text-[#C1D7EC]">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <div className="text-[#C1D7EC] space-y-2">
            <p><span className="font-bold text-white">Name:</span> JSC Webdoors</p>
            <p><span className="font-bold text-white">Telephone:</span> +995 571507979</p>
            <p><span className="font-bold text-white">Email:</span> Info@Webdoors.Ge</p>
            <p><span className="font-bold text-white">Address:</span> 97 Akaki Tsereteli Ave, 0179</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default About
