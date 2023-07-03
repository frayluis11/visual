import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(private clienteServicio: ClienteService, private router: Router) {}

  guardarCliente() {
    this.clienteServicio.registrarCliente(this.cliente).subscribe(
      dato => {
        console.log(dato);
        this.irAlaListaDeClientes();
      },
      error => console.log(error)
    );
  }

  irAlaListaDeClientes() {
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.guardarCliente();
  }
}
