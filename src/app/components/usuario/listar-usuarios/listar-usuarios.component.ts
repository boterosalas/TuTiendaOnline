import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(
    public userService: UserService,
  ) { }

  listaUsuarios: User[];
  mostrarMas: boolean;


  ngOnInit() {
    this.userService.conseguirUsuarios().
      snapshotChanges()
      .subscribe(item => {
        this.listaUsuarios = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['id'] = element.key;
          this.listaUsuarios.push(x as User);
        })
      })
  }

  editar(categoria: User) {
    this.userService.nuevoUsuario = Object.assign({}, categoria);
  }

  eliminar(user: User) {
    //this.userService.eliminarUsuario(user);
  }

}
