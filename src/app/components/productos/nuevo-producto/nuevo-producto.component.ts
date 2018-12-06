import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../models/productos';
import { TiendasService } from '../../../services/tiendas.service';
import { CategoriasService } from '../../../services/categorias.service';
import { Tienda } from 'src/app/models/tienda';
import { Categoria } from 'src/app/models/categoria';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  constructor(
    private productoServices: ProductosService,
    private categoriasServices: CategoriasService,
    private tiendasServices: TiendasService,
  ) { }

  listaProductos: Productos[];
  listaTiendas: Tienda[];
  listaCategorias: Categoria[];

  insertarProducto(formProducto: NgForm) {
    console.log(formProducto.value);
    if (formProducto.value.id == null) {
      this.productoServices.insertarProducto(formProducto.value);
    } else {
      this.productoServices.actualizarProducto(formProducto.value);
    }
    this.resetForm(formProducto);
  }

  resetForm(formProducto?: NgForm) {
    if (formProducto != null) {
      formProducto.reset();
      this.productoServices.nuevoProducto = new Productos();
    }
  }

  ngOnInit() {
    this.productoServices.conseguirProductos();

    this.categoriasServices.conseguirCategorias().
      snapshotChanges()
      .subscribe(item => {
        this.listaCategorias = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaCategorias.push(x as Categoria);
        })
      })

    this.tiendasServices.conseguirTiendas().
      snapshotChanges()
      .subscribe(item => {
        this.listaTiendas = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaTiendas.push(x as Tienda);
        })
      })
    this.resetForm();
  }

}
