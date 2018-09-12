import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BaseServerProvider } from '../providers/base-server/base-server';
import { ContactsPage } from '../pages/contacts/contacts';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ProfilePage } from '../pages/profile/profile';
import { PublicationsPage } from '../pages/publications/publications';
import { SlidesPage } from '../pages/slides/slides';
import { Pessoa } from '../models/Pessoa';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;  
  pages: Array<{title: string, component: any, icon: string}>;
  public userSession: Pessoa;
  
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events: Events,
    public baseService: BaseServerProvider    
  ) {
    this.initializeApp();
    this.pages = [      
      { title: 'Página Inicial', component: MainPage, icon: 'home' },
      { title: 'Meu Perfil', component: ProfilePage, icon: 'person' },
      { title: 'Ordens de Serviços', component: PublicationsPage, icon: 'chatboxes' },      
      { title: 'Estatísticas', component: ContactsPage, icon: 'star' },
    ];
    events.subscribe('user:created', () => {
      this.userSession = JSON.parse(localStorage.getItem("userSession"));
    }); 
    events.subscribe('user:Logout', () => {
      localStorage.removeItem("userSession");
      this.userSession = undefined;  
    });          
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      if(localStorage.getItem("userSession") == null) {  
        this.rootPage = SlidesPage;
      } else {
        this.userSession = JSON.parse(localStorage.getItem("userSession"));        
        this.rootPage = MainPage;
      }      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  
  public presentLogout() {    
    this.nav.setRoot(LoginPage);
  }
}


