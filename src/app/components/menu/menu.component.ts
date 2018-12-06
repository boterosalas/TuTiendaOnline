import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public isLogin: boolean;
  public nombreUser: string;
  public email: string;
  public usuario: User[];

  constructor(
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getAuth().subscribe(auth => {
      if (auth) {
        this.userService.loadSesion(auth);
        this.userService.conseguirUsuarios().
          snapshotChanges()
          .subscribe(item => {
            this.usuario = [];
            item.forEach(element => {
              let x = element.payload.toJSON();
              x["id"] = element.key;
              if (x["email"] == auth.email) {
                this.usuario.push(x as User);
                this.userService.usuarioLogueado = x;
                console.log("X",x);
              }
            })
          })
          this.isLogin=true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  logOut() {
    this.userService.logOut();
  }

}
