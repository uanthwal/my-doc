import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { HttpClientService } from '../../shared/http/base.http.service';
import { AppService } from "../../app/app.services";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userId: String;
  password: String;
  constructor(public appService:AppService, public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClientService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }

  doLogin() {
    let data = {
      "userId":this.userId,
      "password": this.password
    };
    // this.appService.login(data)
    // .subscribe((resp) => {
    //   // Response from Login Server
    // });
    this.navCtrl.push(HomePage);
    // this.nav.setRoot(page.component);
  }
}
