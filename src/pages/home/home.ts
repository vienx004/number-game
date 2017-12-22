import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
sumOfNum: number = 0;
topNum: number = Math.floor(Math.random() * 100) + 1;
num1: number = this.randombtwn10();
num2: number = this.randombtwn10();
num3: number = this.randombtwn10();
num4: number = 1;

//this is a function on event listener click to add to my number
  onClick(num: number){
    this.sumOfNum = this.sumOfNum + +num;
    console.log(this.sumOfNum);
    this.randomNum(this.num1, this.num2, this.num3);
  }

  onSubmit(){
    if(this.sumOfNum == this.topNum)
    {
      console.log("Winner");
      this.resetSum();
    }else if(this.sumOfNum !== this.topNum){
      console.log("Loser");
      alert
      this.resetSum();
    }
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

}
