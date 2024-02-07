import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  paginaActual: string = 'Reportes'; // Puedes establecer la página actual aquí
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
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


}
