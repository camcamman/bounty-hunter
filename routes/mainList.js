const express = require(`express`)
const jediRouter = express.Router()
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const bountyDB = require("../models/bountyListSchema")

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/bountyDB',
{useNewUrlParser: true},
(msg) => console.log(msg ? msg : "connected to DB"));

const bounty = [
    {fName:"luke", lName:"skywalker", living:true, bountyAmount:100, type:"jedi", _id:uuidv4()},
]

//get all
jediRouter.get("/", (req, res, next) => {
    bountyDB.find((err, stuff) => {
        if(err) {
            res.status(500).send(err)
            return next (err)
        }
        return res.status(200).send(stuff)
    })
})

//add one 
jediRouter.post("/", (req, res) => {
    const newBounty = new bountyDB(req.body)
    newBounty.save((err, addedBounty) => {
        if(err) {
            res.status(500).send(err)
            return next (err)
        }
        return res.status(200).send(addedBounty)
    })
})

//delete
jediRouter.delete("/:bountyId", (req, res) => {
    const id = req.params.bountyId
    bountyDB.findOneAndDelete({_id: id}, (err, deletedBounty) => {
        if(err) {
            res.status(500).send(err)
            return next (err)
        }
        res.status(200).send(`deleted ${deletedBounty}`)
    })
})

//edit one 
jediRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body

    const bountyIndex = bounty.findIndex(bountyItem => bountyItem._id === bountyId)
    const updatedBountyItem = Object.assign(bounty[bountyIndex], updateObject)
    res.send(updatedBountyItem)
})

module.exports = jediRouter