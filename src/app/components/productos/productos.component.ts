import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  bandera: number = 1;

  constructor() { }

  ngOnInit() {
  }

  activo(i) {
    this.bandera = i;
  }

}
