import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";

import uploadImg from "../assets/upload4.svg";

const ResumeAnalyzer = () => {
  const [fileName, setFileName] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [matchScore, setMatchScore] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 100);
    setMatchScore(score);
  };

  return (
    <section className="relative min-h-screen bg-gray-950 py-20 px-6 lg:px-20 text-white overflow-hidden">
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-teal-500 opacity-30 animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Upload & Job Description */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold text-teal-300 drop-shadow-lg">
            🧾 Resume Analyzer
          </h1>
          <p className="text-gray-300">
            Upload your resume and paste the job description to see how well you match.
          </p>

          {/* Resume Upload */}
          <div className="border-b border-gray-700 pb-6">
            <div className="flex items-center gap-4 mb-4">
              <FiUpload className="text-pink-400 text-3xl" />
              <div>
                <h2 className="text-lg font-semibold text-pink-300">Upload Resume</h2>
                <p className="text-sm text-gray-400">Accepted: PDF, DOC, DOCX</p>
              </div>
            </div>
            <label className="block cursor-pointer bg-gray-800/40 text-gray-100 rounded-lg px-4 py-3 hover:bg-gray-700/60 transition-all">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
              {fileName ? `📄 ${fileName}` : "Click to upload resume"}
            </label>
          </div>

          {/* Job Description */}
          <div className="border-b border-gray-700 pb-6">
            <textarea
              rows={6}
              placeholder="Paste the job description here..."
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              className="w-full bg-gray-800/40 text-white rounded-lg p-4 focus:ring-2 focus:ring-pink-400 placeholder-gray-400"
            />
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform"
          >
            🔍 Analyze Match
          </button>

          {/* Match Score */}
          {matchScore !== null && (
            <div className="flex flex-col items-center gap-4 pt-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="50"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={(1 - matchScore / 100) * 2 * Math.PI * 50}
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 60 60)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                  {matchScore}%
                </div>
              </div>
              <p className="text-gray-400 text-center">Resume Match Score</p>
            </div>
          )}
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={uploadImg} alt="Upload Illustration" className="w-3/4 lg:w-full" />
        </motion.div>
      </div>

      {/* Floating Blurs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -bottom-28 -right-28 w-80 h-80 bg-teal-400 rounded-full opacity-20 blur-3xl"
      />
    </section>
  );
};

export default ResumeAnalyzer;
