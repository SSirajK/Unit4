const express = require("express")

const app = express.Router()

const Admin = require("../models/admin.model")

app.get("", async(req, res) =>{
    try{
       const data = await Admin.find({}).lean().exec()
       return res.send(data)
    }catch(err){
        console.log(err.message)
        return res.send(err.message)
    }
})
app.post("",async(req,res)=>{
  try{
    const data = await Admin.create(req.body)
    return res.send(data)
  }
  catch(err){
      return res.send(err.message)
  }
})

module.exports = app