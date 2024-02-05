import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-regsitro',
  templateUrl: './regsitro.page.html',
  styleUrls: ['./regsitro.page.scss'],
})

export class RegsitroPage implements OnInit {
  alertButtons = ['OK'];

  constructor(private alertController: AlertController, public navCtrl: NavController,) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Te has registrado con exito',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  irLogin() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/login');
  }
  

}




