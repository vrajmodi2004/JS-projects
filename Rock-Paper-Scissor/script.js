const computerchose=document.getElementById("computerchose")
const rockbtn=document.getElementById("rock")
const paperbtn=document.getElementById("paper")
const scissorbtn=document.getElementById("scissor")
const winnername=document.getElementById("winnername")
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");
const array=[1,2,3]

rockbtn.addEventListener("click",findResultForRock)
paperbtn.addEventListener("click",findResultForPaper)
scissorbtn.addEventListener("click",findResultForScissor)

function showPopup(message) {
    popupMessage.innerHTML = message;
    popup.style.display = "flex";


    setTimeout(function() {
        popup.style.display = "none"; // Hide the popup
    }, 1000);
} // 1000ms = 1 second


popupClose.addEventListener("click", function () {
    popup.style.display = "none";
});


function findResultForRock(){
    var computerchoice=Math.floor(Math.random()*3)
    switch(computerchoice)
    {
        case 0:
        {
            computerchose.textContent="ROCK"
            winnername.textContent="DRAW"
            break;
        }
        case 1:
        {
            computerchose.textContent="PAPER"
            winnername.textContent="COMPUTER WON"
            showPopup("😞")
            break;
        }
        case 2:
        {
            computerchose.textContent="SCISSOR"
            winnername.textContent="YOU WON"
            showPopup("😊")
            break;
        }
    }
}
function findResultForPaper(){
    var computerchoice=Math.floor(Math.random()*3)
    switch(computerchoice)
    {
        case 0:
        {
            computerchose.textContent="ROCK"
            winnername.textContent="YOU WON"
            showPopup("😊")
            break;
        }
        case 1:
        {
            computerchose.textContent="PAPER"
            winnername.textContent="DRAW"
            break;
        }
        case 2:
        {
            computerchose.textContent="SCISSOR"
            winnername.textContent="COMPUTER WON"
            showPopup("😞")
            break;
        }
    }
}
function findResultForScissor(){
    var computerchoice=Math.floor(Math.random()*3)
    switch(computerchoice)
    {
        case 0:
        {
            computerchose.textContent="ROCK"
            winnername.textContent="COMPUTER WON"
            showPopup("😞")
            break;
        }
        case 1:
        {
            computerchose.textContent="PAPER"
            winnername.textContent="YOU WON"
            showPopup("😊")
            break;
        }
        case 2:
        {
            computerchose.textContent="SCISSOR"
            winnername.textContent="DRAW"
            break;
        }
    }
}