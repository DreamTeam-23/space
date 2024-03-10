import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CollapsibleCard = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Define animations
  const cardVariants = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center p-4 shadow-md rounded-lg cursor-pointer"
      onClick={toggleExpanded}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <FaUserCircle className="text-6xl mb-4" />
      <motion.h2
        className="text-xl font-semibold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {title}
      </motion.h2>
      {isExpanded && (
        <motion.p
          className="py-2 text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.p>
      )}
    </motion.div>
  );
};

CollapsibleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const About = () => {
  const developers = [
    {
      name: "Paul",
      role: "Full Stack Developer",
      description:
        "Paul is a full stack developer based in Vancouver, British Columbia, Canada. He has been working in the financial industry for 7+ years before studying at British Columbia Institute of Technology for 3 years and graduating from the Applied Software Development and Applied Web Development programs in December 2023. He also loves capybaras, semi-aquatic rodents native to South America!",
    },
    {
      name: "Harman",
      role: "Software Developer",
      description:
        "Harman is a software developer based in Vancouver, British Columbia, Canada. He is in term 3 of the Bachelor of Science in Applied Computer Science program at British Columbia Institute of Technology.",
    },
    {
      name: "Sami",
      role: "Software Developer",
      description:
        "Sami is a software developer based in Vancouver, British Columbia, Canada. He is in term 3 of the Bachelor of Science in Applied Computer Science program at British Columbia Institute of Technology.",
    },
    {
      name: "Ricky",
      role: "UI/UX Designer",
      description:
        "Ricky is a UI UX designer based in Vancouver, British Columbia, Canada. He graduated the UI UX design program at British Columbia Institute of Technology.",
    },
    {
      name: "Ebod",
      role: "Full Stack Developer",
      description:
        "Ebod is a full stack software developer based in Vancouver, British Columbia, Canada. He is in term 3 of the Web Development option for the Computer Systems Technology diploma program at British Columbia Institute of Technology. Researcher, author, and (self-proclaimed) philosopher. You like jazz?",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-gray-800">
      <Header />
      <div className="space-y-6 p-20 overflow-x-hidden overflow-y-auto max-h-[80vh]">
        {developers.map((developer, index) => (
          <CollapsibleCard
            key={index}
            title={`${developer.name} - ${developer.role}`}
          >
            {developer.description}
          </CollapsibleCard>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
