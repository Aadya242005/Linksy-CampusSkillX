import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/web.jpg";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.png";

const AboutWebsite = () => {
  return (
    <section
      className="relative min-h-[160vh] flex flex-col justify-center items-center text-white text-center px-6 py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Sliding images */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={slide1}
          alt="slide1"
          className="absolute top-32 left-[-300px] w-[28rem] h-[18rem] object-cover rounded-xl opacity-40"
          animate={{ x: [0, 400, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={slide2}
          alt="slide2"
          className="absolute bottom-40 right-[-300px] w-[28rem] h-[18rem] object-cover rounded-xl opacity-40"
          animate={{ x: [0, -400, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={slide3}
          alt="slide3"
          className="absolute top-[60%] right-[35%] w-[26rem] h-[17rem] object-cover rounded-xl opacity-40"
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Text content */}
      <motion.div
        className="relative z-10 max-w-3xl mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          The Future of Intelligent Gladiators!
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Built with next-generation AI, our platform connects retailers,
          suppliers, and customers through a single adaptive ecosystem — making
          operations smarter, faster, and more seamless.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutWebsite;
