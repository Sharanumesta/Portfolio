import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-gradient-to-t from-black via-purple-900/10 to-black py-16 px-4 md:px-20 border-t border-purple-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Contact Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white-500 mb-6">
            Let's <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center mx-auto max-w-md ">
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
                className="bg-purple-900/30 hover:bg-purple-800/50 p-4 rounded-xl border border-purple-700/50 backdrop-blur-sm"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-purple-300 text-xl"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full my-5" />

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-4 text-sm">
          <motion.div
            className="text-purple-300 font-bold text-xl flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-500">&lt;</span>
            <span className="text-purple-500 items-center">SHARANU</span>
            <span className="text-purple-500">/&gt;</span>
          </motion.div>

          <p className="text-gray-500">Built with ❤️ using React & Tailwind</p>

          <p className="text-gray-500">
            © {new Date().getFullYear()} Sharanu. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
