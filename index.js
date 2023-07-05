const express = require("express")

const app = express()

const PORT= 3300

app.get("/",(req,res)=>{
    res.send("Hello backend budies")
    console.log("heelo backenc buddies at console")
})


app.get("/contact",(req,res)=>{
    res.send("Heelo this is my contact . and my prhone nyumber is 123456789")
})

// post 
// update
// delete









// 
app.listen(PORT,(req,res)=>{
    console.log(`Server running on port ${PORT}...`)
})