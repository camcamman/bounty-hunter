const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bountyListSchema = new Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    living: {
        type: Boolean
    },
    bountyAmount: {
        type: Number
    },
    type: {
        type: String
    } 
})

module.exports =  mongoose.module("bountyDB", bountyListSchema)


// {
//     "fName": "luke",
//     "lName": "skywalker",
//     "living": true,
//     "bountyAmount": 100,
//     "type": "jedi",
//     "_id": "9086be45-fce6-4867-aa66-907596f0e8c2"
// }