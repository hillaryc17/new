let targetNum;

targetNum = Math.floor((Math.random()*100) +1);
console.log(targetNum)
let resultDisplay = document.getElementById('result')
console.log(resultDisplay)

function checkresult(){
    let guess = parseInt(document.getElementById('number').value);
    console.log(guess)
    
    if (guess==targetNum){
        resultDisplay.style.color = "#00cc00";
        resultDisplay.innerHTML = "AYEE YOU RIGHT";
    }
    else if(guess > targetNum){
        resultDisplay.style.color = "#ff0000";
        resultDisplay.innerHTML = "TOO HIGH MAN ";
    }
    else if(guess < targetNum){
        resultDisplay.style.color = "#d9534f";
        resultDisplay.innerHTML = "TOO LOW UGH";
    }
}
