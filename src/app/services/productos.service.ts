import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos:AngularFireList<any>;
  nuevoProducto:Productos = new Productos();



  constructor(private firebase:AngularFireDatabase) { }

conseguirProductos(){
  return this.listaProductos = this.firebase.list('productos');
}

insertarProducto(producto:Productos){
  this.listaProductos.push({
    nombre : producto.nombre,
    categoria : producto.categoria,
    imagen : producto.imagen,
    descripcion : producto.descripcion,
    tienda : producto.tienda,
    precio : producto.precio
  })
}

actualizarProducto(producto:Productos){
  this.listaProductos.update(producto.id,{
    nombre : producto.nombre,
    categoria : producto.categoria,
    imagen : producto.imagen,
    descripcion : producto.descripcion,
    tienda : producto.tienda,
    precio : producto.precio
  })
}

eliminarProducto(producto:Productos){
  this.listaProductos.remove(producto.id);
}

}
