require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    msg: "something wrong",
  });
});

app.use("/posts", require("./routes/postRoutes"));

app.listen(3000, () => console.log("server run at port 3000"));
