const express = require("express")
const routes = express.Router()
const controller = require("../controller/getDataController")
const {cacheData} = require("../middaleware/cachedata")

routes.get("/fish/:species", cacheData, controller.getSpeciesData);

module.exports = routes



