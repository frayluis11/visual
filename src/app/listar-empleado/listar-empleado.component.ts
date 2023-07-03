import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent {
  empleados: Empleado[]; 

  constructor(private empleadoServicio: EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListarempleado().subscribe(datos => { 
      this.empleados = datos;
    });
  }
}
