import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  valorSegmento = 'pantallas';
  paginaActual: string = 'Home'; // Puedes establecer la página actual aquí

  constructor(
    public navCtrl: NavController,
    public sharedDataService: SharedDataService,
    private http: HttpClient
    ) { 
  }
  irAyuda() {
    // Redirige a la página Ayuda
    this.navCtrl.navigateForward('/ayuda');
}
  irMovimientos() {
    // Redirige a la página Movimientos
    this.navCtrl.navigateForward('/movimientos');
}
  irRegistro() {
    // Redirige a la página Registro
    this.navCtrl.navigateForward('/regsitro');
}
  irReportes() {
    // Redirige a la página Reportes
    this.navCtrl.navigateForward('/reportes');
}

  irHome() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/home');
}

  // Aquí agregarías métodos para manejar interacciones
}
