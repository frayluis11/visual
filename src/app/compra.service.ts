import { Injectable } from '@angular/core';
import { Compra } from './compra';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private baseURL = 'http://localhost:8080/compras/compra';

  constructor(private httpClient: HttpClient) {}

  obtenerListarCompra(): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${this.baseURL}`);
  }

  registrarCompra(compra: Compra): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, compra);
  }
}
