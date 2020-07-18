var express = require("express")
app = express()
port = process.env.PORT ||3000
var bodyparser = require("body-parser")
app.use(express.static(__dirname+'/views'))
app.use(express.static(__dirname+'/public'))
var todoroutes = require("./routes/todo")
const bodyParser = require("body-parser")
app.use('/api/todos',todoroutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile("index.html")
})

app.listen(port)