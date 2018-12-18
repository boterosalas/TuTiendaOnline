import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(
    public userService: UserService,
  ) { }

  newUser: User

  ngOnInit() {
    this.userService.conseguirUsuarios();
    this.reset();
  }

  registrarUsuario(formUsuarioNuevo: NgForm) {
    console.log("form", formUsuarioNuevo.value);
    this.userService.registrarUsuario(formUsuarioNuevo.value);
    this.reset(formUsuarioNuevo);
  }

  reset(formUsuarioNuevo?: NgForm) {
    if(formUsuarioNuevo!=null){
      formUsuarioNuevo.reset();
      this.userService.nuevoUsuario = new User();
    }
  }

}
