"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spInfo;
  #spGameOverMenu;
  #spMedal;


  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;

    this.#spInfo = new TSprite(aSpcvs, aSPI.infoText, 200, 50);
    this.#spInfo.visible = false;

    this.#spGameOverMenu = new TSprite(aSpcvs, aSPI.gameOver,aSPI.background.width/2-aSPI.gameOver.width/2, 120);
    this.#spGameOverMenu.visible = false;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 202, 163);
    this.#spMedal.visible = false;

    
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spInfo.draw();
    this.#spGameOverMenu.draw();
    this.#spMedal.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
     
      this.#spCountDown.visible = false;
      this.#spInfo.visible = false;
      
      this.#sfRunning = new TSoundFile(fnRunning);
      this.#sfRunning.play();
      startGame();
    }
    
  }

  gameOver() {
    console.log("menu game over");
    this.#spInfo.visible = true;
    this.#spInfo.index = 1;
    this.#spGameOverMenu.visible = true;
    this.#spMedal.visible = true;
  }

 

  spPlayBtnClick(){
    console.log("Click!");
    this.#spPlayBtn.hidden = true;
    this.#spCountDown.visible = true;
     this.#spTitle.hidden = true;
     
     EGameStatus.state == EGameStatus.countDown;

     
     this.#spInfo.visible = true;
     this.#spInfo.index = 0;
     
     

    
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    this.#sfCountDown.play();
    setTimeout(this.countDown.bind(this), 1000);
  }

  setSoundMute(aIsMuted) {
    
  if (aIsMuted) {
    console.log("Is muted:", aIsMuted);
    // Skru av lyd
      console.log("pause");
      this.#sfRunning.pause();
  } else {
    // Skru på lyd igjen (kun hvis spillet faktisk går)
    if (this.#sfRunning && EGameStatus.state === EGameStatus.gaming) { 
      console.log("play");
      // 2 = gaming (samme som EGameStatus.gaming)
      this.#sfRunning.play();
    }
  }

  function setDayNight(aEvent) {
  // 1. Les value (1 = day, 0 = night)
  const isDayMode = (aEvent.target.value == 1);

  // 2. Oppdater bakgrunn
  background.setDayNight(isDayMode);

  // 3. Oppdater alle obstacles
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].setDayNight(isDayMode);
  }

  console.log("Day mode:", isDayMode);
}
}

}