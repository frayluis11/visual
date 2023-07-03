import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteServicio: ClienteService) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  private obtenerClientes() {
    this.clienteServicio.obtenerListarClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }
}
