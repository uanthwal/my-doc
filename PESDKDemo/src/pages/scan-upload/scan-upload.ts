import { Component, ChangeDetectorRef } from '@angular/core';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Platform } from 'ionic-angular/platform/platform';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Diagnostic, CameraPreviewRect, CameraPreview } from 'ionic-native';

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

  public patientList: Array<any> = [];
  public attachments: Array<any> = [];
  public base64Image: string;
  public imageCount=0;
  public attachmentCount=0;
  lastImage: string = null;

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController) {
this.checkPermissions();
}

checkPermissions() {
// More code goes here
Diagnostic.isCameraAuthorized().then((authorized) => {
  if(authorized)
      this.initializePreview();
  else {
      Diagnostic.requestCameraAuthorization().then((status) => {
          if(status == Diagnostic.permissionStatus.GRANTED)
              this.initializePreview();
          else {
              // Permissions not granted
              // Therefore, create and present toast
              this.toastCtrl.create(
                  {
                      message: "Cannot access camera", 
                      position: "bottom",
                      duration: 5000
                  }
              ).present();
          }
      });
  }
});
}
initializePreview() {
  // Make the width and height of the preview equal 
  // to the width and height of the app's window
  let previewRect: CameraPreviewRect = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };

  // More code goes here
  CameraPreview.startCamera(
    previewRect, 
    'rear', 
    false, 
    false, 
    true,
    1
);
}
takePicture() {
  CameraPreview.takePicture({maxWidth: 320, maxHeight: 320});
}

  init() {
    // Make a REST call here to get the patient list
    for(let i=0; i < 5; i++)
    this.patientList.push({id: i, name: "PATIENT-"+i});
  }

}