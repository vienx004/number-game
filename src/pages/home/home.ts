import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NumberGamePage } from '../number-game/number-game';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    constructor(private navCtrl: NavController){}

    onStart(){
        this.navCtrl.push(NumberGamePage)
    }
}