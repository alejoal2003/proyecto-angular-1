import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productoForm!: FormGroup;
  productos: any[] = [];
  editando: boolean = false;
  indiceEdicion: number = -1;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarProductos();
  }

  inicializarFormulario(): void {
    this.productoForm = this.fb.group({
      codigo: ['', [Validators.required, this.validarCodigoProducto]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      costo: ['', [Validators.required, this.validarCostoMayorCero]],
      precio: ['', [Validators.required, this.validarRangoPrecio]],
      valor: ['', [Validators.required]]
    });
  }

  // Validador personalizado para el código de producto
  validarCodigoProducto(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    // Debe iniciar con una letra seguida de números
    const patron = /^[A-Za-z]\d+$/;
    const valido = patron.test(control.value);
    return valido ? null : { codigoInvalido: true };
  }

  // Validador personalizado para el precio (rango 10-100)
  validarRangoPrecio(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const valor = parseFloat(control.value);
    if (isNaN(valor)) {
      return { precioInvalido: true };
    }
    if (valor < 10 || valor > 100) {
      return { fueraDeRango: true };
    }
    return null;
  }

  // Validador personalizado para el costo (mayor a cero)
  validarCostoMayorCero(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const valor = parseFloat(control.value);
    if (isNaN(valor) || valor <= 0) {
      return { costoInvalido: true };
    }
    return null;
  }

  cargarProductos(): void {
    this.productos = this.productoService.obtenerProductos();
  }

  agregarProducto(): void {
    if (this.productoForm.valid) {
      const nuevoProducto = this.productoForm.value;
      this.productoService.agregarProducto(nuevoProducto);
      this.productos = this.productoService.obtenerProductos();
      this.productoForm.reset();
      this.mensajeExito = 'Producto agregado exitosamente';
      this.mensajeError = '';
      setTimeout(() => this.mensajeExito = '', 3000);
    } else {
      this.mensajeError = 'Por favor, corrija los errores en el formulario';
      this.mensajeExito = '';
      this.marcarCamposComoTocados();
    }
  }

  editarProducto(index: number): void {
    const producto = this.productos[index];
    this.productoForm.patchValue(producto);
    this.editando = true;
    this.indiceEdicion = index;
    this.mensajeExito = '';
    this.mensajeError = '';
  }

  actualizarProducto(): void {
    if (this.productoForm.valid) {
      const productoActualizado = this.productoForm.value;
      this.productoService.actualizarProducto(this.indiceEdicion, productoActualizado);
      this.productos = this.productoService.obtenerProductos();
      this.cancelarEdicion();
      this.mensajeExito = 'Producto actualizado exitosamente';
      this.mensajeError = '';
      setTimeout(() => this.mensajeExito = '', 3000);
    } else {
      this.mensajeError = 'Por favor, corrija los errores en el formulario';
      this.mensajeExito = '';
      this.marcarCamposComoTocados();
    }
  }

  eliminarProducto(index: number): void {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(index);
      this.productos = this.productoService.obtenerProductos();
      this.mensajeExito = 'Producto eliminado exitosamente';
      setTimeout(() => this.mensajeExito = '', 3000);
    }
  }

  cancelarEdicion(): void {
    this.productoForm.reset();
    this.editando = false;
    this.indiceEdicion = -1;
    this.mensajeError = '';
  }

  marcarCamposComoTocados(): void {
    Object.keys(this.productoForm.controls).forEach(key => {
      this.productoForm.get(key)?.markAsTouched();
    });
  }

  // Métodos helper para mostrar errores
  get codigoInvalido(): boolean {
    const control = this.productoForm.get('codigo');
    return !!(control?.invalid && control?.touched);
  }

  get nombreInvalido(): boolean {
    const control = this.productoForm.get('nombre');
    return !!(control?.invalid && control?.touched);
  }

  get costoInvalido(): boolean {
    const control = this.productoForm.get('costo');
    return !!(control?.invalid && control?.touched);
  }

  get precioInvalido(): boolean {
    const control = this.productoForm.get('precio');
    return !!(control?.invalid && control?.touched);
  }

  get valorInvalido(): boolean {
    const control = this.productoForm.get('valor');
    return !!(control?.invalid && control?.touched);
  }
}
