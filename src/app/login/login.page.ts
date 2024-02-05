import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alertButtons = ['OK'];

  constructor(private alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      buttons: this.alertButtons
      
    });

    await alert.present();

    this.navCtrl.navigateForward('/home');
  }

  irRegistro() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/regsitro');
  }

  
}
