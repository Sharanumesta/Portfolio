import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";

const ProjectCard = ({ title, description,overview, tags = [], imageUrl, githubUrl, demoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Map tags to corresponding icons
  const getTagIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case "express":
        return <SiExpress className="mr-1" />;
      case "mongodb":
        return <SiMongodb className="mr-1" />;
      case "postman":
        return <SiPostman className="mr-1" />;
      case "react":
        return <SiReact className="mr-1" />;
      case "bootstrap":
        return <SiBootstrap className="mr-1" />;
      case "node.js":
        return <SiNodedotjs className="mr-1" />;
      default:
        return null;
    }
  };

  // Prevent background scrolling when modal is open
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {/* Clickable Card */}
      <motion.div
        onClick={() => setIsModalOpen(true)}
        className={` h-full rounded-xl overflow-hidden border shadow-lg transition-all duration-300 cursor-pointer ${
          isDark
            ? "bg-gray-800/50 border-purple-900/50 shadow-purple-500/10 hover:shadow-purple-500/30"
            : "bg-purple-100 border-purple-300/50 shadow-purple-400/10 hover:shadow-purple-400/20"
        }`}
        whileHover={{ y: -10 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-48 overflow-hidden m-4 rounded-xl">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="p-4">
          <h3
            className={`text-xl font-bold mb-2 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mb-4 line-clamp-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1 rounded-full flex items-center ${
                  isDark
                    ? "bg-purple-900/50 text-purple-300"
                    : "bg-purple-300 text-purple-700"
                }`}
              >
                {getTagIcon(tag)}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="flex items-center justify-center min-h-screen p-4">
            <motion.div
              className={`relative rounded-xl w-full max-w-2xl mx-auto ${
                isDark
                  ? "bg-gray-800/95 border border-purple-900/50"
                  : "bg-purple-100/95 border border-purple-300/50"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {/* Modal Header */}
              <div
                className={`border-b p-4 flex justify-between items-center ${
                  isDark ? "border-purple-900/50" : "border-purple-300/50"
                }`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  {title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`text-xl ${
                    isDark
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="mb-6">
                  <div
                    className={`h-64 rounded-xl overflow-hidden mb-4 ${
                      isDark ? "bg-gray-700" : "bg-purple-200"
                    }`}
                  >
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    Overview
                  </h4>
                  <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                    {overview}
                  </p>
                </div>

                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDark ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full flex items-center ${
                          isDark
                            ? "bg-purple-900/50 text-purple-300"
                            : "bg-purple-300 text-purple-700"
                        }`}
                      >
                        {getTagIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer (Buttons) */}
              <div
                className={`border-t p-4 flex justify-end gap-4 ${
                  isDark ? "border-purple-900/50" : "border-purple-300/50"
                }`}
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    isDark
                      ? "bg-purple-900 hover:bg-purple-800 text-purple-100"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  <FaGithub />
                  GitHub Repo
                </a>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    isDark
                      ? "bg-purple-700 hover:bg-purple-600 text-purple-100"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
                >
                  <FaExternalLinkAlt />
                  View Live
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
