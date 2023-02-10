const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

//routes
app.use("/bounty", require("./routes/mainList"))

//main err handling 
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//server turn on 
app.listen(port, () => {
    console.log("server is on")
})
