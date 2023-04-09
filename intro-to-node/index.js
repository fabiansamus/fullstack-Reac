var superheroes = require("superheroes");
const supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
var mySuperVilliains = supervillains.random();
console.log(`${mySuperheroName} vs ${mySuperVilliains}`);