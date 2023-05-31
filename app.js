require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middlewares/jwt.middleware");

const app = express();
require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const chatRouter = require("./routes/chat.routes");
app.use("/chats", isAuthenticated, chatRouter);

require("./error-handling")(app);

module.exports = app