import React from "react";
import { motion } from "framer-motion";
import bgFuture from "../assets/web2.jpeg"; // background image

const FutureVision = () => {
  return (
    <section
      className="relative min-h-[100vh] flex flex-col justify-center items-center text-white text-center px-6 py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgFuture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* Text container */}
      <div className="relative z-10 max-w-4xl mt-12 space-y-6 overflow-hidden">
        {/* Heading from left (looping) */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold"
          animate={{ x: [-300, 0, 0, -300], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          Shaping the Future of Youths
        </motion.h1>

        {/* Heading from right (looping, slightly delayed) */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-300"
          animate={{ x: [300, 0, 0, 300], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          Into Reality
        </motion.h2>

        {/* Paragraph comes together after headings */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          Explore how our next-gen AI solutions empower learning, streamline
          growth, and promote innovation in academics and technology.
        </motion.p>
      </div>
    </section>
  );
};

export default FutureVision;
