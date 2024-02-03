import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    
    public navCtrl: NavController,

  ) {}

  ngOnInit() {
  }

  irPagina2() {
    this.navCtrl.navigateForward('/home');
    
  }
  
  irRegistro() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/home');
  }

}

