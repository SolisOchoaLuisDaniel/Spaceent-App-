import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activeRoute!: string;

  constructor(private router: Router, private menu: MenuController) {
    // Suscribirse al evento de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Obtener la ruta activa
        this.activeRoute = this.router.url;
        this.menu.close('main-menu');
      }
    });
  }
}
