import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MarkdownPage from "./components/MarkdownPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<MarkdownPage />} />
          <Route path="/*" element={<MarkdownPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
