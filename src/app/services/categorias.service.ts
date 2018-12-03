import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  listaCategorias: AngularFireList<any>;
  nuevaCategoria: Categoria = new Categoria();

  constructor(private firebase: AngularFireDatabase) { }

  conseguirCategorias() {
    return this.listaCategorias = this.firebase.list('categorias');
  }

  insertarCategoria(categoria: Categoria) {
    this.listaCategorias.push({
      nombre: categoria.nombre,
    });
  }

  actualizarCategoria(categoria: Categoria) {
    this.listaCategorias.update(categoria.$id, {
      nombre: categoria.nombre,
    })
  }

  eliminarCategoria($id: string) {
    this.listaCategorias.remove($id);
  }

}