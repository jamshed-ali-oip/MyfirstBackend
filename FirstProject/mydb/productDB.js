require("dotenv").config()
const connectDB = require("../db/connect")
const Product = require("../model/product")
const MYproduct = require("./product.json")
const start = async () => {
    try {
        console.log("abcddd");
        await connectDB(process.env.MONGOURL)
        // console.log("abcddd");
        // await Product.createMany(JSON.stringify(MYproduct))
        console.log("success")
    } catch (error) {
        console.log("error", error)
    }
}
start()