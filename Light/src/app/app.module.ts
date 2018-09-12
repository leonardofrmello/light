import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BaseServerProvider } from '../providers/base-server/base-server';
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MainPageModule } from '../pages/main/main.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { PublicationsPageModule } from '../pages/publications/publications.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { SlidesPageModule } from '../pages/slides/slides.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),      
    ContactsPageModule,
    LoginPageModule,
    MainPageModule,
    ProfilePageModule,
    PublicationsPageModule,
    RegisterPageModule,
    SlidesPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseServerProvider,
  ]
})
export class AppModule {}
