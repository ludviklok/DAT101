"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Norsk dato");
function visDato() {
  const idag = new Date(); 
  const norskDato = idag.toLocaleDateString("no-NB", {
    weekday: "long", 
    year: "numeric", 
    month: "long",   
    day: "numeric"  
  });

 printOut("Dagens dato er: " + norskDato); 
}


visDato();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

function visDato2XKO() {
  const idag2 = new Date();
  const norskDato = idag2.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
// console.log("sadf", "asdf")
  printOut("🗓️ Dagens dato:" + norskDato);
  //console.log(`asdfasdfasdf ${norskDato}`)
  return idag2; // Returnerer datoobjektet
}


function dagerTil2XKO(idag) {
  const lansering = new Date("2025-05-14");
  const forskjell = lansering - idag; // millisekunder mellom datoene
  const dagerIgjen = Math.ceil(forskjell / (1000 * 60 * 60 * 24));
  return dagerIgjen;
}


function main() {
  const idag = visDato2XKO();
  const dagerIgjen = dagerTil2XKO(idag);

  printOut(`🎮 Bare ${dagerIgjen} dager igjen til 2XKO slipper løs! Forbered deg på kamp 💥`);
}


main();

//feil

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function sirkelInfo(radius) {
  const diameter = radius * 2;
  const omkrets = 2 * Math.PI * radius;
  const areal = Math.PI * radius *radius;

  printOut("🟢 Sirkel med radius: " + radius);
  printOut("Diameter: " + diameter.toFixed(2));
  printOut("Omkrets: " + omkrets.toFixed(2));
  printOut("Areal: " + areal.toFixed(2));
}
sirkelInfo(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function rektangelInfo(rektangel) {
  const bredde = rektangel.width;
  const høyde = rektangel.height;

  const omkrets = 2 * (bredde + høyde);
  const areal = bredde * høyde;

  printOut("📏 Rektangelets mål:");
  printOut("Bredde:" + bredde);
  printOut("Høyde:" + høyde);
  printOut("Omkrets:" + omkrets);
  printOut("Areal:" + areal);
}


rektangelInfo({ width: 5, height: 3 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function konverterTemp(verdi, type) {
  let celsius, fahrenheit, kelvin;

  // Sjekker hvilken type som er oppgitt
  if (type === "C") {
    celsius = verdi;
    fahrenheit = (verdi * 9) / 5 + 32;
    kelvin = verdi + 273.15;
  } else if (type === "F") {
    celsius = ((verdi - 32) * 5) / 9;
    fahrenheit = verdi;
    kelvin = ((verdi - 32) * 5) / 9 + 273.15;
  } else if (type === "K") {
    celsius = verdi - 273.15;
    fahrenheit = ((verdi - 273.15) * 9) / 5 + 32;
    kelvin = verdi;
  } else {
    printOut("Ugyldig temperaturtype. Bruk 'C', 'F' eller 'K'.");
    return;
  }

  // Skriver ut alle som heltall (avrundet)
  printOut(`🌡️ Originaltall: ${verdi}${type}`);
  printOut(`Celsius: ${Math.round(celsius)}°C`);
  printOut(`Fahrenheit: ${Math.round(fahrenheit)}°F`);
  printOut(`Kelvin: ${Math.round(kelvin)}K`);
  printOut("---------------------------");
}

// Tester funksjonen med tre forskjellige tall
konverterTemp(25, "C");   // Fra Celsius
konverterTemp(77, "F");   // Fra Fahrenheit
konverterTemp(300, "K");  // Fra Kelvin
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

// Funksjon som beregner pris uten MVA
function prisUtenMVA(brutto, gruppe) {
  // Gjør teksten små bokstaver (ikke store/små-bokstavfølsomt)
  const type = gruppe.toLowerCase();
  let mva;

  // Bestem MVA-sats ut fra gruppe
  if (type === "normal") {
    mva = 25;
  } else if (type === "mat") {
    mva = 15;
  } else if (type === "hotell" || type === "transport" || type === "kino") {
    mva = 10;
  } else {
    printOut("❌ Ukjent MVA-gruppe!");
    return NaN; // Ukjent gruppe
  }

  // Regn ut pris uten MVA
  const netto = (100 * brutto) / (mva + 100);

  // Skriv ut resultatet
  printOut(`💰 MVA-gruppe: ${gruppe}`);
  printOut(`Bruttopris (inkl. MVA): ${brutto.toFixed(2)} kr`);
  printOut(`Pris uten MVA: ${netto.toFixed(2)} kr`);
  printOut("-----------------------------");

  // Returner prisen uten MVA
  return netto;
}

// Kall funksjonen fire ganger med ulike eksempler
prisUtenMVA(1000, "Normal");    // 25 %
prisUtenMVA(500, "Mat");        // 15 %
prisUtenMVA(300, "Kino");       // 10 %
prisUtenMVA(700, "Goblins");    // Ukjent gruppe
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function calculatevalues(speed, distance, time) {
  let missing = [speed, distance, time].filter(v => v === null).length;

  if (missing > 1) {
    return {
      speed: undefined,
      distance: distance,
      time: NaN
    };
  }
  
  if (speed === null) speed = distance / time;
  else if (distance === null) distance = speed * time;
  else if (time === null) time = distance / speed;

  return { speed, distance, time }; 

    }

function display(speed, distance, time) {
  const result = calculatevalues(speed, distance, time);

  printOut(`speed = ${result.speed} km/h`);
  printOut(`distance = ${result.distance} km`);
  printOut(`time = ${isNaN(result.time) ? "NaN" : result.time.toFixed(2)} h`);
  printOut("");   
}

display(75, 50, null);
display(null, 150, 2);
display(60, null, 1.5);
display(null, null, 2);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function padString(text, maxSize, padChar, consecutive) {
  if (text.length >= maxSize) {
    return text;
  }

  const needed = maxSize - text.length;
  const padding = padChar.repeat(needed);

  if (consecutive) {
    return text + padding;
  } else {
  return padding + text;
  }
}

let text = "This is a text";

let result1 = padString(text, 15, " ", true);
printOut(`"${result1}"`);

let result2 = padString(text, 15, " ", false);
printOut(`"${result2}"`);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");


function testMaths(lines = 200) {
    let current = 1;

    for (let line = 1; line <= lines; line++) {
        const leftCount = line + 1; // <- venstre har alltid 1 flere tall
        const rightCount = line;

        const leftNums = [];
        const rightNums = [];

        for (let i = 0; i < leftCount; i++) {
            leftNums.push(current++);
        }
        for (let i = 0; i < rightCount; i++) {
            rightNums.push(current++);
        }

        const leftSum = leftNums.reduce((a, b) => a + b, 0);
        const rightSum = rightNums.reduce((a, b) => a + b, 0);

        if (leftSum !== rightSum) {
            printOut("Feil på linje " + line);
            printOut(leftNums.join(" ") + " ≠ " + rightNums.join(" "));
            return;
        }

        // Skriv linjen; spacing kan tilpasses om du vil ha eksakt kolonnejustering
        printOut(leftNums.join(" ") + " = " + rightNums.join(" "));
    }

    printOut("Mathematics is fun!");
}

testMaths(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");

function factorial(n) {
    // base case: factorial(1) = 1
    if (n === 1) {
        return 1;
    }

    // recursive call
    return n * factorial(n - 1);
}

// Test the function:
let number = 9; // velg et tall her
let result = factorial(number);

printOut("Factorial of " + number + " = " + result);

printOut(newLine);
