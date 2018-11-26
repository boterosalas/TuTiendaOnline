import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//FireBase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//Rutas
import { RouterModule, Routes } from '@angular/router';
//Components
import { ProductosComponent } from './components/productos/productos.component';
import { ListarProductosComponent } from './components/productos/listar-productos/listar-productos.component';
import { ProductoUnicoComponent } from './components/productos/producto-unico/producto-unico.component';
//Services
import { ProductosService } from './services/productos.service';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component'


const appRoutes: Routes = [
  { path: 'crisis-center', component: ProductosComponent },
  { path: 'hero', component: ProductosComponent },
  {
      path: 'heroes',
      component: ProductosComponent,
      data: { title: 'Heroes List' }
  },
  {
      path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListarProductosComponent,
    ProductoUnicoComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
