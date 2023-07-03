import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';
import { ListarCompraComponent } from './listar-compra/listar-compra.component';
import { ListarVentaComponent } from './listar-venta/listar-venta.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { RegistrarVentaComponent } from './registrar-venta/registrar-venta.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    RegistrarProductoComponent,
    ListarClienteComponent,
    ListarEmpleadoComponent,
    ListarCompraComponent,
    ListarVentaComponent,
    RegistrarClienteComponent,
    RegistrarCompraComponent,
    RegistrarEmpleadoComponent,
    RegistrarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


