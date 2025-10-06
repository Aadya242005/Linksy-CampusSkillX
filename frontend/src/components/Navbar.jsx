import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Motion for subtle 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [8, -8]);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set(e.clientX - innerWidth / 2);
    y.set(e.clientY - innerHeight / 2);
  };

  return (
    <>
      <motion.nav
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
            : "bg-black/40 backdrop-blur-md"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 text-white">
          {/* 🌟 Brand */}
          <motion.h2
            className="text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            Campus-SkillX
          </motion.h2>

          {/* 🧭 Desktop Links */}
          <div className="hidden md:flex space-x-8 text-base font-medium">
            {[
              "Home",
              "Features",
              "Alumni",
              "Hackathons",
              "Certifications",
              "Resume",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-pink-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* 👤 Profile / Auth */}
          <div className="flex items-center space-x-3">
            <User
              onClick={() => navigate("/profile")}
              className="cursor-pointer hover:text-pink-400 transition"
              size={26}
            />
            {/* Mobile Menu Toggle */}
            <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 📱 Mobile Side Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-2xl z-40 p-8 flex flex-col text-white space-y-6 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            {[
              "Home",
              "Features",
              "Alumni",
              "Hackathons",
              "Certifications",
              "Resume",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                className="text-lg font-semibold hover:text-pink-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <motion.button
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false);
              }}
              className="mt-auto bg-gradient-to-r from-pink-500 to-purple-600 py-2 px-6 rounded-full font-bold hover:scale-105 transition-all"
            >
              Profile
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
