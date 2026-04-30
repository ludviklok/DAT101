"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//---------------------------------------------------
//----------- lyd -----------------------------------
//---------------------------------------------------
const appleSound = new Audio ("./media/apple.mp3"); //retning lyd (ikke eple)
export const backgroundMusic = new Audio ("./media/background.mp3") //bakgrunn musikk, export for menu
const dead = new Audio ("./media/dead.mp3"); //game over lyd
const baitSound = new Audio ("./media/eat.mp3"); //spise lyd



//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };


// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  //--------------------------------------------------

  //Her fikk jeg hint fra AI, fil vedlagt
  score: 0, //samlet score
  appleValue: 9, //nåværende verdi for eplet, telles ned fra 9
  baitSpawnTime: Date.now(), //tidspunktet eplet dukket opp
  pauseTime: 0 // pause tid
  //--------------------------------------------------

};

export const menu = new TMenu(spcvs, SheetData, cvs); //menu


//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  //---------------------------------------------------------------------
  GameProps.score = 0; //nullstiller poeng ved nytt spill
  GameProps.appleValue = 9; //stiller eplet til maks verdi ved nytt spill
  GameProps.baitSpawnTime = Date.now(); //starter en timer
  //----------------------------------------------------------------------
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  gameSpeed = 4; // Reset game speed
  //-----------------------------------------------------------------------
  clearInterval(hndUpdateGame);//sletter gammel loop fra forrige spill
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); //starter original loop
  //-----------------------------------------------------------------------
  backgroundMusic.play(); // bakgrunn musikk
  dead.pause(); // (gameover lyd spilte over til newGame..)
  dead.currentTime = 0; // Spoler tilbake til start
  //-----------------------------------------------------------------------


}

export function baitIsEaten() {

 baitSound.play(); // spise lyd
 GameProps.bait.update(); //henter funkjson update() fra bait.js 
  
 GameProps.snake.grow (); //henter funksjon grow() fra snake.js

 GameProps.score += GameProps.appleValue; //legger epleverdi til score
 GameProps.appleValue = 9; //resetter neste eple til 9
 GameProps.baitSpawnTime = Date.now(); //reset timer for neste eple

increaseGameSpeed(); // funksjon for fart
 //-----------------------------------------------------------------------

}
//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // spillet må starte i idle


  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  console.log("Game canvas is updating!");
 

}

function drawGame() {
  spcvs.clearCanvas();
  switch (GameProps.gameStatus) {
//------------------------------------------------------------------------
//Tegner idle meny
    case EGameStatus.Idle:
      menu.draw();
      backgroundMusic.pause(); // stopp bakgrunn musikk
      backgroundMusic.currentTime = 0; // Spoler tilbake til start
      dead.pause(); // stopp dead musikk
      dead.currentTime = 0; // Spoler tilbake til start
      break;
//------------------------------------------------------------------------
    case EGameStatus.Playing:
    case EGameStatus.Pause:
      menu.draw();
      GameProps.bait.draw();
      GameProps.snake.draw();
      break;
//------------------------------------------------------------------------
      //tegner gameover meny
    case EGameStatus.GameOver:
    menu.draw(); 
    break;
//------------------------------------------------------------------------
  }
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
//------------------------------------------------------------------------
      const timeValue = (Date.now()-GameProps.baitSpawnTime)/1000; //hvor lenge eplet har ligget ute
      GameProps.appleValue = Math.max(0,9 - Math.floor(timeValue)); //synker fra 9 - 0 basert på tid
//------------------------------------------------------------------------
     GameProps.snake.update();

if (GameProps.snake.isDead) { // bruker isDead getter for å sjekke om slangen har kolidert
  GameProps.gameStatus = EGameStatus.GameOver;
//------------------------------------------------------------------------
        backgroundMusic.pause(); // stopp bakgrunn musikk
        backgroundMusic.currentTime = 0; // Spoler tilbake til start
//------------------------------------------------------------------------
        dead.play();
        
      }
      break;
  }
}

function increaseGameSpeed() {
  //Her fikk jeg hint fra AI, fil vedlagt
  gameSpeed += 0.3; //øker gameSpeed variabelen med 0.3 for hver gang
  clearInterval(hndUpdateGame); //stopper den gamle loopen
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); //starter ny loop med økt fart
  console.log("Increase game speed!");
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      appleSound.play(); //lyd for ArrowUp
      appleSound.currentTime = 0;
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      appleSound.play();//lyd for ArrowDown
      appleSound.currentTime = 0;
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      appleSound.play();//lyd for ArrowLeft
      appleSound.currentTime = 0;
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      appleSound.play();//lyd for ArrowRight
      appleSound.currentTime = 0;
      break;
//------------------------------------------------------------------------
      //pause funksjon når man trykker space
      case " ":
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        GameProps.pauseTime = Date.now(); // lagrer tidspunkt når pause startet
        backgroundMusic.pause();
      } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        GameProps.baitSpawnTime += Date.now() - GameProps.pauseTime;
         backgroundMusic.play();
      }


      break;
//------------------------------------------------------------------------
      
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}

//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
