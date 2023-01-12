const express = require(`express`)
const jediRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const bounty = [
    {fName:"luke", lName:"skywalker", living:true, bountyAmount:100, type:"jedi", _id:uuidv4()},
    {fName:"j1", lName:"j1", living:true, bountyAmount:100, type:"jedi", _id:uuidv4()},
    {fName:"j2", lName:"j2", living:true, bountyAmount:100, type:"jedi", _id:uuidv4()},
    {fName:"j3", lName:"j3", living:true, bountyAmount:100, type:"jedi", _id:uuidv4()},
    {fName:"s0", lName:"s0", living:true, bountyAmount:100, type:"sith", _id:uuidv4()},
    {fName:"s1", lName:"s1", living:true, bountyAmount:100, type:"sith", _id:uuidv4()},
    {fName:"s2", lName:"s2", living:true, bountyAmount:100, type:"sith", _id:uuidv4()},
    {fName:"s3", lName:"s3", living:true, bountyAmount:100, type:"sith", _id:uuidv4()},
    {fName:"s4", lName:"s4", living:true, bountyAmount:100, type:"sith", _id:uuidv4()},
    {fName:"s5", lName:"s5", living:true, bountyAmount:100, type:"sith", _id:uuidv4()}
]

jediRouter.get("/", (req, res) => {
    res.send(bounty)
})

jediRouter.post("/", (req, res) => {
    const newJedi = req.body
    newJedi._id = uuidv4
    jedi.push(newJedi)
    res.send(`New jedi was added `)
    // res.send(newJedi)
})

jediRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bountyItem => bountyItem._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send("jedi/sith deleted")
})

module.exports = jediRouter