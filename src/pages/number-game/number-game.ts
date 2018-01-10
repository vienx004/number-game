import { Component } from '@angular/core';

@Component({
  selector: 'page-number-game',
  templateUrl: 'number-game.html'
})
export class NumberGamePage {
sumOfNum: number
topNum: number
start: number
diff: number
resultOfGame: string
resetFlag: boolean
showResultFlag: boolean
disableBtnFlag: boolean
plus5Flag: boolean
timer: number
numbers: number[] = [1,1,1,1]

ionViewDidLoad(){
  this.sumOfNum = 0;
  this.topNum = Math.floor(Math.random() * 100) + 1;
  this.numbers = [1,1,1,1];
  this.numbers[0] = this.randombtwn10();
  this.numbers[1] = this.randombtwn10();
  this.numbers[2] = this.randombtwn10();
  this.numbers[3] = 1;
  this.start = new Date().getTime();
  this.diff = 0;
  this.resultOfGame = "";
  this.resetFlag = false;
  this.showResultFlag = false;
  this.disableBtnFlag = false;
  this.plus5Flag = false;
  this.randomizeArray(this.numbers);
  this.timer = 10;
  this.draw(this.timer, 0);
}

//this is a function on event listener click to add to my number
  onClick(num: number){
    this.sumOfNum = this.sumOfNum + +num;
    console.log(this.sumOfNum);
    this.randomNum();
    this.randomizeArray(this.numbers);
  }

//this is a function on event listener Submit
  onSubmit(){
    if(this.sumOfNum == this.topNum && this.timer != 0)
    {
      this.resultOfGame = "Winner";
    }else if(this.sumOfNum !== this.topNum || this.timer == 0){
      this.resultOfGame = "Loser";
    }
    this.resetFlag = true;
    this.showResultFlag = true;
    this.disableBtnFlag = true;
  }

//Reset all flags and values to default
  onReset(){
    this.resetSum();
    this.resetFlag = false;
    this.showResultFlag = false;
    this.disableBtnFlag = false;
    this.plus5Flag = false;
    this.randomNum();
    this.timer = 10;
    this.draw(this.timer, 0);
  }

//Resets the goal number between 1 - 100
  resetSum(){
    this.sumOfNum = 0;
    this.topNum = Math.floor(Math.random() * 100) + 1;
  }

  isReset(){
    if(this.resetFlag == false){
      return false;
    }
    return true;
  }

//Randomizer Functions////////////////////////////////////////////////
randomNum(){
  this.numbers[0] = this.randombtwn10();
  this.numbers[1] = this.randombtwn10();
  this.numbers[2] = this.randombtwn10();
  this.numbers[3] = 1;
}

randombtwn10(){
  return Math.floor(Math.random() * 10) + 1;
}

  //randomize solution array using Fisher-Yates shuffle
  randomizeArray(solution: number[]){
    for(let i = solution.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1))
      let temp = solution[i]
      solution[i] = solution[j]
      solution[j] = temp
    }
  }
//////////////////////////////////////////////////////////////////////

  //timer methods////////////////////////////////////////////////////////////
  myTimer(timer: number){
    this.timer = timer;
  }

  draw(timer: number, add: number){
    var intervalID = setInterval(() =>
    {this.myTimer(timer + add); timer--; 
      if(timer < 0){
        clearInterval(intervalID)
      } else if(this.showResultFlag == true){
        clearInterval(intervalID)
          if(this.timer != 10){
            this.timer++;
          }
      }
    }, 1000);
  }
  ///////////////////////////////////////////////////////////////////////////

  //Perks functions///////////////////////////////////////////////
  onPlus5Click(){

  }

  onMinus10Click(){
    this.sumOfNum = this.sumOfNum - 10;
  }

  onExactClick(){
    this.sumOfNum = this.topNum;
  }
  ////////////////////////////////////////////////////////////////

}
