import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  nombre;

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
    console.log(loginForm.value);
    if (loginForm.value.id == null)
      this.userService.insertarUsuario(loginForm.value);
    else
      this.userService.actualizarUsuario(loginForm.value);

    this.resetForm(loginForm);
  }

}
