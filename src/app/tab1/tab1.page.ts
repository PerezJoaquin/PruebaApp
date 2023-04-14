import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab1Page {
  email = "";
  pass = "";
  usuarios = [{"email":"mail", "pass":"pass"}];
  result = "";
  log = false;

  login(){
    this.usuarios = JSON.parse(localStorage.getItem('users') as string);
    console.log(this.usuarios);
    this.log = false;
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.email == this.usuarios[i].email && this.pass == this.usuarios[i].pass){
        this.log = true;
        break;
      }
    }
    if(this.log){
      console.log("Login!");
      //Swal.fire('Login Exitoso', 'Bienvenido '+this.email, 'success');
      Swal.fire({
        title: 'Log in',
        text: 'Login Exitoso',
        icon: 'success',
        confirmButtonText: 'OK!',
        heightAuto: false
      });
      this.email = "";
      this.pass = "";
      //this._router.navigate(['bienvenido'])
    }else{
      console.log("No login");
      Swal.fire({
        title: 'Error',
        text: 'El email o contraseña son incorrectos',
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
        heightAuto: false
      })
    }
  }

  loadData(){
    this.email="juanjose@gmail.com";
    this.pass="pass2";
  }

}
