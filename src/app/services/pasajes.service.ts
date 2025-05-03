import { Injectable } from '@angular/core';
import { Pasaje } from '../interfaces/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajesService {
  private storageKey = 'pasajes';

  constructor() {}

  getPasajes(): Pasaje[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  agregarPasaje(pasaje: Pasaje): void {
    const pasajes = this.getPasajes();
    pasajes.push(pasaje);
    this.actualizarStorage(pasajes);
  }

  editarPasaje(pasajeEditado: Pasaje): void {
    let pasajes = this.getPasajes();
    pasajes = pasajes.map(p =>
      p.dni === pasajeEditado.dni ? pasajeEditado : p
    );
    this.actualizarStorage(pasajes);
  }

  eliminarPasaje(dni: string): void {
    const pasajes = this.getPasajes().filter(p => p.dni !== dni);
    this.actualizarStorage(pasajes);
  }

  private actualizarStorage(pasajes: Pasaje[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(pasajes));
  }
}