"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x=(2 + 3 * (2 - 4) * 6);
printOut(x);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25;
let centimeter = 34;

let totalMm = (meter * 1000) + (centimeter * 10); // 25340 mm
let inches = totalMm / 25.4;

printOut(inches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

// Gjør alt om til minutter
let totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);


printOut(totalMinutes.toFixed(2)); // 5074.75);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
minutes = 6322.52;

days = Math.floor(minutes / (24 * 60));
hours = Math.floor((minutes % (24 * 60)) / 60);
seconds = Math.floor((minutes % 1) * 60);
minutes = Math.floor(minutes % 60);

printOut([days, hours, minutes, seconds]); // 4 9 22 31
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let USD = 54
let exchangePate= 76 / 8.6; //8.837209302325581
let Nok = USD * exchangePate;



printOut("kr: "+Nok.toFixed(0)); // 477.67
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "There is much between heaven and earth that we do not understand.";



printOut([text.length, text[19], text.slice(35,43), text.search("earth")]); 
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/






printOut([5>3, 7>=7, "a">"b", "1"<"a", "2500"<"abcd", "arne"!="Thomas", 2==5, "abcd">"bcd"]);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut([parseInt("254"), parseInt("57.23"), parseInt("25 kroner")]);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//let r= math.floor(math.random()*360)+1;
let r= Math.floor(Math.random()*360)+1;

printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days1 = 131


let weeks = Math.floor(days1 / 7);
let remDays = days1 % 7;


printOut(weeks+" uker"); 
printOut(remDays+" dager"); 
printOut(newLine);