import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component'
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoProductoComponent } from './components/productos/nuevo-producto/nuevo-producto.component';

//Services
import { ProductosService } from './services/productos.service';
import { UserService } from './services/user.service';


const appRoutes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:producto', component: ProductoUnicoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-producto', component: NuevoProductoComponent },
  {
      path: '',
      redirectTo: '/nuevo-producto',
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
    PaginaNoEncontradaComponent,
    MenuComponent,
    LoginComponent,
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    ProductosService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
