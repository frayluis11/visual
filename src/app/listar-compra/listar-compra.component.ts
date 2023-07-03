import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css']
})
export class ListarCompraComponent implements OnInit {
  compra: Compra[];

  constructor(private compraServicio: CompraService) {}

  ngOnInit(): void {
    this.obtenerCompras();
  }

  private obtenerCompras() {
    this.compraServicio.obtenerListarCompra().subscribe(dato => {
      this.compra = dato;
    });
  }
}
