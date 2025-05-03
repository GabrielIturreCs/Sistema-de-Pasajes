import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../app/interfaces/pasaje';
import { Categoria } from '../../app/enums/categoria.enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasajesService } from '../../app/services/pasajes.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css'],
  standalone: true,
  imports: [CommonModule ,FormsModule ,],

  // imports: [CommonModule]
  // imports: [CommonModule, FormsModule]
})
export class Punto4Component implements OnInit {

  pasajes: Pasaje = {
    dni: '',
    precio: null,
    CategoriaTurista: 1,
    FechaCompra: new Date(),
    email: ''
  };

  listaPasajes: Pasaje[] = [];
  precioFinal: number = 0;
  editarPasajeSeleccionado: Pasaje | null = null;

  resumen = {
    menores: 0,
    adultos: 0,
    jubilados: 0,
    total: 0
  };

  constructor(public pasajeService: PasajesService) {}

  ngOnInit() {
    this.cargarPasajes();
  }

  calcularDescuento() {
    const precio = this.pasajes.precio;
    const categoria = this.pasajes.CategoriaTurista;
  
    if (precio != null && categoria) {
      if (categoria === 1) {
        this.precioFinal = precio * 0.65;
      } else if (categoria === 3) {
        this.precioFinal = precio * 0.5;
      } else {
        this.precioFinal = precio;
      }
    } else {
      this.precioFinal = 0;
    }
  }
  guardarPasaje() {
    if (this.editarPasajeSeleccionado) {
      this.pasajeService.editarPasaje(this.pasajes);
      this.editarPasajeSeleccionado = null;
    } else {
      this.pasajeService.agregarPasaje(this.pasajes);
    }

    this.reiniciarFormulario();
    this.cargarPasajes();
  }

  editarPasaje(pasaje: Pasaje) {
    this.pasajes = { ...pasaje }; // copiar datos al formulario
    this.editarPasajeSeleccionado = pasaje;
    this.calcularDescuento();
  }

  eliminarPasaje(dni: string) {
    this.pasajeService.eliminarPasaje(dni);
    this.cargarPasajes();
  }

  cargarPasajes() {
    this.listaPasajes = this.pasajeService.getPasajes();
    this.actualizarResumen();
  }

  actualizarResumen() {
    this.resumen = {
      menores: 0,
      adultos: 0,
      jubilados: 0,
      total: 0
    };

    for (const p of this.listaPasajes) {
      if (p.CategoriaTurista === 1) this.resumen.menores++;
      else if (p.CategoriaTurista === 2) this.resumen.adultos++;
      else if (p.CategoriaTurista === 3) this.resumen.jubilados++;
    }

    this.resumen.total =
      this.resumen.menores + this.resumen.adultos + this.resumen.jubilados;
  }

  calcularPrecioConDescuento(precio: number | null, categoria: number): number {
    if (precio === null) return 0;
  
    if (categoria === 1) return precio * 0.65;
    else if (categoria === 3) return precio * 0.5;
    return precio;
  }

  reiniciarFormulario() {
    this.pasajes = {
      dni: '',
      precio: null,
      CategoriaTurista: 1,
      FechaCompra: new Date(),
      email: ''
    };
    this.precioFinal = 0;
  }
}