import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  bandera: number = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(producto) {
    this.router.navigate(['/producto', producto]);
  }

  activo(i) {
    this.bandera = i;
  }

}
