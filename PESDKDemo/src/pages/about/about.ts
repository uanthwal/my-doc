import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { HttpClientService } from "../../shared/http/base.http.service";
import { AppService } from "../../app/app.services";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { URL_CONFIG } from "../../app/app.config";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  userId: String;
  password: String;
  constructor(
    public loadingCtrl: LoadingController,
    public appService: AppService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClientService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LogoutPage");
  }
}
