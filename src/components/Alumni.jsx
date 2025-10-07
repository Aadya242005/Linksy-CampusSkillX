import React from "react";
import bgImage from "../assets/upload8.svg"; // make sure this path is correct

function AlumniSection() {
  const alumniData = [
    {
      _id: 1,
      name: "Aarav Sharma",
      role: "Software Engineer",
      company: "Google",
      batch: "2020",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "https://linkedin.com/in/aaravsharma",
    },
    {
      _id: 2,
      name: "Riya Verma",
      role: "Data Scientist",
      company: "Microsoft",
      batch: "2019",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "https://linkedin.com/in/riyaverma",
    },
    {
      _id: 3,
      name: "Kabir Singh",
      role: "Product Manager",
      company: "Amazon",
      batch: "2018",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      linkedin: "https://linkedin.com/in/kabirsingh",
    },
    {
      _id: 4,
      name: "Neha Gupta",
      role: "UX Designer",
      company: "Adobe",
      batch: "2021",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedin: "https://linkedin.com/in/nehagupta",
    },
    {
      _id: 5,
      name: "Arjun Mehta",
      role: "Cloud Engineer",
      company: "IBM",
      batch: "2017",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      linkedin: "https://linkedin.com/in/arjunmehta",
    },
    {
      _id: 6,
      name: "Simran Kaur",
      role: "AI Researcher",
      company: "OpenAI",
      batch: "2022",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
      linkedin: "https://linkedin.com/in/simrankaur",
    },
    {
      _id: 7,
      name: "Dev Patel",
      role: "Cybersecurity Analyst",
      company: "Cisco",
      batch: "2016",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      linkedin: "https://linkedin.com/in/devpatel",
    },
    {
      _id: 8,
      name: "Ananya Desai",
      role: "Frontend Developer",
      company: "Spotify",
      batch: "2020",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      linkedin: "https://linkedin.com/in/ananyadesai",
    },
    {
      _id: 9,
      name: "Rahul Nair",
      role: "Full Stack Developer",
      company: "Netflix",
      batch: "2019",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      linkedin: "https://linkedin.com/in/rahulnair",
    },
  ];

  return (
    <section
      id="alumni"
      className="relative py-20 px-6 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-5xl font-extrabold mb-6">
          Our <span className="text-teal-400">Alumni</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-14 text-gray-200">
          Explore the journeys of our exceptional alumni who are now excelling
          in top tech companies around the world.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {alumniData.map((alumni) => (
            <div
              key={alumni._id}
              className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
                hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center"
            >
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-teal-200"
              />
              <h3 className="text-xl font-bold text-teal-700">{alumni.name}</h3>
              <p className="text-gray-600">{alumni.role}</p>
              <p className="text-sm text-gray-500 mb-2">
                {alumni.company} • Batch {alumni.batch}
              </p>
              <a
                href={alumni.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-600 hover:text-teal-800 font-medium mt-2"
              >
                🔗 LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlumniSection;
