import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DoctorSearchFilterPage } from '../doctor-search-filter/doctor-search-filter';
import { DoctorSearchSortPage } from '../doctor-search-sort/doctor-search-sort';

/**
 * Generated class for the DoctorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-doctor-search",
  templateUrl: "doctor-search.html"
})
export class DoctorSearchPage {
  public doctors = [];
  public filterText = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DoctorSearchPage");
    for (let i = 0; i < 50; i++) {
      this.doctors.push({
        name: "Rajkeshwar",
        spec: "Dentist",
        fee: 300,
        date: new Date(),
        avail: "9AM - 12PM",
        icon: "avtr--" + Math.floor(Math.random() * 215)
      });
    }
  }

  doRefresh() {
    console.log("Doing refresh");
  }

  openModel(modelName: string) {
    let modal;
 
    switch(modelName) {
      case 'filter':
      modal = this.modalCtrl.create(DoctorSearchFilterPage);
      modal.present();
      break;
      case 'sort':
      modal = this.modalCtrl.create(DoctorSearchSortPage);
      modal.present(); 
      break;
      default:
    }
  }
}
