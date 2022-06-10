'use strict'
var points = 0;
function GameStart(){
    let userName=prompt('Hello, what is your name');//ask for user name
    alert('Welcome to my page' +', ' + userName);//welcome user
    q1();
}
//ask first question (Do I have many memories of my high school education? Answer y/n)
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
//ask second question (Was Petco my first place of employment? Answer y/n)
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
    //ask third question (While attending the University of Memphis, did I change majors twice? Answer y/n)
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
    //ask fourth question (Is my main goal to get a career in programming? Answer y/n)
function q4(){
    let answerFour = prompt('Is my main goal to get a career in programming? Answer y/n');
    //edit case
    console.log(answerFour.toLowerCase());
    //tell user they were right or wrong
    if(answerFour === 'y'){
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
    //ask fifth question (Am I currently employed? Answer y/n)
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

//thank user for taking the quiz :)
