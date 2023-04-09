const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = 3000


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.sendFile(__dirname+'/signup.html'))
app.post('/',(req,res)=>{
    var email = req.body.email
    var lName = req.body.lName
    var fName = req.body.fName
    console.log(email,lName, fName)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))