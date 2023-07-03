import { Component } from '@angular/core';
import { Compra } from '../compra';
import { Router } from '@angular/router';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-registrar-compra',
  templateUrl: './registrar-compra.component.html',
  styleUrls: ['./registrar-compra.component.css']
})
export class RegistrarCompraComponent {
  compra: Compra = new Compra();

  constructor(private compraServicio: CompraService, private router: Router) {}

  guardarCompra() {
    this.compraServicio.registrarCompra(this.compra).subscribe(
      dato => {
        console.log(dato);
        this.irAlaListaDeCompras();
      },
      error => console.log(error)
    );
  }

  irAlaListaDeCompras() {
    this.router.navigate(['/compras']);
  }

  onSubmit() {
    this.guardarCompra();
  }
}
