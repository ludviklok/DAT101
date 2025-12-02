"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let part1Text = "";
for (let i = 0; i < part1Array.length; i++) {
    const value = part1Array[i];
    if (i === part1Array.length - 1) {
    part1Text += value.toString() + ".";
} else {
    part1Text += value.toString() + ", ";
}
}


printOut(part1Text);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
const part2text = part1Array.join(",");
printOut(part2text);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const part3Greeting = "hello there, how are you?";
const greetingArray = part3Greeting.split(" ");
let part3Text = "";
for(let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    part3Text += "indeks:" + i.toString() + "=" + word + newLine; 

}

printOut(part3Text);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName){
    let deleteIndex = -1;
    for(let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        if(name === aName){
            deleteIndex = i;
           
            if(deleteIndex >= 0){
                printOut(aName + " is found, and deleted.");
                } else {
                printOut(aName + "is not found in the array.");
                }
        }
    }
}
removeNameFromArray(girls, "Hilde");



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
