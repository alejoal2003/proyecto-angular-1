import { Injectable } from '@angular/core';

export interface Producto {
  codigo: string;
  nombre: string;
  costo: number;
  precio: number;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  constructor() {
    // Cargar productos del localStorage si existen
    this.cargarProductosDesdeStorage();
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    this.guardarProductosEnStorage();
  }

  actualizarProducto(index: number, producto: Producto): void {
    if (index >= 0 && index < this.productos.length) {
      this.productos[index] = producto;
      this.guardarProductosEnStorage();
    }
  }

  eliminarProducto(index: number): void {
    if (index >= 0 && index < this.productos.length) {
      this.productos.splice(index, 1);
      this.guardarProductosEnStorage();
    }
  }

  private guardarProductosEnStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  private cargarProductosDesdeStorage(): void {
    if (typeof localStorage !== 'undefined') {
      const productosGuardados = localStorage.getItem('productos');
      if (productosGuardados) {
        this.productos = JSON.parse(productosGuardados);
      }
    }
  }
}
