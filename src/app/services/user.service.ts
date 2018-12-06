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
  public usuarioLogueado: User = new User();
  public usuarioFire:firebase.User


  constructor(
    private firebase: AngularFireDatabase,
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
          this.usuarioFire=this.afAuth.auth.currentUser
        },
          err => reject(err));
    });
  }

  getAuth():Observable<firebase.User> {
    return this.afAuth.authState
  }

  loadSesion( user:firebase.User){
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
          this.listaUsuarios.push(user);
        },
          err => console.log(err));
    });
  }

  async actualizarUsuario(password:string) {
    await this.usuarioFire.updatePassword(password);
    return new Promise((resolve,reject)=>{
      console.log('usuarioFire', this.usuarioFire);
      this.afAuth.auth.updateCurrentUser(this.usuarioFire)
      .then( userData => {
        resolve({userData})
        //this.listaUsuarios.push(user);
    },
    err => reject(err));
  });
  //------------------------------------------------------
  /* console.log(user)
  this.listaUsuarios.update(user.id, {
    nombre: user.nombre,
    password: user.password,
    fechaNacimiento: user.fechaNacimiento,
    ciudad: user.ciudad,
    genero: user.genero,
  }) */
  }

  eliminarUsuario(user: User) {
    this.listaUsuarios.remove(user.id);
  }

}