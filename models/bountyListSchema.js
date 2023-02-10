const mongoose = require('mongoose');
const Schema = mongoose.Schema

//main schema 
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

//export scheam 
module.exports = mongoose.model("bountyDB", bountyListSchema)