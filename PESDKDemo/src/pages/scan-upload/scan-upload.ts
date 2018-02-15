import { Component } from "@angular/core";

import { NavController } from "ionic-angular";
import { CameraPreviewRect, CameraPreview } from "ionic-native";
import { URL_CONFIG } from "../../app/app.config";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { ModalController } from "ionic-angular/components/modal/modal-controller";
import { AttachmentPreviewContentPage } from "../attachment-preview/attachment-preview";
/**
 * Generated class for the ScanUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-scan-upload",
  templateUrl: "scan-upload.html"
})
export class ScanUploadPage {
  public base64Image: string;
  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public patientList: Array<any> = [];
  public attachments: Array<any> = [];
  public message;
  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private camera: Camera,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    for (let i = 0; i < 5; i++) {
      this.patientList.push({ id: i, name: "PATIENT-" + i });
      // this.attachments.push({id: new Date().getTime(), name: 'Image', data: URL_CONFIG.SAMPLE_IMAGE, type:'image'});
    }
  }

  deleteAttachment(index) {
    console.log("Delete Photo");
    let confirm = this.alertCtrl.create({
      title: "Confirm delete",
      message: "",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Agree clicked");
            this.attachments.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.attachments.push({
          id: new Date().getTime(),
          name: "Image",
          data: this.base64Image,
          type: "image"
        });
        this.attachments.reverse();
      },
      err => {
        console.log(err);
        this.message =
          "Camera Error, Please contact administration. Error message: " + err;
      }
    );
  }

  viewAttachment(a?) {
    let modal = this.modalCtrl.create(AttachmentPreviewContentPage, {
      data: a.data
    });
    modal.present();
  }

  onClickUploadDoc() {}
}
