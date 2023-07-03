import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ListarCompraComponent } from './listar-compra/listar-compra.component';
import { RegistrarCompraComponent } from './registrar-compra/registrar-compra.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ListarVentaComponent } from './listar-venta/listar-venta.component';
import { RegistrarVentaComponent } from './registrar-venta/registrar-venta.component';

const routes: Routes = [
  { path: 'productos', component: ListarProductoComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },
  { path: 'empleados', component: ListarEmpleadoComponent },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: 'compras', component: ListarCompraComponent },
  { path: 'registrar-compra', component: RegistrarCompraComponent },
  { path: 'clientes', component: ListarClienteComponent },
  { path: 'registrar-cliente', component: RegistrarClienteComponent },
  { path: 'ventas', component: ListarVentaComponent },
  { path: 'registrar-venta', component: RegistrarVentaComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
