import { HistoryPage } from "./../pages/history/history";
import { NotificationsPage } from "./../pages/notifications/notifications";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AddPatientPage } from "../pages/add-patient/add-patient";
import { MyVisitsPage } from "../pages/my-visits/my-visits";
import { SignupPage } from "./../pages/signup/signup";
import { LoginPage } from "./../pages/login/login";
import { ListPage } from "./../pages/list/list";
import { ScanUploadPage } from "./../pages/scan-upload/scan-upload";
import { MyReportsPage } from "./../pages/my-reports/my-reports";
import { MyProfilePage } from "./../pages/my-profile/my-profile";
import { AddDoctorPage } from "./../pages/add-doctor/add-doctor";
import { DoctorConnectPage } from "../pages/doctor-connect/doctor-connect";
import { DoctorSearchPage } from "../pages/doctor-search/doctor-search";
import { SearchInputPage } from "../pages/search-input/search-input";
import { TimingsPage } from "../pages/timings/timings";
import { ChatBotPage } from "../pages/chat-bot/chat-bot";
import { AppService } from "./app.services";
import { HttpClientService } from "../shared/http/base.http.service";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { Broadcaster } from "../service/broadcaster";
import { LogoutPage } from "../pages/logout/logout";
import { AboutPage } from "../pages/about/about";
import { RateUsPage } from "../pages/rate-us/rate-us";
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { Transfer } from "@ionic-native/transfer";
import { FilePath } from "@ionic-native/file-path";
import { AttachmentPreviewContentPage } from "../pages/attachment-preview/attachment-preview";
import { FileChooser } from '@ionic-native/file-chooser';
import { DoctorSearchFilterPage } from '../pages/doctor-search-filter/doctor-search-filter';
import { DoctorSearchSortPage } from '../pages/doctor-search-sort/doctor-search-sort';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddDoctorPage,
    AddPatientPage,
    MyProfilePage,
    MyReportsPage,
    MyVisitsPage,
    ScanUploadPage,
    DoctorConnectPage,
    DoctorSearchPage,
    SearchInputPage,
    NotificationsPage,
    HistoryPage,
    TimingsPage,
    ChatBotPage,
    ListPage,
    LoginPage,
    SignupPage,
    LogoutPage,
    AboutPage,
    RateUsPage,
    AttachmentPreviewContentPage,
    DoctorSearchFilterPage,
    DoctorSearchSortPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddDoctorPage,
    AddPatientPage,
    MyProfilePage,
    MyReportsPage,
    MyVisitsPage,
    ScanUploadPage,
    DoctorConnectPage,
    DoctorSearchPage,
    SearchInputPage,
    NotificationsPage,
    TimingsPage,
    ChatBotPage,
    HistoryPage,
    ListPage,
    LoginPage,
    SignupPage,
    DoctorSearchFilterPage,
    DoctorSearchSortPage,
    LogoutPage,
    AboutPage,
    RateUsPage,
    AttachmentPreviewContentPage
  ],
  providers: [
    Broadcaster,
    HttpClientService,
    AppService,
    EmailComposer,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    FileChooser,
    File,
    Transfer,
    FilePath
  ]
})
export class AppModule {}
