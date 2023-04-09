var buttonColours = ["red","blue","green","yellow"];
var gamePattern =[];
var userClickedPattern =[];
var level =0;
var userInput =0
// set event to start game if a key is pressed
document.addEventListener('keydown', nextSequence)
function nextSequence() {
    level ++;
    $('h1').text(`level ${level}`)
    var randomChosenColour =''
    var randomNumber = Math.floor(Math.random()*4)
    randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern,randomNumber)
    animateButton(gamePattern[gamePattern.length -1])
}
//play sound when the func nextSequence or button click play sound
function playSound(sound) {
    var audio1 = new Audio(`sounds/${sound}.mp3`);
    audio1.play();
}
// change the css to show the button that was selected
function animateButton(params) {
    $(`#${params}`).addClass('pressed');
    setTimeout(()=>{
        $(`#${params}`).removeClass('pressed');
        playSound(params);
    },100)
    // console.log($(`#${params}`))
}
function handler(idbutton){
    var userChosenColour = idbutton;
    userInput ++;
    userClickedPattern.push(userChosenColour)
    animateButton(idbutton);
    if(level === userInput && level !== 0 ){
        checkAnswer();
    }
}
$('.btn').click(function (object) {
    handler(object.currentTarget.id)
    // console.log(object.currentTarget.id)
})

function checkAnswer() {
    var count=0;
    while(userClickedPattern[count] !== undefined && gamePattern[count] !== undefined){
        if(userClickedPattern[count] !== gamePattern[count]){
            gamePattern =[];
            userClickedPattern =[];
            level =0;
            userInput =0;
            $('h1').text("Wrong pattern")
            $('body').addClass('game-over')
            setTimeout(()=>{
                $('body').removeClass('game-over');
                playSound('wrong');
                $('h1').text('Game Over, Press Any Key to Restart')
            },50)
        }
        count ++;
    }
    setTimeout(()=>{
        userInput =0;
    userClickedPattern =[];
    nextSequence();
    },500)
    
}