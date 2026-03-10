import { motion } from "motion/react"

const services = [
  {
    id: "01",
    title: "Analysis",
    description: "We work with our clients to gather the requirements, use cases, process specifications and conduct in-depth research on demographics, behavior patterns, and target audiences to refine your idea and create a strong app foundation.",
    img: "/assets/BrainImg2.svg",
    color: "#68B4FFBF",
  },
  {
    id: "02",
    title: "Wireframing",
    description: "Our experienced UI/UX designers will create wireframes to visualize the client's concept and ideas that clearly define the user journey.",
    img: "/assets/Wirefarming.svg",
    color: "#68B4FFBF",
  },
  {
    id: "03",
    title: "Prototyping",
    description: "We lead the industry with best in class prototype design techniques that give you an earlier heads up on the look and feel, during the development cycle.",
    img: "/assets/Prototyping.svg",
    color: "#68B4FFBF",
  },
  {
    id: "04",
    title: "Design & Code",
    description: "We use Human Interface Guidelines and follow industry best practices during our design and coding process. Our capabilities deliver sleek and responsive apps to give you a competitive edge.",
    img: "/assets/Design & code.svg",
    color: "#68B4FFBF",
  },
  {
    id: "05",
    title: "Testing & QA",
    description: "We rigorously test the performance app performance to Industry standards to evaluate its scalability, responsiveness, and stability.",
    img: "/assets/Testing & QA.svg",
    color: "#68B4FFBF",
  },
  {
    id: "06",
    title: "Deployment",
    description: "Once the app fulfills our client's requirements and expectations, we deploy the app according to the launch plan.",
    img: "/assets/Deployment.svg",
    color: "#68B4FFBF",
  },
]

const Services = () => {
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
          OUR <span className="text-[#BFB0FF]">SERVICES</span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Full-Service <span className="text-[#BFB0FF]">Digital</span> Solutions
        </h1>
        <p className="text-[#C1D7EC] text-lg max-w-2xl mx-auto">
          From concept to deployment, we deliver end-to-end digital experiences
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group relative bg-[#1a1825]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#BFB0FF]/50 transition-colors overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#BFB0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <h3 className="font-bold text-white text-xl mb-3">
                <span className="text-[#68B4FFBF]">{service.id}.</span> {service.title}
              </h3>
              <p className="text-[#C1D7EC] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
