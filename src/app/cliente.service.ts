import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = 'http://localhost:8080/clientes/cliente';

  constructor(private httpClient: HttpClient) {}

  obtenerListarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  registrarCliente(cliente: Cliente): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }
}
