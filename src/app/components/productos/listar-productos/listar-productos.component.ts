import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../models/productos';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  constructor(
    private productoServices: ProductosService,
  ) { }

  listaProductos: Productos[];

  ngOnInit() {
    this.productoServices.conseguirProductos().
      snapshotChanges()
      .subscribe(item => {
        this.listaProductos = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaProductos.push(x as Productos);
        })
      })
  }

  editar(producto: Productos) {
    this.productoServices.nuevoProducto = Object.assign({}, producto);
  }

  eliminar(id: string) {
    this.productoServices.eliminarProducto(id);
  }

}
