require("dotenv").config();
const express = require("express");
const app = express();

const { errorHandler } = require("./middlewares/ErrorHandler");

app.use(express.json());

app.use("/posts", require("./routes/postRoutes"));
app.use(errorHandler);

app.listen(3000, () => console.log("server run at port 3000"));
