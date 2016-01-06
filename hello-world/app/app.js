import {App, Platform} from 'ionic/ionic';
import {Welcome} from './pages/welcome/welcome';
import {Geo} from './pages/geo/geo';
import {Page3} from './pages/page3/page3';


@App({
  templateUrl: 'build/app.html'
})
export class MyApp {
  constructor(platform: Platform) {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Welcome;
    this.tab2Root = Geo;
    this.tab3Root = Page3;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
