let homeScore = 0;
let guestScore = 0;

const homeScoreUpdater = document.getElementById("home-Score");
const guestScoreUpdater = document.getElementById("guest-Score");

function homeScoreIncrementByOne() {
    
    homeScore +=1;
    homeScoreUpdater.innerText = homeScore;
    
}


function homeScoreIncrementByTwo() {
    
    homeScore +=2;
    homeScoreUpdater.innerText = homeScore;
    
}

function homeScoreIncrementByThree() {

    homeScore +=3;
    homeScoreUpdater.innerText = homeScore;
    
}



function guestScoreIncrementByOne() {

    guestScore += 1;
    guestScoreUpdater.innerText = guestScore;
    
}

function guestScoreIncrementByTwo() {

    guestScore += 2;
    guestScoreUpdater.innerText = guestScore;
    
}

function guestScoreIncrementByThree() {
    
    guestScore += 3;
    guestScoreUpdater.innerText = guestScore;
    
}

function resetHomeScores() {
    homeScore = 0;
    homeScoreUpdater.innerText = homeScore;

}
function resetGuestScores() {
    guestScore = 0;
    guestScoreUpdater.innerText = guestScore;
}