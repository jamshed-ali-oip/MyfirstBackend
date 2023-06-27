const express = require('express')
const routers = express.Router()
const { getAllProduct, getAllProducttesting } = require("../controllers/product")
const Prefix = "/api/v1"

routers.route(`${Prefix}/`).get(getAllProduct)
routers.route(`${Prefix}/testing`).get(getAllProducttesting)

module.exports = routers