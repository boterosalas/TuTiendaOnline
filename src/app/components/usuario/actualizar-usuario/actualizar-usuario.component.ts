import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  constructor(
    public userService:UserService,
  ) { }

  ngOnInit() {
  }

  actualizarUsuario(formActualizarUsuario?: NgForm){
    console.log('contraseña', formActualizarUsuario.value.password);
    this.userService.actualizarUsuario(formActualizarUsuario.value.password);
  }

  resetForm(formActualizarUsuario?: NgForm) {
    if (formActualizarUsuario != null) {
      formActualizarUsuario.reset();
      this.userService.nuevoUsuario = new User();
    }
  }

}
