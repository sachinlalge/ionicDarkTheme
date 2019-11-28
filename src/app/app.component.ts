import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from "@ionic/storage";
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storage: Storage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('dark-theme').then((val) => {
      console.log('Storage', val);
      if (val) {
        this.themeService.enableDark();
      }
    });
  }
}
