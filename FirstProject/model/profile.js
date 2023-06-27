const mongoose = require('mongoose');
const Joi = require('joi');

const ProfileSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,

    },
    last_name: {
        type: String,
        required: [true, "last_name"]
    },
    adress: {
        type: String,
        required: [true, "address"]
    },
    handicape: {
        type: Boolean,
        default: true
    }


}, { timestamps: true, versionKey: false }
)
// module.exports = mongoose.model("Profile", ProfileSchema)

ProfileSchema.methods.profileValidation = function (obj) {
    const ProfileSchemaJoi = Joi.object({
        first_name: Joi.string().min(3).max(8).required(),
        last_name: Joi.string().min(3).max(8).required(),
        adress: Joi.string().min(1).max(50).required(),
        handicape: Joi.boolean().default(false)
    })
    return ProfileSchemaJoi.validate(obj)
}
module.exports = mongoose.model("Profile", ProfileSchema)

// const Profiledata = mongoose.model("Profile", ProfileSchema)
// module.exports = Profiledata