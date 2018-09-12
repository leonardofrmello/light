import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-publications',
  templateUrl: 'publications.html',
})
export class PublicationsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

}
