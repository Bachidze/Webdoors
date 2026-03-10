import { motion } from "motion/react"

const projects = [
  {
    id: 1,
    title: "Website Name",
    description: "Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,",
    image: "/assets/Self.svg",
  },
  {
    id: 2,
    title: "Website Name",
    description: "Vulputate risus. Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncu",
    image: "/assets/ourPhoto2.svg",
  },
  {
    id: 3,
    title: "Website Name",
    description: "Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.",
    image: "/assets/ourPhoto3.svg",
  },
]

const Projects = () => {
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
          OUR <span className="text-[#BFB0FF]">LIFE'S WORK</span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-[#BFB0FF]">Projects</span>
        </h1>
        <p className="text-[#C1D7EC] text-lg max-w-2xl mx-auto">
          Explore our portfolio of digital experiences that make a difference
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col ${index % 2 === 1 ? "xl:flex-row-reverse" : "xl:flex-row"} gap-12 xl:gap-24 items-center`}
            initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <motion.div
              className={`flex-1 ${index % 2 === 1 ? "xl:text-right" : "xl:text-left"} text-center xl:text-left`}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-[#C1D7EC] text-lg mb-8 max-w-xl">{project.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 text-white font-bold group"
                whileHover={{ x: 5 }}
              >
                View Project
                <img src="/assets/Arrow.svg" alt="Arrow" className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            <motion.div
              className="flex-1 overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[576px] h-auto object-cover rounded-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
