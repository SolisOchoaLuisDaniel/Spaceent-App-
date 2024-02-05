import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  ngOnInit() { }

  irHome() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/Home');
  }

  irRegistro() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/regsitro');
  }


}
