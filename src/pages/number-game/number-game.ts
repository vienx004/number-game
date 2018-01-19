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

recipe: number[] = [1,1,1,1]
userRecipe: any

ionViewDidLoad(){
  this.sumOfNum = 0;
  //this.topNum = Math.floor(Math.random() * 100) + 1;
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
  this.timer = 10;
  this.draw(this.timer, 0);

  this.recipe = [0,0,0,0];
  this.resetRecipe();
  this.userRecipe = [0,0,0,0];
}

//this is a function on event listener click to +1 an ingredient
  onClick1(){
    this.userRecipe[0]++;
    //console.log(this.userRecipe);
  }
  onClick2(){
    this.userRecipe[1]++;
    //console.log(this.userRecipe);
  }
  onClick3(){
    this.userRecipe[2]++;
    //console.log(this.userRecipe);
  }
  onClick4(){
    this.userRecipe[3]++;
    //console.log(this.userRecipe);
  }

//this is a function on event listener Submit
  onSubmit(){
    if(this.checkRecipes(this.userRecipe, this.recipe) == true){
      this.resultOfGame = "Correct";
    }else if(this.userRecipe !== this.recipe || this.timer == 0){
      this.resultOfGame = "Incorrect";
    }
      this.resetFlag = true;
      this.showResultFlag = true;
      this.disableBtnFlag = true;
  }

  checkRecipes(userRecipe: number[], recipe: number[]){
    if(userRecipe.length !== recipe.length){
      return false;
    }
    for(let i = 0; i < 3; i++){
      if(userRecipe[i] !== recipe[i]){
        return false;
      }
      return true;
    }
  }

//Reset all flags and values to default
  onReset(){
    //this.resetSum();
    this.resetFlag = false;
    this.showResultFlag = false;
    this.disableBtnFlag = false;
    this.plus5Flag = false;
    this.resetUserRecipe();
    this.resetRecipe();
    this.timer = 10;
    this.draw(this.timer, 0);
  }

//Resets recipe array
  resetRecipe(){
    for(let i = 0; i < this.recipe.length; i++){
        this.recipe[i] = Math.floor(Math.random() * 10) + 1;
        console.log
    }
  }

  isReset(){
    if(this.resetFlag == false){
      return false;
    }
    return true;
  }

//Randomizer Functions////////////////////////////////////////////////
resetUserRecipe(){
  this.userRecipe = [0,0,0,0]
}

randombtwn10(){
  return Math.floor(Math.random() * 10) + 1;
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


}
