import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Diagnostic, CameraPreviewRect, CameraPreview } from 'ionic-native';
import { URL_CONFIG } from '../../app/app.config';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
declare let cordova: any;
/**
 * Generated class for the ScanUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan-upload',
  templateUrl: 'scan-upload.html',
})

export class ScanUploadPage {
  public photos : any;
  public base64Image : string;
  public message;

  public iconPath = URL_CONFIG.ICON_ASSETS_PATH;
  public patientList: Array<any> = [];
  public attachments: Array<any> = [];

  public imageCount=0;
  public attachmentCount=0;
  lastImage: string = null;

  constructor(public navCtrl: NavController, private camera : Camera, private alertCtrl : AlertController) {
//this.checkPermissions();
}
ngOnInit() {
  this.photos = [];
  for(let i=0; i < 5; i++)
    this.patientList.push({id: i, name: "PATIENT-"+i});
}

deletePhoto(index) {
 console.log("Delete Photo");
 this.message = "take photo called";
 let confirm = this.alertCtrl.create({
  title: 'Sure you want to delete this photo? There is NO undo!',
  message: '',
  buttons: [
    {
      text: 'No',
      handler: () => {
        console.log('Disagree clicked');
      }
    }, {
      text: 'Yes',
      handler: () => {
        console.log('Agree clicked');
        this.photos.splice(index, 1);
      }
    }
  ]
});
confirm.present();
}

takePhoto(){
console.log("Take Photo");
this.message = "take photo called";
const options : CameraOptions = {
  quality: 50, // picture quality
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}
this.camera.getPicture(options) .then((imageData) => {
    this.base64Image = "data:image/jpeg;base64," + imageData;
    this.photos.push(this.base64Image);
    this.photos.reverse();
  }, (err) => {
    console.log(err);
    this.message = "Error:"+ err;
  });
}

}