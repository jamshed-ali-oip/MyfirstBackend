const mongoose = require("mongoose")
const connectDB = () => {
    console.log("db connect")
    return mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
module.exports = connectDB