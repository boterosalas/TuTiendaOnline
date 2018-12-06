import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriasService } from '../../../services/categorias.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {

  constructor(
    private categoriasServices: CategoriasService,
  ) { }

  listaCategorias: Categoria[];

  insertarCategoria(formCategoria: NgForm) {
    console.log(formCategoria.value);
    if (formCategoria.value.id == null) {
      this.categoriasServices.insertarCategoria(formCategoria.value);
    }else{
      this.categoriasServices.actualizarCategoria(formCategoria.value);
    }
    this.resetForm(formCategoria);
  }

  resetForm(formCategoria?: NgForm) {
    if (formCategoria != null) {
      formCategoria.reset();
      this.categoriasServices.nuevaCategoria = new Categoria();
    }
  }

  ngOnInit() {
    this.categoriasServices.conseguirCategorias();
    this.resetForm();
  }

}
