import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.footer
      id="contact"
      className={`pt-16 pb-10 px-4 md:px-20 border-t transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-t from-gray-900 via-purple-900/10 to-gray-900 border-purple-900/30"
          : "bg-gradient-to-t from-gray-50 via-purple-100 to-gray-50 border-purple-400/30"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h2 className={`text-3xl font-bold mb-6 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}>
            Let's <span className="text-purple-500">Connect</span>
          </h2>
          <p className={`mb-10 text-center mx-auto max-w-md ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Feel free to reach out or connect with me through any of the
            platforms below.
          </p>

          <div className="flex gap-8 mb-8">
            {[
              {
                icon: faEnvelope,
                url: "mailto:sharanumesta@gmail.com",
                label: "Email",
              },
              {
                icon: faGithub,
                url: "https://github.com/sharanumesta",
                label: "GitHub",
              },
              {
                icon: faLinkedin,
                url: "https://linkedin.com/in/sharanumesta",
                label: "LinkedIn",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`p-4 rounded-xl backdrop-blur-sm transition-colors duration-300 ${
                  isDark
                    ? "bg-purple-900/30 hover:bg-purple-800/50 border border-purple-700/50"
                    : "bg-purple-100/80 hover:bg-purple-200/50 border border-purple-300/50"
                }`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-xl ${
                    isDark ? "text-purple-300" : "text-purple-600"
                  }`}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full my-1 ${
          isDark
            ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        }`} />

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-2 text-sm">
          <motion.div
            className={`font-bold text-xl flex items-center ${
              isDark ? "text-purple-300" : "text-purple-600"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-500">&lt;</span>
            <span className="text-purple-500 items-center">SHARANU</span>
            <span className="text-purple-500">&nbsp;/&gt;</span>
          </motion.div>

          <p className={isDark ? "text-gray-500" : "text-gray-600"}>
            Built with ❤️ using React & Tailwind
          </p>

          <p className={isDark ? "text-gray-500" : "text-gray-600"}>
            © {new Date().getFullYear()} Sharanu. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;