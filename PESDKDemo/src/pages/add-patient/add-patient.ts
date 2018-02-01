import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {
  
  public event = {};
  public specialities = [
    "Surgery", "Pediatrics", "Cardiology", "Radiology", 
    "Gynaecology", "Orthopedic ", "Neurology", "Dermatology", 
    "Urology", "Obstetrics", "Oncology", "Otorhinolaryngology", 
    "Internal ", "Ophthalmology", "Endocrinology", "Obstetrics and ", 
    "Gastroenterology", "Neurosurgery", "Pulmonology", "Pathology", 
    "Nephrology", "Emergency ", "Hematology", "Psychiatry", "General ", 
    "Plastic ", "Rheumatology", "Physical ", "Intensive ", "Vascular ", 
    "Organ ", "Pain ", "Family ", "Reconstructive ", "Geriatrics", 
    "Dentistry", "Anesthesiology", "Immunology", "Cardiothoracic ", 
    "Sports ", "Interventional ", "Preventive ", "Infectious ", 
    "Nuclear ", "Neonatology", "Oral and ", "Pediatric ", 
    "Public health", "Physical ", "Bariatrics", "Gynecologic "
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }

}
