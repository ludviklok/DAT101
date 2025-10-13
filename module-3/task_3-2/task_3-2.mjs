"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Part 1");
let txtLine1 = "";
let txtLine2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
txtLine1 += " " + i.toString();
txtLine2 += " " + j.toString();
}
printOut(txtLine1 + newLine);
printOut(txtLine2 + newLine);



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Part 2");

// 45 er ønskelig tall
let number1 = Math.floor(Math.random() * 60)+1;


while( number1 !== 45 ){
    number1 = Math.floor(Math.random() * 60)+1;
} 

printOut("The number is: " + number1);







printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Part 3");
let number = Math.floor(Math.random() * 1000000)+1;
let guessCount = 0;
let DateStart = Date.now();

while( number !== 45 ){
    number = Math.floor(Math.random() * 1000000)+1;
} 

printOut("The number is: " + number);
printOut("It took " + guessCount + " guesses to find the number 45");
printOut("It took " + (Date.now() - DateStart) + " milliseconds to find the number 45");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(4);

// while løkke
let number3 = 2;

while (number3 < 200) {
    let isPrime = true;
    let i = 2;

while (i <= Math.sqrt(number3)) {
    if (number3 % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
if (isPrime) {
    printOut(number3);
}
number3++;
}
   



printOut(newLine);

printOut("--- Part 4.2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(4.2);

for (let number4 = 2; number4 < 200; number4++) {
    let isPrime = true;

for (let i = 2; i <= Math.sqrt(number4); i++) {
    if (number4 % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    printOut(number4);
}
}


printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("part 5");
for (let r = 1; r <=7; r++) {
    let rowText = "";

for (let k = 1; k <= 9; k++) {
    rowText += `K${k}R${r} `;
}

printOut(rowText);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
// 5 student karakterer
for (let i = 1; i <= 5; i++) {

// tilfeldig poen mellom 1-236
let points = Math.floor(Math.random() * 236) + 1;

// prosent av 236
let percent = (points / 236) * 100;

let grade;
 
// Sjekker hvilken karakter studenten får basert på points
if (percent >= 89) {
    grade = "A";
} else if (percent >= 77) {
    grade = "B";
} else if (percent >=65) {
    grade = "C";
} else if (percent >= 53) {
    grade = "D";
} else if (percent >= 41) {
    grade = "E";
} else {
    grade = "F";
}

printOut (`Student ${i}: ${points} poeng (${percent.toFixed(1)}%) - Karakter: ${grade}`);
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

// straight
function rollDice() {
  let dice = [];
  for (let i = 0; i < 6; i++) {
    dice.push(Math.floor(Math.random() * 6) + 1); // tall fra 1–6
  }
  return dice;
}

let throws = 0;
let straight = false;

while (!straight) {
    throws++;
    let dice = rollDice();
    dice.sort((a, b) => a - b); // sorterer resultatet

if (dice.join(""   ) === "123456") {
    straight = true;
}
}
    printOut(`Det tok ${throws} kast å få en straight!`);

// tre parr
throws = 0;
let threepairs = false;

while (!threepairs) {
    throws++;
    let dice = rollDice();
    
let counts = {};
for (let value of dice) {
    counts[value] = (counts[value] || 0) + 1;
}
let pairs = Object.values(counts).filter(c => c === 2).length;

if (pairs === 3) {
    threepairs = true;
}
}



printOut(`Det tok ${throws} kast å få tre par!`);

// tårn
throws = 0;
let tower = false;

while (!tower) {
    throws++;
    let dice = rollDice();
    let counts = {};
    for (let value of dice) {
        counts[value] = (counts[value] || 0) + 1;
    }

    let values = Object.values(counts);
    if (values.includes (2) && values.includes (4)) {
        tower = true;
    }       
}

printOut(`Det tok ${throws} kast å få et tårn!`);

// yatzy
throws = 0;
let yatzy = false;

while (!yatzy) {
    throws++;
    let dice = rollDice();
    if (new Set(dice).size === 1) {
        yatzy = true;
    }
}

printOut(`Det tok ${throws} kast å få yatzy!`);



printOut(newLine);

printOut("--- Part 7.2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7.3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 7.4 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
