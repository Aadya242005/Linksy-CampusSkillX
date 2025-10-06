import React from "react";
import { motion } from "framer-motion";
import uploadImg from "../assets/upload5.svg";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 py-20 px-6 lg:px-20 text-white overflow-hidden">
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gray-900 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${uploadImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <motion.form
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-pink-500/30 
                     rounded-3xl p-10 shadow-[0_0_25px_rgba(236,72,153,0.4)] 
                     w-full lg:w-1/2 space-y-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold text-pink-400 mb-4 drop-shadow-lg">
            📬 Contact Us
          </h1>
          <p className="text-gray-300 mb-6">
            We’d love to hear from you! Reach out for queries, support, or partnerships.
          </p>

          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-3 rounded-lg bg-black/30 border border-pink-400/40 text-white"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-black/30 border border-pink-400/40 text-white"
          />
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-black/30 border border-pink-400/40 text-white"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 
                       text-white font-bold py-3 rounded-xl shadow-lg 
                       hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>

        {/* Flip Card - Auto Rotating */}
        <motion.div className="w-full lg:w-1/2 h-[28rem] perspective">
          <motion.div
            className="relative w-full h-full rounded-3xl"
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front Side */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center 
                         bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl 
                         p-8 shadow-2xl text-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img src={uploadImg} alt="Contact Illustration" className="w-3/4 mb-6" />
              <h2 className="text-2xl font-semibold text-teal-300 mb-4">Get in Touch</h2>
              <p className="text-gray-200 mb-6">
                Stay connected with us for more updates 🚀
              </p>
            </div>

            {/* Back Side */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center 
                         bg-gradient-to-br from-teal-700 to-purple-800 rounded-3xl p-8 text-center"
              style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">📞 Contact Info</h2>
              <div className="space-y-3 text-gray-100">
                <p>📧 <strong>Email:</strong> support@skillx.in</p>
                <p>📞 <strong>Phone:</strong> +91 8755093039</p>
                <p>📍 <strong>Address:</strong> GLA University, India</p>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-gray-200">Follow Us</h3>
                <div className="flex space-x-5 mt-3 justify-center">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-500">LinkedIn</a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-200">GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-500">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
