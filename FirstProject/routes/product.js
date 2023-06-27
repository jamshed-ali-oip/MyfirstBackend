const express = require('express')
const routers = express.Router()
const { getAllProduct, getAllProducttesting, postapi, profile } = require("../controllers/product")
const Prefix = "/api/v1"
const bodyParser = require('body-parser');

routers.use(bodyParser.json());
routers.use(bodyParser.urlencoded({ extended: true }));

routers.route(`${Prefix}/`).get(getAllProduct)
routers.route(`${Prefix}/testing`).get(getAllProducttesting)
routers.route(`${Prefix}/posting`).post(postapi)
routers.route(`${Prefix}/profile`).post(profile)

module.exports = routers