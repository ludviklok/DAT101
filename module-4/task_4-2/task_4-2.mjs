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

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"];

const allNames = [...girls, ...boys];
printOut(allNames);
   

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

class Tbook {

    constructor(aTitle, aAuthor, aISBN) {
        this.title = aTitle;
        this.author = aAuthor;
        this.isbn = aISBN;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }

}

const books = [
    new Tbook("harry potter", "J.K. Rowling", "9780747532743"),
    new Tbook("the hobbit", "J.R.R. Tolkien", "9780618968633"),
    new Tbook("1984", "George Orwell", "9780451524935")
];

for(let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },

    Workdays: {
        value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10,
        name: "Arbeidsdager"
    },

    Weekends: {
        value: 0x20 + 0x40,
        name: "Helg"
    }
};

// Array med alle keys i EWeekDays
const keys = Object.keys(EWeekDays);

// Løkke
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const item = EWeekDays[key];

    printOut(`${key}: value=${item.value}, name=${item.name}`);

   
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");



// Array med 35 tilfeldige tall mellom 1 og 20
let numbers = [];

for (let i = 0; i < 35; i++) {
    let randomNum = Math.floor(Math.random() * 20) + 1;
    numbers.push(randomNum);
}

printOut("Orginal liste:");
printOut(numbers.join(", "));

// Sortere stigende 
let ascending = [...numbers].sort(function(a, b) {
    return a - b; // callback for stigende
});

printOut("stigende rekkefølge:");
printOut(ascending.join(", "));

//  synkende
let descending = [...numbers].sort(function(a, b) {
    return b - a; // callback for synkende
});

printOut("synkende rekkefølge:");
printOut(descending.join(", "));




printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


// numbers-arrayet er fra oppgave 8
printOut("Tall brukt i frekvens-analysen:");
printOut(numbers.join(", "));

// Hvor mange ganger hvert tall kommer opp
let frequency = {};

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (frequency[num] === undefined) {
        frequency[num] = 1;
    } else {
        frequency[num]++;
    }
}

// Tall og frekvens
printOut("Frekvens (tall: antall ganger):");
for (let num in frequency) {
    printOut(`${num}: ${frequency[num]}`);
}

// Array for sortering
let freqArray = [];

for (let num in frequency) {
    freqArray.push({
        number: Number(num),
        count: frequency[num]
    });
}


freqArray.sort(function(a, b) {
    if (b.count !== a.count) {
        return b.count - a.count;
    } else {
        return a.number - b.number;
    }
});


printOut("Sortert etter hyppighet:");
for (let i = 0; i < freqArray.length; i++) {
    let item = freqArray[i];
    printOut(`${item.number} → ${item.count} ganger`);
}



printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

let grid = [];


for (let row = 0; row < 5; row++) {
    grid[row] = []; 

    for (let col = 0; col < 9; col++) {
        grid[row][col] = `Row ${row}, Column ${col}`; 
    }
}


printOut("Arrayet (rader og kolonner):");

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 9; col++) {
        printOut(grid[row][col]);
    }
}
printOut(newLine);
