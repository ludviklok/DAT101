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