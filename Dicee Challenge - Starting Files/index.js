$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
});
// create two variables from 1 to 6
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// set the number of dice in the img src
var diceeSelect = `dice${randomNumber1}.png`;
var diceeSelect2 = `dice${randomNumber2}.png`;
// select h1 to be edited
var h1 = document.querySelector('h1')
// edit the img depending on the diceSelect#
document.querySelector('img.img1').setAttribute('src',`images/${diceeSelect}`);
document.querySelector('img.img2').setAttribute('src',`images/${diceeSelect2}`);

h1.addEventListener("click",function()
    {
        location.reload();
        return false;
    }
)
// modifi H1 for the aoutcome
if (randomNumber1 > randomNumber2) {
    h1.textContent='Player One Win'
}else if(randomNumber1 < randomNumber2){
    h1.textContent='Player Two Win'
}else{
    h1.textContent='Draw'
}

