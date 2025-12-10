"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];
//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


document.getElementById("cmbTask1Calculate").addEventListener("click", function() {

    
    const width = Number(document.getElementById("txtRectWidth").value);
    const height = Number(document.getElementById("txtRectHeight").value);

    
    const circumference = 2 * (width + height);
    const area = width * height;

    
    document.getElementById("txtTask1Output").innerText =
        `Circumference = ${circumference}, Area = ${area}`;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/



let task2Words = [];


document.getElementById("txtTask2Word").addEventListener("keypress", function(event) {

    
    if (event.key === "Enter") {

        
        let word = document.getElementById("txtTask2Word").value.trim();

       
        if (word !== "") {
            task2Words.push(word);
        }

      
        document.getElementById("txtTask2Output").innerText =
            `Number of words = ${task2Words.length}\nWords: ${task2Words.join(", ")}`;

      
        document.getElementById("txtTask2Word").value = "";
    }
});



//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

document.getElementById("cmbTask3CheckAnswer").addEventListener("click", function() {

    
    const checkboxes = document.querySelectorAll("input[name='chkTask3']");

    
    let selectedValues = [];

    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedValues.push(cb.value);
        }
    });

    
    if (selectedValues.length === 0) {
        document.getElementById("txtTask3Output").innerText = "No boxes selected.";
    } else {
        document.getElementById("txtTask3Output").innerText =
            "Selected: " + selectedValues.join(", ");
    }
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const carContainer = document.getElementById("divTask4Cars");
const output = document.getElementById("txtTask4Output");


for (let i = 0; i < CarTypes.length; i++) {
    const car = CarTypes[i]; // car er f.eks. { value: 1, caption: "Aston Martin" }

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carSelect";
    radio.value = car.value;          // tallverdien (1, 2, 3, ...)

    const label = document.createElement("label");
    label.textContent = car.caption;  // tekst som vises (Aston Martin, Bentley, ...)

    radio.addEventListener("change", function () {
        output.innerText = "You selected: " + car.caption;
    });

    carContainer.appendChild(radio);
    carContainer.appendChild(label);
    carContainer.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code belocw here!*/


document.getElementById("selectTask5Animals").addEventListener("change", function () {

    
    const selectedAnimal = this.options[this.selectedIndex].text;

    
    document.getElementById("txtTask5Output").innerText =
        "You selected: " + selectedAnimal;
});
//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");
 
for(let i = 0; i < GirlsNames.length; i++){
  const option = document.createElement("option");
  option.value = i.toString();
  option.appendChild(document.createTextNode(GirlsNames[i]));
  selectTask6Girls.appendChild(option);
}
function SelectGirlsChange(){
  const value = parseInt(selectTask6Girls.value);
  const name = GirlsNames[value];
  txtTask6Output.innerHTML = `You selected: ${name}`;
}
selectTask6Girls.addEventListener("change", SelectGirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const genreSelect = document.getElementById("selectMovieGenre");

for (let i = 0; i < MovieGenre.length; i++) {
    const option = document.createElement("option");
    option.value = MovieGenre[i];
    option.textContent = MovieGenre[i];
    genreSelect.appendChild(option);
}

// Add movies to table
const movieTable = document.getElementById("tblMovies");
let movieCounter = 1;

document.getElementById("cmbAddMovie").addEventListener("click", function () {

    const title = document.getElementById("txtMovieTitle").value;
    const genre = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("txtMovieDirector").value;
    const rate = document.getElementById("txtMovieRate").value;

    // Lag en ny rad
    const row = movieTable.insertRow();

    // Legg til celler
    row.insertCell(0).innerText = movieCounter++; // nummer
    row.insertCell(1).innerText = title;
    row.insertCell(2).innerText = genre;
    row.insertCell(3).innerText = director;
    row.insertCell(4).innerText = rate;

    // Tøm inputfeltene
    document.getElementById("txtMovieTitle").value = "";
    document.getElementById("txtMovieDirector").value = "";
    document.getElementById("txtMovieRate").value = 5;
});
