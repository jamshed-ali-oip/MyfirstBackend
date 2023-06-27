
const express = require('express')
const getAllProduct = async (req, res) => {
    res.status(200).json({ msg: "Product are avilable", })
    console.log(res)
}

const getAllProducttesting = async (req, res) => {
    res.status(200).json({ msg: "Product testing are avilable" })

}

module.exports = { getAllProduct, getAllProducttesting }