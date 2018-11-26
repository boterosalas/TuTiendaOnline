import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  bandera:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  activo(e){
    e.target.classList.add('activo');
    //console.log(document.querySelectorAll('div.categorias ul li'));
    //this.bandera=!this.bandera;
  }

}
