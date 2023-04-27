const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const date = require(__dirname+"/data.js")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

var items =[];
var workItems =[]

app.get('/', (req, res) => {
    
    var day = date.getDate();
    res.render("list", {listTitle: day, newListItems :items})
// res.sendFile(__dirname+'/index.html')
});
app.post("/",(req,res)=>{
    item = req.body.newitem
    console.log(req.body)
    if(req.body.list === "Work List"){
        workItems.push(item)
        res.redirect("/Work")
    }else{items.push(item)
        res.redirect("/")}
    
})
app.get("/Work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems :workItems})
// res.sendFile(__dirname+'/index.html')
});

app.get("/about",(req,res)=>{
    res.render("About");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))