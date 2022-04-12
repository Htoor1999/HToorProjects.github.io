//[ league, lastname, firstname, age, position], index: [0-9] = NHL, [10-19] = NBA, [20-29] = PL
let athletes = [
    ["NHL", "Crosby","Sidney", "34", "FWD", "Canada"],
    ["NHL","Mcdavid", "Connor", "25", "FWD", "Canada"],
    ["NHL", "Mackinnon", "Nathan", "26", "FWD", "Canada"],
    ["NHL", "Matthews", "Auston", "24", "FWD", "USA"],
    ["NHL", "Makar", "Cale", "23", "DEF", "Canada"],
    ["NHL", "Draisaitl", "Leon", "26", "FWD", "Germany"],
    ["NHL", "Kucherov", "Nikita", "28", "FWD", "Russia"],
    ["NHL", "Shesterkin", "Igor", "26", "G", "Russia"],
    ["NHL", "Huberdeau", "Jonathan", "28", "FWD", "Canada"],
    ["NHL", "Ovechkin", "Alexander", "36", "FWD", "Russia"],
    ["NBA", "James", "Lebron", "37", "SF", "USA"],
    ["NBA", "Antetokounmpo", "Giannis", "27", "SF", "Greece"],
    ["NBA", "Durant", "Kevin", "33", "SF", "USA"],
    ["NBA", "Curry", "Stephen", "34", "PG", "USA"],
    ["NBA", "Jokic", "Nikola", "27", "C", "Serbia"],
    ["NBA", "Doncic", "Luka", "23", "PG", "Slovenia"], 
    ["NBA", "Butler", "Jimmy", "32", "SF", "USA"],
    ["NBA", "Towns", "Karl-Anthony", "26", "C", "USA"],
    ["NBA", "George", "Paul", "31", "SF", "USA"],
    ["NBA", "Booker", "Devin", "25", "SG", "USA"],
    ["PL", "De Bruyne", "Kevin", "30", "MID", "Belgium"],
    ["PL", "Salah", "Mohamed", "29", "FWD", "Egypt"], 
    ["PL", "Kane", "Harry", "28", "FWD", "England"], 
    ["PL", "Alexander-Arnold", "Trent", "23", "DEF", "England"],
    ["PL", "Ronaldo", "Cristiano", "37", "FWD", "Portugal"],
    ["PL", "Fernandes", "Bruno", "27", "MID", "Portugal"],
    ["PL", "Cancelo", "Joao", "27", "DEF", "Portugal"], 
    ["PL", "Van Dijk", "Virgil", "30", "DEF", "Netherlands"],
    ["PL", "Son", "Heung-min", "29", "FWD", "South Korea"], 
    ["PL", "Kante", "N'Golo", "31", "MID", "France"]
]

function playerList(){
    let NBA = document.getElementById("NBA"); 
    let NHL = document.getElementById("NHL");
    let PL = document.getElementById("PL"); 

    for(i = 0; i < 10; i++){
        NHL.innerHTML += "<li>" + athletes[i][2] + " " + athletes[i][1] + "</li>";
    }
    
    for(i = 10; i < 20; i++){
        NBA.innerHTML += "<li>" + athletes[i][2] + " " + athletes[i][1] + "</li>";
    }

    for(i = 20; i < 30; i++){
        PL.innerHTML += "<li>" + athletes[i][2] + " " + athletes[i][1] + "</li>";
    }
   
}


let guessCount = 5;
let randomAthleteIndex = -1;

function checkGuess(){
 
    let guess = document.getElementById("guess").value;   
    let index = -1; //index of guessed athlete

    let guessRemain = document.getElementById("guessRemaining");
    guessCount--;
    guessRemain.innerHTML = guessCount + " guesses remaining";

   

    for(i = 0; i < athletes.length; i++){
        if(guess.toUpperCase() == athletes[i][1].toUpperCase()){
            index = i;
        }
    }

    if(index == -1){
        alert("Invalid guess");
        return;
    }

    let guessList = document.getElementById("guessTableBody");

    let row = guessList.insertRow();
    let league = row.insertCell();
    let player = row.insertCell();
    let age = row.insertCell();
    let position = row.insertCell();
    let country = row.insertCell();


    league.innerHTML = athletes[index][0];
    player.innerHTML = athletes[index][2] + " " + athletes[index][1];
    age.innerHTML = athletes[index][3];
    position.innerHTML = athletes[index][4];
    country.innerHTML = athletes[index][5];

    league.style.backgroundColor = "red";
    player.style.backgroundColor = "red";
    age.style.backgroundColor = "red";
    position.style.backgroundColor = "red";
    country.style.backgroundColor = "red";


    if(athletes[index][0] == athletes[randomAthleteIndex][0]){ 
        league.style.backgroundColor = "green";
    }
    if(athletes[index][3] == athletes[randomAthleteIndex][3]){ 
        age.style.backgroundColor = "green";
    }
    if(athletes[index][4] == athletes[randomAthleteIndex][4]){ 
        position.style.backgroundColor = "green";
    }
    if(athletes[index][5] == athletes[randomAthleteIndex][5]){ 
        country.style.backgroundColor = "green";
    }
    
    //check if league, age, position and country of birht of player matches with mystery player

    if(athletes[index][1].toUpperCase() == athletes[randomAthleteIndex][1].toUpperCase()){
        player.style.backgroundColor = "green";
        winGame(index);
    }
    else if(guessCount == 0){
        loseGame();
        return;
    }
    else{
        alert("Incorrect, try again")
    }//checks if correct player was guessed

}

function pickRandomAthlete(){
    randomAthleteIndex = Math.floor(Math.random() * athletes.length);
}

function generateNewPlayer(){
    let guessList = document.getElementById("guessTableBody");
    guessList.innerHTML = "";
    guessCount = 5;

    let guessRemain = document.getElementById("guessRemaining");
    guessRemain.innerHTML = guessCount + " guesses remaining";
    pickRandomAthlete();
}

let didYouWin = 0; // 0 means you lose, 1 means you win
function winGame(index){
    alert("You guessed right! The mystery athlete was " + athletes[index][2] + " " + athletes[index][1]);
    didYouWin = 1;
}

function loseGame(){
    alert("Incorrect, you are out of guesses. The mystery player was " + athletes[randomAthleteIndex][2] + " " +athletes[randomAthleteIndex][1] +". A new player will be generated for you to guess");
    didYouWin = 0;
    generateNewPlayer();
}

let modal = document.getElementById("modal");

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

window.addEventListener('load', (event) => {
    playerList();
    openModal();
    generateNewPlayer();
});


function hardMode(){
    alert("You have entered hard mode. You will now have betweem 30-40 seconds to guess the player");
    beginCount();
}

let seconds;
let timer;
let counting = document.getElementById("counting");
function beginCount(){

    seconds = Math.ceil(Math.random() * 10) + 30;
    if(seconds > 0){
        timer = setInterval(countHelper, 1000);
    }
}

function countHelper(){
   // alert(seconds);
    seconds = (seconds - 1);
    counting.innerHTML = seconds;

    if(didYouWin == 1){
        clearInterval(timer);
    }
    if(seconds == 0){
        loseGame();
        clearInterval(timer);
    }   
}
