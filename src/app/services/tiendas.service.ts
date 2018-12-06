import { Injectable } from '@angular/core';
import { Tienda } from '../models/tienda';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  listaTiendas: AngularFireList<any>;
  nuevaTienda: Tienda = new Tienda();

  constructor(private firebase: AngularFireDatabase) { }

  conseguirTiendas() {
    return this.listaTiendas = this.firebase.list('tiendas');
  }

  insertarTienda(tienda: Tienda) {
    this.listaTiendas.push({
      nombre: tienda.nombre,
    });
  }

  actualizarTienda(tienda: Tienda) {
    this.listaTiendas.update(tienda.id, {
      nombre: tienda.nombre,
    })
  }

  eliminarTienda(id: string) {
    this.listaTiendas.remove(id);
  }

}