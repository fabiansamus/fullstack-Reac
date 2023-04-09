const https = require("https");
const express = require('express');
const { log } = require("console");
const { json } = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const url="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=46f8007f9aebd66827cda5a9f33f4c87}"
    https.get(url, (responce)=> {
        console.log(responce.statusCode)
        responce.on('data',(data)=>{
            console.log(data);
            const weather = JSON.parse(data)
            const temp = weather.main.temp
        })
    })
    res.send('Hello World!')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
