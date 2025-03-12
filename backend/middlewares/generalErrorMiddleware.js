const manageGeneralErrors = (err, req, res, next) => {
  console.error("Server error:", err.message);
  res.status(500).send("Internal server error");
};

module.exports = { manageGeneralErrors };
