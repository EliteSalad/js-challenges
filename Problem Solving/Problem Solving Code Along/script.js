// Client Brief...
// Create an application which can be used to keep track    
// of a score in a footbal match

//1 It;s football there's two teams, so lets keep two going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

//2 When a team one button is clicked, increment team1 score
function handleTeamOneClick(){
    //teamScoreOne = teamScoreOne + 1;
    teamScoreOne++;
}

//3 When team two button is clicked increment team 2 score
//just use previous function and pass who is calling it to increment the correct one
//swithc / if stamenet idk 

//when do we finish/stop
function handleStopGame(){
    isGameStopped = true;
}