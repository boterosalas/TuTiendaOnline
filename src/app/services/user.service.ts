import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listaUsuarios: AngularFireList<any>;
  nuevoProducto: User = new User();



  constructor(private firebase: AngularFireDatabase) { }

  insertarProducto(user: User) {
    this.listaUsuarios.push({
      nombre: user.nombre,
      telefono: user.telefono,
      fechaNacimiento: user.fechaNacimiento,
      correo: user.correo,
      direccion: user.direccion,
      ciudad: user.ciudad,
      cedula: user.cedula,
      genero: user.genero,
    })
  }

  actualizarProducto(user: User) {
    this.listaUsuarios.update(user.id, {
      nombre: user.nombre,
      telefono: user.telefono,
      fechaNacimiento: user.fechaNacimiento,
      correo: user.correo,
      direccion: user.direccion,
      ciudad: user.ciudad,
      cedula: user.cedula,
      genero: user.genero,
    })
  }

  eliminarProducto(user: User) {
    this.listaUsuarios.remove(user.id);
  }

}