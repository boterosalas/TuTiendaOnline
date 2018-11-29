import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUsuarios: AngularFireList<any>;
  nuevoUsuario: User = new User();



  constructor(private firebase: AngularFireDatabase) { }

  conseguirUsuarios() {
    return this.listaUsuarios = this.firebase.list('usuarios');
  }

  insertarUsuario(user: User) {
    this.listaUsuarios.push(user);
  }

  actualizarUsuario(user: User) {
    this.listaUsuarios.update(user.id, {
      nombre: user.nombre,
      password: user.password,
      telefono: user.telefono,
      fechaNacimiento: user.fechaNacimiento,
      correo: user.correo,
      direccion: user.direccion,
      ciudad: user.ciudad,
      cedula: user.cedula,
      genero: user.genero,
    })
  }

  eliminarUsuario(user: User) {
    this.listaUsuarios.remove(user.id);
  }

}