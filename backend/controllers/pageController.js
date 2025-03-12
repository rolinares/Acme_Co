const fs = require("fs");
const path = require("path");
const marked = require("marked");
const { getAvailableRoutes } = require("../utils");

const CONTENT_DIR = path.join(__dirname, "../content");

let cachedTemplate = null;

const getTemplate = (templatePath) => {
  if (!cachedTemplate) {
    cachedTemplate = fs.readFileSync(templatePath, "utf8");
  }
  return cachedTemplate;
};

const renderPage = (req, res) => {
  const reqPath =
    req.path.replace("/api", "") === "/"
      ? "/home"
      : req.path.replace("/api", "");
  const contentPath = path.join(CONTENT_DIR, reqPath);

  if (fs.existsSync(contentPath)) {
    const mdPath = path.join(contentPath, "index.md");
    const templatePath = path.join(__dirname, "../templates/template.html");

    if (!fs.existsSync(mdPath) || !fs.existsSync(templatePath)) {
      return res.status(404).send("Page not found");
    }

    const markdownContent = fs.readFileSync(mdPath, "utf8");
    const htmlContent = marked.parse(markdownContent);
    const template = getTemplate(templatePath).replace(
      "{{content}}",
      htmlContent
    );

    res.send(template);
    return;
  }

  res.status(404).send("Page not found");
};

const listAvailablePages = (req, res) => {
  const availableRoutes = getAvailableRoutes(CONTENT_DIR);
  res.json({ pages: availableRoutes });
};

module.exports = { renderPage, listAvailablePages };
