const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();
const pageRoutes = require("./routes/pageRoutes");
const { manageGeneralErrors } = require("./middlewares/generalErrorMiddleware");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(compression());
app.use(helmet());

app.use(express.static("public"));

app.use("/", pageRoutes);

app.use(manageGeneralErrors);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
