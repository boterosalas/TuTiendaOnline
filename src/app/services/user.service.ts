import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listaUsuarios: AngularFireList<any>;
  public nuevoUsuario: User = new User();



  constructor(
    private firebase: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) { }

  logOut(){
    return this.afAuth.auth.signOut();
  }

  logIn(user:User){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  getAuth(){
    return this.afAuth.authState.map(auth=>auth)
  }



  conseguirUsuarios() {
    return this.listaUsuarios = this.firebase.list('usuarios');
  }

  registrarUsuario(user:User){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then( userData => {
        console.log(userData)
        this.listaUsuarios.push(user);
      },
      err => console.log(err));
    });
  }

  actualizarUsuario(user: User) {
    this.listaUsuarios.update(user.id, {
      nombre: user.nombre,
      password: user.password,
      telefono: user.telefono,
      fechaNacimiento: user.fechaNacimiento,
      correo: user.email,
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