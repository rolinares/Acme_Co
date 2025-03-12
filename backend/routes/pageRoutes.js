const express = require("express");
const {
  renderPage,
  listAvailablePages,
} = require("../controllers/pageController");

const router = express.Router();

router.get("/api/dynamic-pages", listAvailablePages);
router.get("*", renderPage);

module.exports = router;
