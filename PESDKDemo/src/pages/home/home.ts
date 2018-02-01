import { DoctorSearchPage } from './../doctor-search/doctor-search';
import { NotificationsPage } from './../notifications/notifications';
import { AddDoctorPage } from './../add-doctor/add-doctor';
import { DoctorConnectPage } from './../doctor-connect/doctor-connect';
import { SearchInputPage } from './../search-input/search-input';
import { Component, ChangeDetectorRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatBotPage } from '../chat-bot/chat-bot';
import { MyReportsPage } from '../my-reports/my-reports';
import { AddPatientPage } from '../add-patient/add-patient';
import { ScanUploadPage } from '../scan-upload/scan-upload';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public categories = [
    {icon: 'search', label: 'Search', page: DoctorSearchPage},
    {icon: 'wifi', label: 'Doctor Connect', page: DoctorConnectPage},
    {icon: 'eye', label: 'Chat Bot', page: ChatBotPage},
    {icon: 'copy', label: 'My Reports', page: MyReportsPage},
    {icon: 'contact', label: 'Add Doctor', page: AddDoctorPage},
    {icon: 'contacts', label: 'Add Patient', page: AddPatientPage},
    {icon: 'cloud-upload', label: 'Scan Upload', page: ScanUploadPage},
    {icon: 'archive', label: 'History', page: HistoryPage},
    {icon: 'notifications', label: 'Notifications', page: NotificationsPage},
  ];

  constructor(public navCtrl: NavController) {}


  detailsPage( detailsPage ) {
    this.navCtrl.push(detailsPage);
  }
}
