const fs = require("fs");
const path = require("path");

function getAvailableRoutes(dir, parentPath = "") {
  let routes = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(parentPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (fs.existsSync(path.join(fullPath, "index.md"))) {
        routes.push(relativePath.replace(/\\/g, "/"));
      }
      routes = routes.concat(getAvailableRoutes(fullPath, relativePath));
    }
  });

  return routes;
}

module.exports = { getAvailableRoutes };
