import { Component, OnInit } from '@angular/core';
import { TiendasService } from '../../../services/tiendas.service';
import { Tienda } from '../../../models/tienda';

@Component({
  selector: 'app-listar-tiendas',
  templateUrl: './listar-tiendas.component.html',
  styleUrls: ['./listar-tiendas.component.css']
})
export class ListarTiendasComponent implements OnInit {

  constructor(
    private tiendaService: TiendasService,
  ) { }

  listaTiendas: Tienda[];

  ngOnInit() {
    this.tiendaService.conseguirTiendas().
      snapshotChanges()
      .subscribe(item => {
        this.listaTiendas = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["id"] = element.key;
          this.listaTiendas.push(x as Tienda);
        })
      })
  }

  editar(categoria: Tienda) {
    this.tiendaService.nuevaTienda = Object.assign({}, categoria);
  }

  eliminar(id: string) {
    this.tiendaService.eliminarTienda(id);
  }

}
