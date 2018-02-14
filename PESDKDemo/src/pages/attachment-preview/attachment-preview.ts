import { Platform, ViewController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
@Component({
  selector: "page-attachment-preview",
  templateUrl: "attachment-preview.html"
})
export class AttachmentPreviewContentPage {
  public attachmentData;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.attachmentData = [this.params.get("data")];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
