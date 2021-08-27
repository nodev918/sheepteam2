const express = require("express")
const app = express()
const PORT = process.env.PORT || 5555

/*
app.get('/',(req,res)=>{
    res.send("hello from server");
})
*/

//if(process.env.NODE_ENV == "production"){
app.use(express.static('client/build'))
const path = require('path')
app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
    //}



app.listen(PORT, () => {
    console.log("server is listening on: ", PORT)
})