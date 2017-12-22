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

ionViewDidLoad(){
  this.sumOfNum = 0;
  this.topNum = Math.floor(Math.random() * 100) + 1;
  this.num1 = this.randombtwn10();
  this.num2 = this.randombtwn10();
  this.num3 = this.randombtwn10();
  this.num4 = 1;
  this.start = new Date().getTime();
  this.diff = 0;
  this.resultOfGame = "";
  this.resetFlag = false;
}

//this is a function on event listener click to add to my number
  onClick(num: number){
    this.sumOfNum = this.sumOfNum + +num;
    console.log(this.sumOfNum);
    this.randomNum(this.num1, this.num2, this.num3);
  }

  onSubmit(){
    if(this.sumOfNum == this.topNum)
    {
      this.diff = Math.floor(this.diffTime()/1000);
      this.resultOfGame = "Winner";
    }else if(this.sumOfNum !== this.topNum){
      this.resultOfGame = "Loser";
    }
    this.resetFlag = true;
  }

  onReset(){
    this.start = this.startTime();
    this.resetSum();
    this.resetFlag = false;
  }

  resetSum(){
    this.sumOfNum = 0;
    this.topNum = Math.floor(Math.random() * 100) + 1;

  }

  randomNum(num1: number, num2: number, num3: number){
    this.num1 = this.randombtwn10();
    this.num2 = this.randombtwn10();
    this.num3 = this.randombtwn10();
  }

  randombtwn10(){
    return Math.floor(Math.random() * 10) + 1;
  }

  diffTime(){
    return new Date().getTime() - this.start;
  }

  startTime(){
    return new Date().getTime();
  }
  
  isReset(){
    if(this.resetFlag == false){
      return false;
    }
    return true;
  }
}
