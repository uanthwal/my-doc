import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { HttpClientService } from '../../shared/http/base.http.service';
import { AppService } from "../../app/app.services";
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  userId: String;
  password: String;
  constructor(public loadingCtrl: LoadingController, public appService:AppService, public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClientService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }
}
