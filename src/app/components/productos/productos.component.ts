import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Productos } from 'src/app/models/productos';
import { CategoriasService } from '../../services/categorias.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  bandera: string;
  listaCategorias: Categoria[];
  listaProductos: Productos[];
  listaProductosCategoria: any[];

  constructor(
    public router: Router,
    public categoriasServices: CategoriasService,
    public productosService: ProductosService) { }

  ngOnInit() {
    this.categoriasServices.conseguirCategorias().
      snapshotChanges()
      .subscribe(item => {
        this.listaCategorias = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaCategorias.push(x as Categoria);
        })
        this.bandera = this.listaCategorias[0].nombre;
        this.productosService.conseguirProductos().
          snapshotChanges()
          .subscribe(item => {
            this.listaProductosCategoria = [];
            item.forEach(element => {
              let x = element.payload.toJSON();
              x["id"] = element.key;
              if (x["categoria"] == this.bandera) {
                this.listaProductosCategoria.push(x as Productos);
              }
            })
          })
      })

    this.productosService.conseguirProductos().
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

  onSelect(producto) {
    this.router.navigate(['/producto', producto]);
  }

  activo(i) {
    this.bandera = i;

    this.productosService.conseguirProductos().
      snapshotChanges()
      .subscribe(item => {
        this.listaProductosCategoria = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          if (x["categoria"] == i) {
            this.listaProductosCategoria.push(x as Productos);
          }
        })
      })

  }

}
