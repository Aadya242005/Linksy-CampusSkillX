import React, { useEffect, useState } from "react";
import bgFuture from "../assets/web2.jpeg"; // Your background image

const allQuestions = [
  {
    title: "Two Sum",
    link: "https://leetcode.com/problems/two-sum/",
    difficulty: "Easy",
    tags: ["Array", "Hashing"],
  },
  {
    title: "Longest Substring Without Repeating Characters",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    difficulty: "Medium",
    tags: ["String", "Sliding Window"],
  },
  {
    title: "Merge Intervals",
    link: "https://leetcode.com/problems/merge-intervals/",
    difficulty: "Medium",
    tags: ["Sorting", "Greedy"],
  },
  {
    title: "Median of Two Sorted Arrays",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    difficulty: "Hard",
    tags: ["Binary Search", "Divide and Conquer"],
  },
  {
    title: "Best Time to Buy and Sell Stock",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    difficulty: "Easy",
    tags: ["Array", "DP"],
  },
  {
    title: "Longest Palindromic Substring",
    link: "https://leetcode.com/problems/longest-palindromic-substring/",
    difficulty: "Medium",
    tags: ["String", "DP"],
  },
];

const DailyLeetCode = () => {
  const [dailyQuestions, setDailyQuestions] = useState([]);

  useEffect(() => {
    // Pick 3 random questions for daily highlight
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setDailyQuestions(shuffled.slice(0, 3));
  }, []);

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <section
      className="min-h-screen py-20 px-6 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${bgFuture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto text-center bg-black/60 p-10 rounded-md">
        <h1 className="text-4xl font-bold text-teal-300 mb-6">
           Daily LeetCode Practice
        </h1>
        <p className="text-gray-200 mb-8">
          Sharpen your coding skills every day with handpicked important LeetCode questions.
        </p>

        <h2 className="text-2xl text-yellow-300 font-semibold mb-4">⭐ Daily Highlights</h2>
        <ul className="list-disc list-inside space-y-3 text-left text-gray-100 mb-8">
          {dailyQuestions.map((q, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <a
                  href={q.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:underline font-medium"
                >
                  {q.title}
                </a>
                <span className={`ml-2 text-sm ${
                  q.difficulty === "Easy" ? "text-green-400" :
                  q.difficulty === "Medium" ? "text-yellow-400" :
                  "text-red-400"
                }`}>
                  [{q.difficulty}]
                </span>
                <span className="text-gray-300 text-sm ml-2">
                  {q.tags.join(", ")}
                </span>
              </div>
              <button
                onClick={() => copyLink(q.link)}
                className="text-xs text-gray-300 hover:text-teal-400 underline"
              >
                Copy Link
              </button>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl text-teal-300 font-semibold mb-4">📚 All Important Questions</h2>
        <ul className="list-disc list-inside space-y-3 text-left text-gray-100">
          {allQuestions.map((q, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <a
                  href={q.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:underline font-medium"
                >
                  {q.title}
                </a>
                <span className={`ml-2 text-sm ${
                  q.difficulty === "Easy" ? "text-green-400" :
                  q.difficulty === "Medium" ? "text-yellow-400" :
                  "text-red-400"
                }`}>
                  [{q.difficulty}]
                </span>
                <span className="text-gray-300 text-sm ml-2">
                  {q.tags.join(", ")}
                </span>
              </div>
              <button
                onClick={() => copyLink(q.link)}
                className="text-xs text-gray-300 hover:text-teal-400 underline"
              >
                Copy Link
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DailyLeetCode;
