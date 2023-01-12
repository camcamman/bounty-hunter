const express = require(`express`)
const sithRouter = express.Router()
const { v4: uuidv4 } = require('uuid');
const jediRouter = require('./mainList');

const app = express()
const port = 3001

const sith = [
    {fName:"s0", lName:"s0", _id:uuidv4()},
    {fName:"s1", lName:"s1", _id:uuidv4()},
    {fName:"s2", lName:"s2", _id:uuidv4()},
    {fName:"s3", lName:"s3", _id:uuidv4()},
    {fName:"s4", lName:"s4", _id:uuidv4()},
    {fName:"s5", lName:"s5", _id:uuidv4()}
]

// sithRouter.route("/")
//     .get("/", (req, res) => {
//     res.send(sith)
//  })
//     .post((req, res) => {
//     const newSith = req.body
//     newSith._id = uuidv4
//     sith.push(newSith)
//     res.send(`New sith was added`)
//  })



sithRouter.get("/", (req, res) => {
    res.send(sith)
})

sithRouter.post("/", (req, res) => {
    const newSith = req.body
    newSith._id = uuidv4
    sith.push(newSith)
    res.send(`New sith was added `)
})

app.use(express.json())

module.exports = sithRouter