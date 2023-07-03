import { Component, OnInit } from '@angular/core';
import { VentaService } from '../venta.service';
import { Venta } from '../venta';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {
  ventas : Venta [];

  constructor(private ventaServicio:VentaService){}

  ngOnInit(): void {
      this.obtenerVentas(); 
  }

private obtenerVentas(){
  this.ventaServicio.obtenerListarVentas().subscribe(dato =>{
    this.ventas = dato;
  })
}

}