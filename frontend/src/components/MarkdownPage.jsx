import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function MarkdownPage() {
  const location = useLocation();
  const [content, setContent] = useState(
    '<h1 class="text-2xl text-center mt-10">Loading...</h1>'
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/${location.pathname}`
      );
      try {
        const markdown = await response.text();
        setContent(markdown);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setContent(
          '<h1 class="text-red-500 text-center mt-10">Page not found</h1>'
        );
      }
    };
    fetchData();
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10"
    >
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose lg:prose-xl text-black"
      />
    </motion.div>
  );
}
