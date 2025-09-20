"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8) {
  printOut("I have to take the train to school.");
} else if (wakeUpTime < 7) {
  printOut("I have to take the car to school.");
} else if (wakeUpTime > 8) {
  printOut("I have to take the car to school.");
}
printOut(newLine);


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 4 and 5");
let number = 0;
if (number > 0) {
  printOut("positive");
} else if (number < 0) {
  printOut("negative");
} else if (number == 0) {
  printOut("zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 6");
// Generer et tilfeldig heltall mellom 1 og 8 (inkluderende)
let imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Uploaded image size:" + imageSize + "MP");

// Sjekk om bildet er stort nok (4MP eller større)
if (imageSize >= 4) {
  printOut("Thank you");
} else if (imageSize < 4) {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 7");
let imageSize1 = Math.floor(Math.random() * 8) + 1;

printOut("Uploaded image size:" + imageSize1 + "MP");

// Sjekk om bildet er stort nok (4MP eller større)
if (imageSize1 >= 4) {
  printOut("Thank you");
} else if (imageSize1 < 4) {
  printOut("The image is too small");
} if (imageSize1 >= 6) {
  printOut("The image is too large");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 8");
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Måned: " + monthName);
if (monthName.toLowerCase().includes("r")){
  printOut("Du må ta vitamin D"); 
} else {
  printOut("Du trenger ikke ta vitamin D");
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 9");
const monthList1 =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const daysInMonth1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 


const noOfMonth1 = monthList1.length;


const randomIndex1 = Math.floor(Math.random() * noOfMonth1);
const monthName1 = monthList1[randomIndex1];
const days1 = daysInMonth1[randomIndex1];

printOut("Måned: " + monthName1);
printOut("Antall dager: " + days1);

if (monthName1.toLowerCase().includes("r")){
  printOut("Du må ta vitamin D"); 
} else {
  printOut("Du trenger ikke ta vitamin D");
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 10");
const monthList2 = ["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random() * noOfMonth2)];

printOut("Måned: " + monthName2);

if (monthName2 === "Mars" || monthName2 === "Mai") {
  printOut("Galleriet er stengt på grunn av oppussing.");
} else if (monthName2 === "April") {
  printOut("Galleriet er åpent i midlertidige lokaler i nabobygget.");
} else {
  printOut("Galleriet er åpent som normalt.");
}


printOut(newLine);
