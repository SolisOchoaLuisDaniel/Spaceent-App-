import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  constructor(
    public navCtrl: NavController,
    private sharedDataService: SharedDataService,
    private http: HttpClient
  ) { }

  ngOnInit() { }

  async LoginAccess(){
    if (this.usuario && this.contrasena) {
      // Realizar la llamada HTTP
      const url = 'https://spaceentapp.000webhostapp.com/API_REST/USERS_API_REST.php';
      const params = {
        comando: 'Login',
        Usuario: this.usuario,
        Contrasena: this.contrasena,
      };

      this.http.get<any>(url, { params }).subscribe(
        (response) => {
          // Verificar la respuesta del servidor
          if (response) {
            const { Id, Usuario ,Correo, Contrasena, Nombre_Cliente, Telefono, Total_Compras,Creditos } = response;

            if (Id && Usuario && Contrasena && Correo && Nombre_Cliente&&Telefono) {
              this.sharedDataService.alert('Inicio de sesión','Acceso Concedido', 'Usuario encontrado');

              // Almacenar datos en el servicio
              this.sharedDataService.userData = {
                Id,
                Usuario,
                Contrasena,
                Nombre_Cliente,
                Telefono,
                Total_Compras,
                Creditos
              };

              // Navegar a la página de tienda
              this.navCtrl.navigateForward('/home');
            } else {
              this.sharedDataService.alert('Inicio de sesión','Datos Erroneos' ,'Revisa sus datos de acceso');
            }
          } else {
            this.sharedDataService.alert('Error del Servidor',"Error" ,'Respuesta vacía del servidor');
          }
        },
        (error) => {
          // Manejar errores de la llamada HTTP
          console.error('Error en la llamada HTTP:', error);

          // Mostrar alerta de error
          this.sharedDataService.alert('Error en la llamada HTTP',"Porfavor contactar con el servicio tecnico" ,'Ocurrió un error al intentar iniciar sesión.');
        }
      );
    } else {
      // Mostrar alerta si faltan usuario o contraseña
      this.sharedDataService.alert('Falta de Parametros', 'Atencion' ,'Por favor, ingrese usuario y contraseña.');
    }
  }

  irRegistro() {
    // Redirige a la página Home
    this.navCtrl.navigateForward('/regsitro');
  }

  
}
