const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/index.html'))
var obj={}
obj.name ="Being zero";
obj.college = "CMRCET";
obj.rno = "17H51A05H6";
app.get('/data',(req,res)=> res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))