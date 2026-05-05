"use strict";

import { TSpriteButton, TSprite, TSpriteNumber } from "libSprite";
import { EGameStatus, newGame, GameProps, backgroundMusic } from "./game.mjs";

export class TMenu {
#spPlayBtn;
#spGameOverMenu;
#spRetry;
#spHome;
#spResume;

#spAppleNumber;
#spScoreNumber;
#spGameOverScore;




    constructor(aSpcvs, aSPI, cvs){
   
    //Startknapp
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 350, 220);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spPlayBtn.visible = true;


    //Gameover menu
    this.#spGameOverMenu = new TSprite(aSpcvs, aSPI.GameOver, 20, 60);
    this.#spGameOverMenu.visible = false;

    //Retry knapp
    this.#spRetry = new TSpriteButton(aSpcvs, aSPI.Retry, 633, 408);
    this.#spRetry.addEventListener("click", this.spRetryClick.bind(this));
    this.#spRetry.visible = false;

    //Hjem knapp
    this.#spHome = new TSpriteButton(aSpcvs, aSPI.Home, 85, 408);
    this.#spHome.addEventListener("click", this.spHomeClick.bind(this));
    this.#spHome.visible = false;

   //Resume knapp
    this.#spResume = new TSpriteButton(aSpcvs, aSPI.Resume, 350, 220);
    this.#spResume.addEventListener("click", this.spResumeClick.bind(this));
    this.#spResume.visible = false;

    //eple verdi-tall
    this.#spAppleNumber = new TSpriteNumber(aSpcvs, aSPI.Number, 20, 20, 0, 1);
    this.#spAppleNumber.visible = false;
    this.#spAppleNumber.alpha = 0.5;

    //snake score
    this.#spScoreNumber = new TSpriteNumber(aSpcvs, aSPI.Number, 20, 120, 0, 3);
    this.#spScoreNumber.visible = false;
    this.#spScoreNumber.alpha = 0.5;
   

    //Game over score
    this.#spGameOverScore = new TSpriteNumber(aSpcvs, aSPI.Number, 525, 270, 0, 3);
    this.#spGameOverScore.visible = false;

   
    }

//--------------------------------------------------------

//Start knapp funksjon med animasjon ved hjelp av setIntervall
    spPlayBtnClick() {
    
  let frame = 0;

  //når play er trykket, animasjon begynner...
  const animate = setInterval(function(){
    this.#spPlayBtn.index = frame;
    frame++;

    // ferdig etter 10 frames (count 10)
    if (frame >= 10) {
      clearInterval(animate);

      // etter animasjon så starter spillet...
      GameProps.gameStatus = EGameStatus.Playing;
      newGame();
      this.#spPlayBtn.hidden = true;
    }

  }.bind(this), 30); // hastighet på animasjonen
}

//----------------------------------------
// klikk funksjon for retry knapp. Begynner på start igjen (newGame())

spRetryClick() {
  console.log ("retry knapp trykket")
  GameProps.gameStatus = EGameStatus.Playing;
  newGame();
}
//---------------------------------------

  spHomeClick () { //home klikk funksjon. Sendes videre til idle
  console.log ("hjem knapp trykket")
  GameProps.gameStatus = EGameStatus.Idle;
  newGame();
  this.#spPlayBtn.hidden = false;
  
  }
//---------------------------------------

spResumeClick () { //pause klikk funksjon

   //Resume knapp funksjon med animasjon ved hjelp av setIntervall
  let frame = 0;

  //når resume er trykket, animasjon begynner...
  const animate = setInterval(function(){
    this.#spResume.index = frame;
    frame++;

    // ferdig etter 10 frames (count 10)
    if (frame >= 10) {
      clearInterval(animate);

      GameProps.gameStatus = EGameStatus.Playing; 
      GameProps.baitSpawnTime += Date.now() - GameProps.pauseTime; //justerer timer for pause tid
      backgroundMusic.play(); //musikk fortsetter
  
    }

  }.bind(this), 30); // hastighet på animasjonen
}
 

//---------------------------------------
    //draw funskjon som tegner knapper og bilder til riktig tid

    draw() {
      
      if (GameProps.gameStatus === EGameStatus.Idle) {
      this.#spPlayBtn.draw();
      
      }

    //------------------------------------------------------------------

       if (GameProps.gameStatus === EGameStatus.Playing) {
       
        this.#spAppleNumber.visible = true;
        this.#spScoreNumber.visible = true;
        
        this.#spAppleNumber.value = GameProps.appleValue;
        this.#spScoreNumber.value = GameProps.score;
        

        this.#spAppleNumber.draw();
        this.#spScoreNumber.draw();
  
      }

    //------------------------------------------------------------------

      if (GameProps.gameStatus === EGameStatus.Pause) {
        this.#spResume.visible = true; 

        this.#spAppleNumber.visible = true;
        this.#spScoreNumber.visible = true;
       
        this.#spAppleNumber.value = GameProps.appleValue;
        this.#spScoreNumber.value = GameProps.score;
       
       
        this.#spAppleNumber.draw();
        this.#spScoreNumber.draw();
        
      } else {
        this.#spResume.visible = false;
      }
      this.#spResume.draw();

   //------------------------------------------------------------------
    
      if (GameProps.gameStatus === EGameStatus.GameOver) {
    this.#spGameOverMenu.visible = true; 
    this.#spRetry.visible = true;
    this.#spHome.visible = true;
    this.#spGameOverScore.visible = true;
    
    this.#spGameOverScore.value = GameProps.score;
   


    this.#spGameOverMenu.draw();
    this.#spGameOverScore.draw();

    
    this.#spRetry.draw();
    this.#spHome.draw();
    } else {
    this.#spGameOverMenu.hidden = true; //-----||-------
    this.#spRetry.hidden = true; // hidden for at knappene ikke kan trykkes i spillet
    this.#spHome.hidden = true;//-----||-------
    }
  }

//------------------------------------------------------------------
}


