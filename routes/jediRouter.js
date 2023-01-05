const express = require(`express`)
const jediRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const jedi = [
    {fName:"luke", lName:"skywalker", _id:uuidv4},
    {fName:"j1", lName:"j1", _id:uuidv4},
    {fName:"j2", lName:"j2", _id:uuidv4},
    {fName:"j3", lName:"j3", _id:uuidv4}
]

jediRouter.get("/", (req, res) => {
    res.send(jedi)
})

jediRouter.post("/", (req, res) => {
    const newJedi = req.body
    newJedi._id = uuidv4
    jedi.push(newJedi)
    res.send(`New jedi was added `)
    // res.send(newJedi)
})

module.exports = jediRouter