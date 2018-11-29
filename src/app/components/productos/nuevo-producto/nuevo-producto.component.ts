import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../models/productos';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  constructor(
    public productoServices: ProductosService,
  ) { }


  insertarProducto(formProducto: NgForm) {
    this.productoServices.insertarProducto(formProducto.value);
  }

  resetForm(formProducto?: NgForm) {
    if (formProducto != null) {
      formProducto.reset();
      this.productoServices.nuevoProducto = new Productos();
    }
  }

  ngOnInit() {
    this.productoServices.conseguirProductos();
    console.log(this.productoServices.conseguirProductos())
    this.resetForm();
  }

}
