import { Component } from "@angular/core";

import { NavController } from "ionic-angular";
import { FileChooser } from "@ionic-native/file-chooser";
import { CameraPreviewRect, CameraPreview } from "ionic-native";
import { URL_CONFIG } from "../../app/app.config";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { ModalController } from "ionic-angular/components/modal/modal-controller";
import { AttachmentPreviewContentPage } from "../attachment-preview/attachment-preview";
import { ActionSheetController } from "ionic-angular/components/action-sheet/action-sheet-controller";
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
    private alertCtrl: AlertController,
    private fileChooser: FileChooser,
    public actionSheetCtrl: ActionSheetController
  ) {
    const options: CameraOptions = {
      quality: 100, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

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
        //this.message = this.base64Image;
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
        // this.message ="Camera Error, Please contact administration. Error message: " + err;
      }
    );
  }

  viewAttachment(a?) {
    let modal = this.modalCtrl.create(AttachmentPreviewContentPage, {
      data: a.data
    });
    modal.present();
  }

  presentActionSheet(editable: boolean) {
    let buttons: any = [];
    // if (this.platform.is('cordova')) {
        buttons.push({
            text: 'Choose Photo',
            handler: () => {
                this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, editable); // 0 == Library
            }
        })
    // }
    buttons.push(
        {
            text: 'Cancel',
            role: 'cancel'
        }
    );

    let actionSheet = this.actionSheetCtrl.create({
        buttons: buttons
    });
    actionSheet.present();
}

  /**
   * get picture from gallery or camera
   * @Param sourceType:number camera or gallery
   */
  getPicture(sourceType: number, editable: boolean) {
    this.camera.getPicture({
      quality: 40,
      destinationType: 1,
      sourceType: sourceType,
      targetWidth: 1000,
      targetHeight: 1333,
      allowEdit: editable,
      mediaType: 0,
      saveToPhotoAlbum: false,
      correctOrientation: true //this needs to be true to get a file:/// FILE_URI, otherwise android does not return a file uri. Yep.
  }).then(
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
        //this.message = "Camera Error, Please contact administration. Error message: " + err;
      }
    );
  }
}
