import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function MarkdownPage() {
  const { slug } = useParams();
  const location = useLocation();
  const [content, setContent] = useState(
    '<h1 class="text-2xl text-center mt-10">Loading...</h1>'
  );

  useEffect(() => {
    fetch(`/api/${slug || location.pathname}`)
      .then((response) => response.text())
      .then((markdown) => {
        setContent(markdown);
      })
      .catch(() =>
        setContent(
          '<h1 class="text-red-500 text-center mt-10">Page not found</h1>'
        )
      );
  }, [slug, location.pathname]);

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
