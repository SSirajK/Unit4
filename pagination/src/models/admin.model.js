const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: {type: String, required: true},
    email: { type: String, required: true},
},{
    versionKey: false,
    timestamps: true
})

const Admin = mongoose.model("admin", adminSchema)

module.exports = Admin;