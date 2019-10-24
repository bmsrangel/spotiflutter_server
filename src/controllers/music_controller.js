var mysql = require("../connections/mysql_connection");
const path = require("path");
const fs = require("fs");
const getStat = require("util").promisify(fs.stat);
const mediaserver = require("mediaserver");

module.exports = {
  async listArtists(req, res) {},

  async sendMusic(req, res) {
    var filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "music",
      "LTS",
      "#5",
      "01. Ultra Overcorrection.mp3"
    );
    mediaserver.pipe(
      req,
      res,
      filePath
    );
  },

  async sendThumb(req, res) {
    var filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "music",
      "LTS",
      "#5",
      "cover.jpg"
    );
    return res.sendFile(filePath);
  }
};
