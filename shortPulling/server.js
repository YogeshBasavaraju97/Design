const express = require('express')

const app = express()
 const data = "initial data"
const updatedData = "updated data"


app.get("/", (req,res) => {
 res.sendFile(__dirname + '/index.html')
})

app.get("/getData", (req,res) =>{
  res.json({data})
})

app.get('/updatedData', (req,res)=>[
  res.send({updatedData})
])


const port = process.env.PORT || 5555
app.listen(port, () =>{ console.log(`server is running on ${port}`)})