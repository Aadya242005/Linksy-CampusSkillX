
import React from "react";
import { motion } from "framer-motion";
import studioImage from "../assets/upload6.svg"; // Replace with your image

const features = [
  {
    title: "Alumni Guidance",
    category: "Creative",
  },
  {
    title: "Peer Learning",
    category: "Creative",
  },
  {
    title: "Certificates",
    category: "Creative",
  },
  {
    title: "Weekly Hackathons",
    category: "Production",
  },
  {
    title: "Resume Matcher",
    category: "Production",
  },
  {
    title: "Personal Dashboard",
    category: "Production",
  },
];

const StudioServices = () => {
  const creativeFeatures = features.filter((f) => f.category === "Creative");
  const productionFeatures = features.filter((f) => f.category === "Production");

  return (
    <section className="w-full min-h-screen bg-[#ccd3f1] text-black flex flex-col lg:flex-row p-10 gap-10">
      {/* Left Image with motion */}
      <motion.div
  className="relative w-full lg:w-1/2 aspect-[3/4] rounded-xl overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* More noticeable zoom and subtle rotate */}
  <motion.img
    src={studioImage}
    alt="Studio"
    className="w-full h-full object-cover"
    animate={{
      scale: [1, 1.08, 1],
      rotate: [0, 1, 0], // optional: slight rotation for dynamic feel
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Overlay text */}
  <div className="absolute top-10 left-10 text-white font-serif text-5xl italic">
    Studio
  </div>
  <div className="absolute bottom-10 left-10 text-white font-serif text-5xl italic">
    Services
  </div>
</motion.div>

      {/* Right Side: Features */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-4">Creative</h2>
          <ul className="space-y-2 text-lg text-gray-800">
            {creativeFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full"
              >
                {feature.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-4xl font-serif mb-4">Production</h2>
          <ul className="space-y-2 text-lg text-gray-800">
            {productionFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-600 before:rounded-full"
              >
                {feature.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudioServices;
