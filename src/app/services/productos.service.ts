import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos: AngularFireList<any>;
  nuevoProducto: Productos = new Productos();



  constructor(private firebase: AngularFireDatabase) { }

  conseguirProductos() {
    return this.listaProductos = this.firebase.list('productos');
  }

  insertarProducto(producto: Productos) {
    this.listaProductos.push({
      nombre: producto.nombre,
      categoria: producto.categoria,
      precio: producto.precio,
      tienda: producto.tienda
    });
  }

  actualizarProducto(producto: Productos) {
    this.listaProductos.update(producto.id, {
      nombre: producto.nombre,
      categoria: producto.categoria,
      precio: producto.precio,
      tienda: producto.tienda
    })
  }

  eliminarProducto(id: string) {
    this.listaProductos.remove(id);
  }

}