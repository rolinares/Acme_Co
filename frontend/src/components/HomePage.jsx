import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HomePage() {
  const [availableLinks, setAvailableLinks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/dynamic-pages`)
      .then((response) => response.json())
      .then((links) => {
        setAvailableLinks(links.pages);
      })
      .catch(() => setAvailableLinks([]));
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10 text-black"
      >
        <h1 className="text-2xl text-center mt-10">Welcome to ACME</h1>
        <p className="text-lg text-center mt-5">
          Click on the links above to view the markdown pages
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10"
      >
        {availableLinks.length > 0 &&
          availableLinks.map((link, index) => (
            <a
              key={index}
              href={`/${link}`}
              className="block text-lg text-blue-600 hover:underline"
            >
              {link}
            </a>
          ))}
      </motion.div>
    </>
  );
}
