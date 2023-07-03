import { Component , OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {
  producto : Producto = new Producto();
  

  constructor(private productoServicio:ProductoService,private router:Router){}

  ngOnInit(): void {
    
  }

  guardarProducto(){
     this.productoServicio.registrarProducto(this.producto).subscribe(dato => {console.log(dato);
      this.irAlaListaDeProductos();
   },error => console.log(error));
  } 

  irAlaListaDeProductos(){
    this.router.navigate(['/producto'])
  }

  onSubmit(){
    this.guardarProducto();
  }

}
