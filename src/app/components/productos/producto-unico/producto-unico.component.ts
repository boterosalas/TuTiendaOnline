import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-unico',
  templateUrl: './producto-unico.component.html',
  styleUrls: ['./producto-unico.component.css']
})
export class ProductoUnicoComponent implements OnInit {

  public productoId;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    let producto = parseInt(this.route.snapshot.paramMap.get('producto'));
    this.productoId = producto;
  }

}
