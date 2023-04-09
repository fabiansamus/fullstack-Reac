const express = require('express')
const bodyParser = require("body-parser")
const app = express()
port =3000;
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
});
app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result= num1+num2
    console.log(req.body);
    res.send(`the result of the cal ${(result)}`);
});
app.get('/bmicalculator',(req,res)=> res.sendFile(__dirname+'/bmiCalculator.html'));
app.post('/bmicalculator',function(req,res){
    var weigth = Number(req.body.weitgth);
    var heigth = Number(req.body.heigth);
    res.send(`Your bmi is ${weigth*heigth}`)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))