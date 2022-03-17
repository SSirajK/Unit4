const path = require('path')

const express = require('express');

const  transporter = require('../configs/mail');

const User = require('../models/user.model');

const Admin = require('../models/admin.model');

const router = express.Router();

router.get("/", async (req, res) => {
    try {

         const page = req.query.page||1;

         const pagesize = req.query.pagesize || 5;

         const skip = ( page - 1)*pagesize;

        const users = await User.find().skip(skip).limit(pagesize).lean().exec()

        const totalPages = Math.ceil((await User.find().countDocuments())/pagesize);

        let remaining = totalPages-page;

        if(remaining<=0){
            remaining= 0
        }

        const admin = await Admin.find().lean().exec()

        return res.status(200).send({users, totalPages, remaining})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
})

router.post("/", async (req, res) =>{
    try {
        const user = await User.create(req.body)
        
    transporter.sendMail({
        from: '"Main admin" <admin@amazon.com>',
        to: user.email,
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
        text: `Hi ${user.first_name}, Please confirm your email address`,
    })

    transporter.sendMail({
        from: '"Main admin" <admin@amazon.com>',
        to: "admin1@admin.com, admin2@admin.com, admin3@admin.com, admin4@admin.com, admin5@admin.com",
        subject: `${user.first_name} ${user.last_name} has registered with us`,
        text: `Please welcome ${user.first_name} ${user.last_name}`,
    })

    return res.status(201).send({message: "User added successfully"})
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;