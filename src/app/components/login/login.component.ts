import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userService: UserService,
    private firebase: AngularFireDatabase,
    public router: Router
  ) { }

  usuarioLogueado: User[];
  usuario: User = new User;

  ngOnInit() {
    this.userService.conseguirUsuarios();
    this.resetForm();
  }

  resetForm(loginForm?: NgForm) {
    if (loginForm != null) {
      loginForm.reset();
      this.userService.nuevoUsuario = new User();
    }
  }

  onSubmit(loginForm: NgForm) {
    this.userService.logIn(loginForm.value)
      .then((res) => {
        console.log("response",res);
        this.router.navigate(['/productos']);
      }).catch((err) => {
        console.log(err);
      });

      /* this.userService.registrarUsuario(loginForm.value);
      console.log(loginForm.value); */
  }

}
