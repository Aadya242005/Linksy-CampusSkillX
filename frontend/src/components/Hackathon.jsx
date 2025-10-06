import React from "react";
import bgImage from "../assets/upload7.svg"; // Light, shadowy background for section

const hackathons = [
  {
    name: "Google Chrome Built-in AI Challenge 2025",
    date: "Sept 1 - Sept 15, 2025",
    mode: "Online",
    prize: "$70,000",
    participants: 8191,
    daysLeft: 12,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "AWS AI Agent Global Hackathon",
    date: "Oct 1 - Oct 10, 2025",
    mode: "Online",
    prize: "$45,000",
    participants: 7004,
    daysLeft: 28,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Baseline Tooling Hackathon",
    date: "Nov 5 - Nov 15, 2025",
    mode: "Offline (NYC)",
    prize: "$30,000",
    participants: 5400,
    daysLeft: 60,
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Open Source Sprint 2025",
    date: "Dec 1 - Dec 10, 2025",
    mode: "Online",
    prize: "$25,000",
    participants: 4600,
    daysLeft: 90,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
];

const topThemes = [
  { theme: "Beginner Friendly", hackathons: 126, totalPrizes: "$490,000" },
  { theme: "Machine Learning/AI", hackathons: 88, totalPrizes: "$776,000" },
  { theme: "Social Good", hackathons: 59, totalPrizes: "$412,000" },
  { theme: "Open Ended", hackathons: 56, totalPrizes: "$161,000" },
  { theme: "Education", hackathons: 32, totalPrizes: "$226,000" },
  { theme: "Web", hackathons: 29, totalPrizes: "$253,000" },
  { theme: "Low/No Code", hackathons: 19, totalPrizes: "$209,000" },
  { theme: "Design", hackathons: 15, totalPrizes: "$52,000" },
  { theme: "Health", hackathons: 15, totalPrizes: "$34,000" },
];

const HackathonsWithThemes = () => {
  return (
    <section
      className="relative py-20 px-6 bg-white text-gray-900"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Hackathons List */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Hackathons for you</h2>

          <div className="space-y-6">
            {hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="flex border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition p-4"
              >
                <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={hack.image}
                    alt={hack.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {hack.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600 mt-2">
                      <span className="bg-green-100 text-green-700 rounded-full px-2 py-0.5">
                        {hack.daysLeft} days left
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM12 14c-4 0-7 3-7 7h14c0-4-3-7-7-7z"
                          />
                        </svg>
                        <span>{hack.mode}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 text-sm">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                      {hack.prize} in prizes
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {hack.participants.toLocaleString()} participants
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Top Hackathon Themes */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Top hackathon themes</h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="pb-2 font-semibold">Theme</th>
                <th className="pb-2 font-semibold">Hackathons</th>
                <th className="pb-2 font-semibold">Total prizes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topThemes.map((theme, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 hover:bg-gray-100 transition cursor-pointer`}
                >
                  <td className="py-2">
                    <span className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-sm">
                      {theme.theme}
                    </span>
                  </td>
                  <td className="py-2">{theme.hackathons}</td>
                  <td className="py-2">{theme.totalPrizes}</td>
                  <td className="py-2 text-blue-600 font-bold text-lg">→</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HackathonsWithThemes;
