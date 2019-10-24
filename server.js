const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);

var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
};

app.use(express.json());
// app.use(express.static("public", options));
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello, World!!!");
});

app.use("/api", require("./src/routes"));

server.listen(3001);
