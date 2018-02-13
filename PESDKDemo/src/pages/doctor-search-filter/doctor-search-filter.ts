import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctor-search',
  templateUrl: 'doctor-search-filter.html',
})
export class DoctorSearchFilterPage {

  public queryPerameter = {  };

  constructor(public navCtrl: NavController) {
   
  }
}
