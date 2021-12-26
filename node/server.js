const express = require("express")
const app = express()
const port = 4000
const router = require("./routes/router")
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", router)
app.listen(port, () => {

    console.log('app listing at http://localhost:${port}')
})
