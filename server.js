const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

//routes
app.use("/sith", require("./routes/sithRouter"))
app.use("/jedi", require("./routes/jediRouter"))

app.listen(port, () => {
    console.log("server is on")
})
