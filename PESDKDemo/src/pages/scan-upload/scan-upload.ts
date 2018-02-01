import { Component, ChangeDetectorRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

declare var PESDK;

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

  public attachments = [];
  public form: FormGroup;
  public to: string;

  constructor(
    public navCtrl: NavController,
    public emailComposer: EmailComposer,
    public cd: ChangeDetectorRef,
    public fb: FormBuilder) {

    this.form = this.fb.group({
      "to": ["", Validators.required]
    });

    // let filePaths = [
    //   '//asdf/asdf/asdf/asdf/Shopping.jpg',
    //   '//asdf/asdf/asdf/asdf/Hospital.png',
    //   '//asdf/asdf/asdf/asdf/Cafe.xls',
    //   '//asdf/asdf/asdf/asdf/Dog Park.jpg'
    // ];

    // this.attachments = filePaths.map(filePath => {
    //   return { name: filePath.split(/\//).pop(), url: filePath, isEditable: false };
    // });
  }

  openScanner(event) {

    PESDK.present(
      result => {
        this.attachments.push(
          {name: result.url.split(/\//).pop(), url: result.url, isEditable: false }
        );
        this.cd.markForCheck();
      },

      error => alert('PESDK error: ' + error),
      { sourceType: 1 }
    );
  }

  addItem() {
    let item = '//asdf/asdf/asdf/asdf/NewItem.txt';
    this.attachments.push(
      {name: item.split(/\//).pop(), url: item, isEditable: false }
    );
  }

  sendEmail() {

    console.log('email triggered');
    let email = {
      to: this.to,
      attachments: this.attachments.map(item => item.url),
      subject: 'Scan items',
      body: 'Please find the items in the attachments',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  edit( attachment ) {
    attachment.isEditable = true;
  }

  delete( attachment ) {
    const index = this.attachments.indexOf(attachment);
    this.attachments.splice(index, 1);
  }

  update( attachment ) {
    setTimeout(_ => attachment.isEditable = false, 0);
    this.cd.markForCheck();
  }
}
