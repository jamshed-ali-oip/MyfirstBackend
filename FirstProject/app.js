require("dotenv").config()
const express = require('express');
const app = express()
const prodductroute = require("./routes/product")
const connectDB = require("./db/connect")

// app.get('/', (req, res) => {
//     res.send("i am  live here ")
// })
app.use(("/", prodductroute))
const PORT = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(PORT, "i am connected")
        })
    } catch (error) {
        console.log("error", error)
    }
}

start()
