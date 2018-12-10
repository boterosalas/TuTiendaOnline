import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  constructor(
    public categoriasService: CategoriasService,
  ) { }

  listaCategorias: Categoria[];

  ngOnInit() {
    this.categoriasService.conseguirCategorias().
      snapshotChanges()
      .subscribe(item => {
        this.listaCategorias = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaCategorias.push(x as Categoria);
        })
      })
  }

  editar(categoria: Categoria) {
    this.categoriasService.nuevaCategoria = Object.assign({}, categoria);
  }

  eliminar(id: string) {
    this.categoriasService.eliminarCategoria(id);
  }

}
