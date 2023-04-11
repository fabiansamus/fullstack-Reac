const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var items =[];

app.get('/', (req, res) => {
    var today = new Date();
    var options= {
        weekday:"long",
        day:"numeric",
        month:"long",
    };
    var day = today.toLocaleDateString("en-US",options);
    res.render("list", {kindOfDay: day, newListItems :items})
// res.sendFile(__dirname+'/index.html')
});
app.post("/",(req,res)=>{
    item = req.body.newitem

    items.push(item)
    res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))