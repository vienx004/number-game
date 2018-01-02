import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
sumOfNum: number
topNum: number
num1: number
num2: number
num3: number
num4: number
start: number
diff: number
resultOfGame: string
resetFlag: boolean
showTimerFlag: boolean
showResultFlag: boolean
disableBtnFlag: boolean
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
  this.showTimerFlag = false;
  this.showResultFlag = false;
  this.disableBtnFlag = false;
  this.randomizeArray(this.numbers);
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
    if(this.sumOfNum == this.topNum)
    {
      this.diff = Math.floor(this.diffTime()/1000);
      this.resultOfGame = "Winner";
      this.showTimerFlag = true;
    }else if(this.sumOfNum !== this.topNum){
      this.resultOfGame = "Loser";
    }
    this.resetFlag = true;
    this.showResultFlag = true;
    this.disableBtnFlag = true;
  }

//Reset all flags and values to default
  onReset(){
    this.start = this.startTime();
    this.resetSum();
    this.resetFlag = false;
    this.showTimerFlag = false;
    this.showResultFlag = false;
    this.disableBtnFlag = false;
    this.randomNum();
    this.draw();
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
  diffTime(){
    return new Date().getTime() - this.start;
  }

  startTime(){
    return new Date().getTime();
  }
  myTimer(){
    document.getElementById("time").innerHTML = (Math.ceil(((this.start + 10000) - new Date().getTime()) / 1000)).toString();
  }

  draw(){
    setInterval(() => {this.myTimer() }, 1000);
  }

  isShowTimer(){
    if(this.showTimerFlag == false){
      return false;
    }
    return true;
  }
  ///////////////////////////////////////////////////////////////////////////


}
