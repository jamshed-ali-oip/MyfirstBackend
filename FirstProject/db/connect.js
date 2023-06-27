const mongoose = require("mongoose")
const uri = "mongodb+srv://jamshedali:m3LYezpiD7lDv201@mybakend.lke6f1h.mongodb.net/"
const connectDB = () => {
    console.log("db connect")
    return mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
module.exports = connectDB