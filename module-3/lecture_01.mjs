"use strict"
import {printOut} from "../../common/script/utils.mjs";

const text1 = "Du er gammel nok til å se filmen";
const text2 = "Du kan gå på kino";
const text3 = "Gå hjem!";

const ageMovie = 16;
const ageBringAlone = 18;
let age1 = 19; // gammel nok til a ta med seg en person under 16
let age2 = 14; // Personen er ikke gammel nok til å gå alene


if ( age1 >= ageMovie){
    printOut("person 1:" + text2);
if ( age2 >= ageMovie) {
    printOut(text2);
} else if (age1 >= ageBringAlone) {
    printOut("person 1:" + text2);
    printOut("person 2:" + text1);
}
}

//Random, 0.0 til 0.9999
// alle tall mellom 20 og 30
for(let i = 0; i < 20; i ++){
let rnd = Math.random();
printOut("random:" + rnd);

rnd = rnd * 10
printOut("random:" + rnd);

rnd = Math.floor(rnd) + 20;
printOut("random:" + rnd);
printOut("--------------------");
}