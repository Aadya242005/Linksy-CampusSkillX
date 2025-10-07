import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiStar, FiArrowRight } from "react-icons/fi";
import bgImage from "../assets/bg_img1.jpg";

const actionsConfig = [
  {
    id: "login",
    label: "Login",
    type: "modal",
    fields: [
      { name: "email", type: "email", placeholder: "Email" },
      { name: "password", type: "password", placeholder: "Password" },
    ],
    handlerName: "handleLogin",
  },
  {
    id: "signup",
    label: "Sign Up",
    type: "modal",
    fields: [
      { name: "name", type: "text", placeholder: "Full Name" },
      { name: "email", type: "email", placeholder: "Email" },
      { name: "password", type: "password", placeholder: "Password" },
    ],
    handlerName: "handleSignup",
  },
];

const Hero = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // 🎯 Parallax + glow tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);
  const glowX = useTransform(x, [-500, 500], ["20%", "80%"]);
  const glowY = useTransform(y, [-300, 300], ["30%", "70%"]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set(e.clientX - innerWidth / 2);
    y.set(e.clientY - innerHeight / 2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handlersMap = { handleLogin, handleSignup };

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/* 🪄 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(255,0,150,0.2) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba(0,150,255,0.25) 0%, transparent 70%)",
            "radial-gradient(circle at 40% 60%, rgba(255,0,150,0.2) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Mouse-follow Glow Orb */}
      <motion.div
        className="absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 blur-3xl pointer-events-none z-10"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Floating Blobs */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-pink-500 opacity-20 rounded-full blur-3xl top-10 left-20 z-0"
        animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[35rem] h-[35rem] bg-blue-500 opacity-20 rounded-full blur-3xl bottom-0 right-20 z-0"
        animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-12 left-10 text-yellow-400 z-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <FiStar size={30} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-blue-400 z-10"
        animate={{ y: [0, 15, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <FiArrowRight size={40} />
      </motion.div>

      {/* 🧠 Hero Content with Parallax */}
      <motion.div
        className="z-20 max-w-2xl text-left px-4 md:px-0"
        style={{ rotateX, rotateY }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient-x hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300">
          Linksy: Skills via Campus
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Learn, Compete, Grow — Your Campus Journey Starts Here.
        </p>
        <p className="text-2xl md:text-3xl font-semibold mb-8 text-white/90">
          From Campus to Career — Unlock Your Potential
        </p>

        <div className="flex gap-4 flex-wrap">
          {actionsConfig.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveModal(id)}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                id === "signup"
                  ? "bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
                  : "border border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 text-white/70 text-sm tracking-wide"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll to explore
      </motion.div>

      {/* 🧊 Modal */}
      {activeModal &&
        actionsConfig
          .filter((action) => action.id === activeModal)
          .map(({ id, label, fields, handlerName }) => (
            <motion.div
              key={id}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-2xl w-96 relative border border-gray-200"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-center text-black">
                  {label}
                </h2>
                {fields.map(({ name, type, placeholder }) => (
                  <input
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name] || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ))}
                <button
                  onClick={handlersMap[handlerName]}
                  className="w-full bg-black text-white py-3 rounded-full font-bold hover:scale-105 transition"
                >
                  {label}
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          ))}
    </section>
  );
};

export default Hero;
