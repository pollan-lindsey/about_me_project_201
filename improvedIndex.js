'use strict'

var points = 0;
function GameStart(){
    let userName=prompt('Hello, what is your name');//ask for user name
    alert('Welcome to my page' +', ' + userName);//welcome user
    q1();
}

function q1(){
    let answerOne = prompt('Did I graduate high school in 2017? Answer y/n');
    //edit case
    console.log(answerOne.toLowerCase());
    let answerOneL= answerOne.toLowerCase();
    //tell user they were right or wrong
    if(answerOneL === 'n'){
        //console.log(points);
        //console.log('correct');
        points++;
        alert('correct');
        q2();
    } else {
        //console.log('incorrect')
        alert('incorrect');
        q2();
    }
}

function q2(){
    let answerTwo = prompt('Was Petco my first place of employment? Answer y/n');
    //edit case
    console.log(answerTwo.toLowerCase());
    let answerTwoL = AnswerTwo.toLowerCase();
    //tell user they were right or wrong
    if(answerTwoL === 'n'){
        //console.log('correct');
        points++;
        alert('correct');
        q3();
    } else {
        //console.log('incorrect')
        alert('incorrect');
        q3();
    }
}

function q3(){
    let answerThree = prompt('Did I graduate from the University of Memphis? Answer y/n');
    //edit case
    console.log(answerThree.toLowerCase());
    //tell user they were right or wrong
    if(answerThree === 'y'){
        //console.log('correct');
        points++;
        alert('correct');
        q4();
    } else {
        //console.log('incorrect')
        alert('incorrect');
        q4();
    }
}

function q4(){
    let answerFour = prompt('Is my main goal to get a career in programming? Answer y/n');
    //edit case
    console.log(answerFour.toLowerCase());
    //tell user they were right or wrong
    if(answerFour == 'y'){
        //console.log('correct');
        points++;
        alert('correct');
        q5();
    } else {
        //console.log('incorrect')
        alert('incorrect');
        q5();
    }
}

function q5(){
    let answerFive = prompt('Am I currently employed? Answer y/n');
    //edit case
    console.log(answerFive.toLowerCase());
    //tell user they were right or wrong
    if(answerFive === 'n'){
        //console.log('correct');
        points++;
        alert('correct');
    } else {
        //console.log('incorrect')
        alert('incorrect');
    }
    alert('thank you for taking this quiz :)');
    alert("You got " + points + "!");
}

//start function
function numberGame() {
    //set answer to two
    let num = "5";
    //for loop and set i to equal stuff
    for (let i = 0; i < 4; i++) {
     let answerSix = prompt("guess a number between 1 and 10");
 //correct answer
     if (answerSix === "2"){
        alert("Great Job!");
        teamGame();
        break;
 //set < 2 to too low
     } else if 
        (answerSix === "1"){
            alert("too low!")
        
 //everything else returns too high
     } else {
        alert("too high!");
     }  
    }
}
    
//start function
function teamGame(){
//set array of teams
    const teams = ["Boston Bruins", "Vegas Golden Knights", "New Jersey Devils", "Colorado Avalanche"];
//write conditions of for loop
    for (let i = 0; i < 6; i++){
//ask the question
    let answerSeven = prompt("which of the following teams are in the top 5 on my hockey team list (There's more than one answer.) Vegas Golden Knights, Colorado Avalanche, New Jersey Devils, Boston Bruins?");
// take away case sensitivity 
    let answerSevenL = answerSeven.toLocaleUpperCase();
//set correct answers
    if (answerSevenL == "Vegas Golden Knights" || answerSevenL == "Boston Bruins"){
       points++;
        alert("Correct!");
//end loop
        break;
    }
//alert for wrong answers
    else{
        alert("Incorrect!");
       
    }
}
}
   
    
//thank user for taking the quiz :)
alert('thank you for taking this quiz :)') 