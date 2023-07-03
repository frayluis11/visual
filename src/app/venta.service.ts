import { Injectable } from '@angular/core';
import { Venta } from './venta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseURL = "http://localhost:8080/ventas/venta"

  constructor(private httpClient : HttpClient) { }

obtenerListarVentas():Observable<Venta[]>{
  return this.httpClient.get<Venta[]>(`${this.baseURL}`)
}

registrarVenta(producto:Venta):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,Venta)
}
}
