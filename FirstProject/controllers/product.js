const Product = require('../model/product')
const Profile = require('../model/profile')
const express = require('express')
// const productSchema = require('../model/product')
const getAllProduct = async (req, res) => {
    res.status(200).json({ msg: "Product are avilable", })
    console.log(res)
}

const getAllProducttesting = async (req, res) => {
    res.status(200).json({ msg: "Product testing are avilable" })

}
const postapi = async (req, res) => {
    const { name, price, feature, rating } = req.body

    const tttt = await Product.create({
        name, price, feature, rating
    })
    res.status(200).send({
        message: "Added",
        success: true,
        data: {
            tttt
        }
    })
}
const profile = async (req, res) => {

    try {
        const { first_name, last_name, handicape, adress } = req.body
        const data = await Profile.create({
            first_name, last_name, adress, handicape
        })
        res.status(200).send({
            message: "profile created successfully",
            success: true,
            data: {
                data
            }
        })
    } catch (error) {
        console.log("errorerrorerrorerrorerrorerrorerrorerror===============", error.message)
        res.status(500).send({
            message: error.message,
            success: false
        })
    }

}

module.exports = { getAllProduct, getAllProducttesting, postapi, profile }