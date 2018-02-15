import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-history",
  templateUrl: "history.html"
})
export class HistoryPage {
  items = [
    "Pokémon Yellow",
    "Super Metroid",
    "Mega Man X",
    "The Legend of Zelda",
    "Pac-Man",
    "Super Mario World",
    "Street Fighter II",
    "Half Life",
    "Final Fantasy VII",
    "Star Fox",
    "Tetris",
    "Donkey Kong III",
    "GoldenEye 007",
    "Doom",
    "Fallout",
    "GTA",
    "Halo"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HistoryPage");
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
