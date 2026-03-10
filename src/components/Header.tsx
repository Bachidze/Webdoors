import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
    <div className="m-[15px] md:m-[32px] xl:hidden">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/User.svg" alt="UserImg" />
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/assets/MiddleIcon.svg" alt="MiddleImg" />
        </Link>
        <motion.button
          className="relative w-8 h-6 flex flex-col justify-center gap-1.5 focus:outline-none z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="მენიუ"
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="block w-full h-0.5 bg-white rounded-full origin-center"
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-full h-0.5 bg-white rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-full h-0.5 bg-white rounded-full origin-center"
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-[#1a1825] border-l border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col pt-20 px-6 gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-4 text-[18px] font-bold transition-colors ${
                        location.pathname === link.to ? 'text-[#BFB0FF]' : 'text-white hover:text-[#BFB0FF]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    <div className="hidden xl:flex items-center justify-between xl:mt-[77px] xl:ml-[140px] xl:mr-[150px]">
      <div className="flex gap-9 text-[20px] text-white font-bold">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative py-2 group"
          >
            <span className={location.pathname === link.to ? 'text-[#BFB0FF]' : ''}>
              {link.label}
            </span>
            {location.pathname === link.to && (
              <motion.div
                layoutId="headerIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#BFB0FF]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
      <Link to="/" className="block">
        <motion.img
          className="xl:w-[40px] xl:relative right-[40px]"
          src="/assets/MiddleIcon.svg"
          alt="MiddleImg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>
      <div className="flex gap-[25px]">
        <img className="xl:w-[60px]" src="/assets/ManImg.svg" alt="BlackProfile" />
        <img className="xl:w-[60px]" src="/assets/HeaderRight.svg" alt="LEftImg" />
      </div>
    </div>
    </>
  )
}

export default Header