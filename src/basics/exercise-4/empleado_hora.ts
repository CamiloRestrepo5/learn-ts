import { Empleado } from "./empleado";

export class EmpleadoPorHora extends Empleado {

    constructor(nombre: string, id: number, tipoEmpleado: string, public tarifaPorHora: string, public horasTrabajadas: number) {
        super(nombre, id);
       }

    
    public calcularSalario(): number {
        return this.tarifaPorHora * this.horasTrabajadas;
    }
    
}