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
    public userService: UserService,
  ) { }

  usuario: User = new User;
  listaUsuarios: User[];

  ngOnInit() {
  }

  actualizarUsuario(formActualizarUsuario?: NgForm) {

    this.userService.conseguirUsuarios().
      snapshotChanges()
      .subscribe(item => {
        this.listaUsuarios = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          if(x['email']==this.userService.usuarioLogueado.email){
            x["id"] = element.key;
            this.userService.usuarioLogueado.id=x['id'];
            console.log('x',this.userService.usuarioLogueado)
            this.listaUsuarios.push(x as User);
            this.userService.actualizarUsuario(x);
          }
        })
      })

    /* this.userService.usuarioLogueado = Object.assign({}, formActualizarUsuario.value);
    console.log(this.userService.usuarioLogueado) */
    //this.userService.actualizarUsuario(id,this.usuario);
  }

  resetForm(formActualizarUsuario?: NgForm) {
    if (formActualizarUsuario != null) {
      formActualizarUsuario.reset();
      this.userService.nuevoUsuario = new User();
    }
  }

}
