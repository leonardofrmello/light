import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }
  
  public registerPublication() {        
      this.navCtrl.push(RegisterPage, {"registerPublication": true});
  }

  public register() {        
    this.navCtrl.push(RegisterPage, {"registerPublication": false});
  }

  public login() {        
    this.navCtrl.setRoot(LoginPage);
  }
}