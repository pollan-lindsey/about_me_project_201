'use strict'
let userName=prompt('Hello, what is your name');//ask for user name
alert('Welcome to my page' +', ' + userName);//welcome user

//ask first question (Do I have many memories of my high school education? Answer y/n)
let answerOne = prompt('Did I graduate high school in 2017? Answer y/n');
//edit case
console.log(answerOne.toLowerCase());
//tell user they were right or wrong
if(answerOne === 'n'){
    //console.log('correct');
    alert('correct');
} else {
    //console.log('incorrect')
    alert('incorrect');
}

//ask second question (Was Petco my first place of employment? Answer y/n)
let answerTwo = prompt('Was Petco my first place of employment? Answer y/n');
//edit case
console.log(answerTwo.toLowerCase());
//tell user they were right or wrong
if(answerTwo === 'n'){
    //console.log('correct');
    alert('correct');
} else {
    //console.log('incorrect')
    alert('incorrect');
}


//ask third question (While attending the University of Memphis, did I change majors twice? Answer y/n)
let answerThree = prompt('Did I graduate from the University of Memphis? Answer y/n');
//edit case
console.log(answerThree.toLowerCase());
//tell user they were right or wrong
if(answerThree === 'y'){
    //console.log('correct');
    alert('correct');
} else {
    //console.log('incorrect')
    alert('incorrect');
}


//ask fourth question (Is my main goal to get a career in programming? Answer y/n)
let answerFour = prompt('Is my main goal to get a career in programming? Answer y/n');
//edit case
console.log(answerFour.toLowerCase());
//tell user they were right or wrong
if(answerFour === 'y'){
    //console.log('correct');
    alert('correct');
} else {
    //console.log('incorrect')
    alert('incorrect');
}


//ask fifth question (Am I currently employed? Answer y/n)
let answerFive = prompt('Am I currently employed? Answer y/n');
//edit case
console.log(answerFive.toLowerCase());
//tell user they were right or wrong
if(answerOne === 'n'){
    //console.log('correct');
    alert('correct');
} else {
    //console.log('incorrect')
    alert('incorrect');
}

//start function
function numberGame() {
//for loop and set i to equal stuff
for (let i = 0, i < 4, i++)
//set answer as 2
//set < 2 to too low
//set > 2 to too high
//else the answer is correct
//end function
}




//thank user for taking the quiz :)
alert('thank you for taking this quiz :)')