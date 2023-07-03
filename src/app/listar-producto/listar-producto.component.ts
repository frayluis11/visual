import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit{

  productos : Producto [];

  constructor(private productoServicio:ProductoService){}

  ngOnInit(): void {
      this.obtenerProductos(); 
  }

private obtenerProductos(){
  this.productoServicio.obtenerListarProductos().subscribe(dato =>{
    this.productos = dato;
  })
}

}
