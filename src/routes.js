const express = require("express");
const routes = express.Router();
const controllers = require("./controllers/music_controller");

routes.get("/music", controllers.sendMusic);
routes.get("/sendThumb", controllers.sendThumb);

module.exports = routes;
