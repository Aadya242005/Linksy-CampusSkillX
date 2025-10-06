import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Award,
  Trophy,
  Star,
  Code,
  Briefcase,
  GitBranch,
} from "lucide-react";

// Dummy data for contributions (like GitHub heatmap style)
const contributions = Array(7)
  .fill(0)
  .map(() =>
    Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4))
  );

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "Python",
  "AWS",
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Tailwind.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/username/portfolio",
  },
  {
    title: "Hackathon App",
    description: "Real-time collaboration app for hackathons.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/username/hackathon-app",
  },
];

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "skills", label: "Skills", icon: Star },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contributions", label: "Contributions", icon: GitBranch },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Contribution color scale
  const colorMap = {
    0: "bg-gray-200",
    1: "bg-green-300",
    2: "bg-green-500",
    3: "bg-green-700",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16 font-sans max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-8 mb-12">
        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-indigo-600 shadow-lg"
        />
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-1">Kevin Gilbert</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          <div className="flex items-center space-x-4 mt-4 text-gray-500">
            <Mail size={20} />
            <span>kevin@example.com</span>
            <Phone size={20} />
            <span>+1 555 123 4567</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 mb-10">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 pb-3 border-b-4 ${
              activeTab === id
                ? "border-indigo-600 text-indigo-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-indigo-500"
            } transition-colors duration-200`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {activeTab === "overview" && (
          <section className="space-y-8 max-w-4xl">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <Trophy className="mx-auto mb-2 text-yellow-500" size={36} />
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-gray-500">Hackathons</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <Award className="mx-auto mb-2 text-blue-500" size={36} />
                <h3 className="text-3xl font-bold">8</h3>
                <p className="text-gray-500">Certificates</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <Star className="mx-auto mb-2 text-purple-500" size={36} />
                <h3 className="text-3xl font-bold">45</h3>
                <p className="text-gray-500">Contributions</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "skills" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {activeTab === "projects" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Projects</h2>
            <div className="space-y-6">
              {projects.map(({ title, description, tech, link }) => (
                <div
                  key={title}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-2 text-indigo-600">{title}</h3>
                  <p className="text-gray-600 mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "contributions" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contributions</h2>
            <p className="mb-4 text-gray-600 max-w-xl">
              Visual representation of activity (like GitHub contribution graph).
            </p>
            <div className="grid grid-flow-col auto-cols-[15px] gap-1 overflow-x-auto pb-4">
              {contributions.map((week, i) =>
                week.map((level, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-4 h-4 rounded-sm cursor-pointer ${colorMap[level]}`}
                    title={`Contributions: ${level}`}
                  />
                ))
              )}
            </div>
          </section>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
