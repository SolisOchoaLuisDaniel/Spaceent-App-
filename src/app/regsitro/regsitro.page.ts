import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-regsitro',
  templateUrl: './regsitro.page.html',
  styleUrls: ['./regsitro.page.scss'],
})

export class RegsitroPage implements OnInit {
  alertButtons = ['OK'];

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Te has registrado con exito',
      buttons: this.alertButtons
    });

    await alert.present();
  }

}




