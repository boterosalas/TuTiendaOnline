import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//FireBase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
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
import { NuevaCategoriaComponent } from './components/categorias/nueva-categoria/nueva-categoria.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { NuevaTiendaComponent } from './components/tiendas/nueva-tienda/nueva-tienda.component';
import { ListarTiendasComponent } from './components/tiendas/listar-tiendas/listar-tiendas.component';
import { RegistroUsuarioComponent } from './components/usuario/registro-usuario/registro-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';

//Services
import { ProductosService } from './services/productos.service';
import { UserService } from './services/user.service';


const appRoutes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:producto', component: ProductoUnicoComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-producto', component: NuevoProductoComponent },
  { path: 'categorias', component: NuevaCategoriaComponent },
  { path: 'tiendas', component: NuevaTiendaComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'actualizar-perfil', component: ActualizarUsuarioComponent },
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
    NuevoProductoComponent,
    NuevaCategoriaComponent,
    ListarCategoriasComponent,
    NuevaTiendaComponent,
    ListarTiendasComponent,
    RegistroUsuarioComponent,
    ActualizarUsuarioComponent,
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
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    ProductosService,
    UserService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
