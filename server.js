const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

//routes
// app.use("/sith", require("./routes/sithRouter"))
app.use("/bounty", require("./routes/mainList"))

app.listen(port, () => {
    console.log("server is on")
})
