import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  public nombreEmpleado:string;
  public titulo:string;
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public mostrarTrabajador:boolean;

  constructor(){
    this.nombreEmpleado = 'Jose';
    this.titulo = 'Listado de empleados contratados';
    this.mostrarTrabajador = true;
    this.empleado = new Empleado(this.nombreEmpleado,45,'Cocinero',true);
    
    this.trabajadores = [this.empleado
                        ,new Empleado('Pepe',30,'Mozo almacén',false)
                        ,new Empleado(this.nombreEmpleado,45,'Cocinero',true)];
  }

  ngOnInit(){
    console.log(this.trabajadores);
  }

  cambiarEmpleado(mostrar){
    this.mostrarTrabajador=mostrar;
  }

}