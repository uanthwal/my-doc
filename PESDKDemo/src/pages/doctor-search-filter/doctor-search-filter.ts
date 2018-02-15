import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the DoctorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'doctor-search-filter.html',
})
export class DoctorSearchFilterPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }
  
   
  dismiss() {
    this.viewCtrl.dismiss();
  }
}