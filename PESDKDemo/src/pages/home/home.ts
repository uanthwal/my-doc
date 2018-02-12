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
    {icon: 'search.svg', label: 'Search Doctor', page: DoctorSearchPage},
    {icon: 'connect.svg', label: 'Doctor Connect', page: DoctorConnectPage},
    {icon: 'search_patient.svg', label: 'Search Patient', page: AddDoctorPage},
    {icon: 'chatbot.svg', label: 'Chat Bot', page: ChatBotPage},
    {icon: 'reports.svg', label: 'My Reports', page: MyReportsPage},
    {icon: 'patient.svg', label: 'Add Patient', page: AddPatientPage},
    {icon: 'upload.svg', label: 'Scan Upload', page: ScanUploadPage},
    {icon: 'history.svg', label: 'History', page: HistoryPage},
    {icon: 'notifications.svg', label: 'Notifications', page: NotificationsPage},
  ];

  constructor(public navCtrl: NavController) {}


  detailsPage( detailsPage ) {
    this.navCtrl.push(detailsPage);
  }
}
