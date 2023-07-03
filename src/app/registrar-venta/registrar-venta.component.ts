import { Component } from '@angular/core';
import { Venta } from '../venta';
import { Router } from '@angular/router';
import { VentaService } from '../venta.service';

@Component({
  selector: 'app-registrar-venta',
  templateUrl: './registrar-venta.component.html',
  styleUrls: ['./registrar-venta.component.css']
})
export class RegistrarVentaComponent {
  venta : Venta = new Venta();
  

  constructor(private ventaServicio:VentaService,private router:Router){}

  ngOnInit(): void {
    
  }

  guardarVenta(){
     this.ventaServicio.registrarVenta(this.venta).subscribe(dato => {console.log(dato);
      this.irAlaListaDeVentas();
   },error => console.log(error));
  } 

  irAlaListaDeVentas(){
    this.router.navigate(['/venta'])
  }

  onSubmit(){
    this.guardarVenta();
  }
}
