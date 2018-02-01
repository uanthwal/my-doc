import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html'
})
export class EmailPage {

  public attachments = [];
  public form  : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public emailComposer: EmailComposer,
    public fb: FormBuilder) {
      this.form = this.fb.group({
        "to"            : ["", Validators.required],
        "cc"            : ["", Validators.required],
        "bcc"           : ["", Validators.required],
        "subject"       : ["", Validators.required],
        "message"       : ["", Validators.required]
     });
  }

  sendEmail() {
    console.log('Sending email');
    let email = {
      to: 'rajkeshwar.pd@gmail.com',
      // cc: 'rajkeshwar83@gmail.com',
      // bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: this.attachments,
      subject: 'Scan items',
      body: 'How are you? Nice greetings from scan-and-sernd',
      isHtml: true
    };
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  clearAttachments() {
    this.attachments = [];
  }
}
