import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    
    public navCtrl: NavController,
    private menu: MenuController

  ) {}
 
  ngOnInit() {
  }

  ionViewWillEnter() {
    // Deshabilitar el menú en la página de login
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // Habilitar el menú al salir de la página de login
    this.menu.enable(true);
  }

  irPagina2() {
    this.navCtrl.navigateForward('/home');
    
  }
  
  irRegistro() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/regsitro');
  }

  irLogin() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/login');
  }

}

