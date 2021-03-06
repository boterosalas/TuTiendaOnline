import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { FirebaseAuth } from 'angularfire2';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listaUsuarios: AngularFireList<any>;
  public nuevoUsuario: User = new User();
  public usuarioLogueado: User = new User();//este es el usuario logueado de la base de datos
  public usuarioFire: firebase.User//este es el usuario logueado para la autentificación
  public usuarioFireEliminar: firebase.User//este es el usuario para eliminar en la autentificación


  constructor(
    public firebase: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) { }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  logIn(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          resolve(userData);
          this.usuarioFire = this.afAuth.auth.currentUser
        },
          err => reject(err));
    });
  }

  getAuth(): Observable<firebase.User> {
    return this.afAuth.authState
  }

  loadSesion(user: firebase.User) {
    this.usuarioFire = user;
  }



  conseguirUsuarios() {
    return this.listaUsuarios = this.firebase.list('usuarios');
  }

  registrarUsuario(user: User) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(userData => {
          console.log(userData)
          this.listaUsuarios.push({
            nombre: user.nombre,
            password: user.password,
            fechaNacimiento: user.fechaNacimiento,
            email: user.email,
            ciudad: user.ciudad,
            genero: user.genero,
          });
        },
          err => console.log(err));
    });
  }

  actualizarUsuario(user: User) {
    this.usuarioFire.updatePassword(user.password);
    return new Promise((resolve, reject) => {
      console.log('usuarioFire', this.usuarioFire);
      this.afAuth.auth.updateCurrentUser(this.usuarioFire)
        .then(userData => {
          console.log("usuarioLogueado.id",this.usuarioLogueado.id)
          //resolve({ userData });
          this.listaUsuarios.update(this.usuarioLogueado.id, this.usuarioLogueado)
        },
          err => reject(err));
    });
  }

  editarUsuarioPorAdmin(user: User) {
    this.usuarioFire.updatePassword(user.password);
    return new Promise((resolve, reject) => {
      console.log('usuarioFire', this.usuarioFire);
      this.afAuth.auth.updateCurrentUser(this.usuarioFire)
        .then(userData => {
          resolve({ userData });
          this.listaUsuarios.update(user.id, {
            email: user.email,
            nombre: user.nombre,
            password: user.password,
            fechaNacimiento: user.fechaNacimiento,
            ciudad: user.ciudad,
            genero: user.genero,
          })
        },
          err => reject(err));
    });
  }

}