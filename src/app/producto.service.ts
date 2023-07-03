import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:8080/productos/producto"

  constructor(private httpClient : HttpClient) { }

obtenerListarProductos():Observable<Producto[]>{
  return this.httpClient.get<Producto[]>(`${this.baseURL}`)
}

registrarProducto(producto:Producto):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,producto)
}

}
