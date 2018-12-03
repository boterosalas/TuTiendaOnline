import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../../models/tienda';
import { TiendasService } from '../../../services/tiendas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nueva-tienda',
  templateUrl: './nueva-tienda.component.html',
  styleUrls: ['./nueva-tienda.component.css']
})
export class NuevaTiendaComponent implements OnInit {

  constructor(
    private tiendasServices: TiendasService,
  ) { }

  listaTiendas: Tienda[];

  insertarTienda(formTienda: NgForm) {
    console.log(formTienda.value);
    if (formTienda.value.$id == null) {
      this.tiendasServices.insertarTienda(formTienda.value);
    }else{
      this.tiendasServices.actualizarTienda(formTienda.value);
    }
    this.resetForm(formTienda);
  }

  resetForm(formTienda?: NgForm) {
    if (formTienda != null) {
      formTienda.reset();
      this.tiendasServices.nuevaTienda = new Tienda();
    }
  }

  ngOnInit() {
    this.tiendasServices.conseguirTiendas();
    this.resetForm();
  }

}
