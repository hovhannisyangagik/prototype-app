import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public _platform: Platform,
    public _SplashScreen: SplashScreen) {
      this.initializeApp();
    }

    initializeApp() {
      this._platform.ready().then(() => {
        // do whatever you need to do here.
        setTimeout(() => {
          this._SplashScreen.hide();
        }, 100);
      });
    }
}
