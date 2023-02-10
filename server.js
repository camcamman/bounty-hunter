const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

//routes
// app.use("/sith", require("./routes/sithRouter"))
app.use("/bounty", require("./routes/mainList"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log("server is on")
})
