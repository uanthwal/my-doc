import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { URL_CONFIG } from '../../app/app.config';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  public userId: String;
  public fullName: String;
  public email: String;
  public mobileNumber: number;
  public password: String;
  public role: String;
  public imgPath = URL_CONFIG.IMG_ASSETS_PATH;
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
    //Fetch the user details from server
    this.userId="TEST_USER";
    this.fullName = "TEST WORKER";
    this.email="test@gmail.com";
    this.mobileNumber=8886389997;
    this.role="healthWorker";
  }

  private closeProfile() {
    this.navCtrl.pop();
  }

  private updateProfile() {
    // Make a REST call here to update profile
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    let alert = this.alertCtrl.create({
      title: 'Message!',
      subTitle: 'Your profile has been updated successfully!!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.closeProfile();
          }
        }
      ]
    });
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      alert.present();
    }, 5000);
  }

}
