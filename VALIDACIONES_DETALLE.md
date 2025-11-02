# 📋 Validaciones Personalizadas - Módulo de Productos

## Resumen Ejecutivo

Este documento detalla todas las validaciones personalizadas implementadas en el módulo de gestión de productos según los requisitos del proyecto SPA-LAB-SRC.

---

## 1️⃣ Validación de Precio (Rango 10-100)

### 📌 Requisito
El precio debe estar en el rango de 10 a 100.

### 💻 Implementación

```typescript
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
```

### ✅ Mensaje de Error
**"El precio está fuera de rango (10 - 100)"**

### 📝 Ejemplos
- ✅ **Válido**: 10, 50.99, 75.50, 100
- ❌ **Inválido**: 9.99, 5, 101, 150

---

## 2️⃣ Validación de Código de Producto

### 📌 Requisito
El código debe iniciar con una letra seguida de números.

### 💻 Implementación

```typescript
validarCodigoProducto(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  // Debe iniciar con una letra seguida de números
  const patron = /^[A-Za-z]\d+$/;
  const valido = patron.test(control.value);
  return valido ? null : { codigoInvalido: true };
}
```

### ✅ Mensaje de Error
**"El código debe iniciar con una letra seguida de números (Ej: A001)"**

### 📝 Ejemplos
- ✅ **Válido**: A001, B123, Z999, a001, x500
- ❌ **Inválido**: 001A, AB01, 123, A, ABC

### 🔍 Explicación del Patrón Regex
- `^` - Inicio de la cadena
- `[A-Za-z]` - Una letra (mayúscula o minúscula)
- `\d+` - Uno o más dígitos
- `$` - Fin de la cadena

---

## 3️⃣ Validación de Nombre del Producto

### 📌 Requisito
No debe ser nulo y debe tener al menos 5 caracteres.

### 💻 Implementación

```typescript
nombre: ['', [Validators.required, Validators.minLength(5)]]
```

### ✅ Mensajes de Error
- **Campo requerido**: "El nombre es obligatorio"
- **Mínimo de caracteres**: "El nombre del producto debe tener mínimo 5 caracteres"

### 📝 Ejemplos
- ✅ **Válido**: "Laptop", "Mouse Gamer", "Teclado RGB"
- ❌ **Inválido**: "CPU", "PC", "", "Mou"

---

## 4️⃣ Validación de Costo

### 📌 Requisito
El costo debe ser mayor a cero.

### 💻 Implementación

```typescript
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
```

### ✅ Mensaje de Error
**"Ingrese un costo válido (mayor a cero)"**

### 📝 Ejemplos
- ✅ **Válido**: 0.01, 1, 50.99, 1000
- ❌ **Inválido**: 0, -10, -0.5, "abc"

---

## 5️⃣ Validación de Valor

### 📌 Requisito
El campo valor es obligatorio.

### 💻 Implementación

```typescript
valor: ['', [Validators.required]]
```

### ✅ Mensaje de Error
**"El valor es obligatorio"**

### 📝 Ejemplos
- ✅ **Válido**: Cualquier número (1, 50, 100.50)
- ❌ **Inválido**: Campo vacío

---

## 📊 Tabla Resumen de Validaciones

| Campo | Tipo | Validaciones | Mensaje de Error |
|-------|------|-------------|------------------|
| **Código** | Texto | - Requerido<br>- Letra + números | "El código debe iniciar con una letra seguida de números (Ej: A001)" |
| **Nombre** | Texto | - Requerido<br>- Min 5 caracteres | "El nombre del producto debe tener mínimo 5 caracteres" |
| **Costo** | Numérico | - Requerido<br>- Mayor a 0 | "Ingrese un costo válido (mayor a cero)" |
| **Precio** | Flotante | - Requerido<br>- Rango 10-100 | "El precio está fuera de rango (10 - 100)" |
| **Valor** | Flotante | - Requerido | "El valor es obligatorio" |

---

## 🎯 Uso en el Formulario

### Configuración del FormGroup

```typescript
inicializarFormulario(): void {
  this.productoForm = this.fb.group({
    codigo: ['', [Validators.required, this.validarCodigoProducto]],
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    costo: ['', [Validators.required, this.validarCostoMayorCero]],
    precio: ['', [Validators.required, this.validarRangoPrecio]],
    valor: ['', [Validators.required]]
  });
}
```

### Mostrar Errores en el Template

```html
<mat-error *ngIf="productoForm.get('precio')?.hasError('fueraDeRango')">
  El precio está fuera de rango (10 - 100)
</mat-error>
```

---

## 🧪 Casos de Prueba

### Caso 1: Producto Válido
```typescript
{
  codigo: "A001",
  nombre: "Laptop HP Pavilion",
  costo: 500,
  precio: 75.50,
  valor: 650
}
```
**Resultado**: ✅ Se guarda correctamente

### Caso 2: Código Inválido
```typescript
{
  codigo: "001A", // ❌ No inicia con letra
  nombre: "Mouse Logitech",
  costo: 10,
  precio: 15,
  valor: 18
}
```
**Resultado**: ❌ Error - "El código debe iniciar con una letra seguida de números"

### Caso 3: Precio Fuera de Rango
```typescript
{
  codigo: "B500",
  nombre: "Teclado Mecánico",
  costo: 30,
  precio: 150, // ❌ Mayor a 100
  valor: 180
}
```
**Resultado**: ❌ Error - "El precio está fuera de rango (10 - 100)"

### Caso 4: Nombre Corto
```typescript
{
  codigo: "C100",
  nombre: "CPU", // ❌ Menos de 5 caracteres
  costo: 200,
  precio: 50,
  valor: 250
}
```
**Resultado**: ❌ Error - "El nombre del producto debe tener mínimo 5 caracteres"

### Caso 5: Costo Inválido
```typescript
{
  codigo: "D200",
  nombre: "Monitor Samsung",
  costo: -50, // ❌ Menor o igual a 0
  precio: 75,
  valor: 100
}
```
**Resultado**: ❌ Error - "Ingrese un costo válido (mayor a cero)"

---

## 🔒 Validación en Tiempo Real

Las validaciones se ejecutan:

1. **Al escribir** - Validación reactiva mientras el usuario escribe
2. **Al perder el foco** - Se marca el campo como "touched"
3. **Al enviar** - Validación completa antes de guardar

### Método de Validación Global

```typescript
marcarCamposComoTocados(): void {
  Object.keys(this.productoForm.controls).forEach(key => {
    this.productoForm.get(key)?.markAsTouched();
  });
}
```

---

## 📱 Experiencia de Usuario

### Indicadores Visuales
- ❌ **Campos inválidos**: Borde rojo + mensaje de error
- ✅ **Campos válidos**: Borde normal
- 💡 **Hints**: Información adicional (ej: "Rango: 10 - 100")
- 🔒 **Botón deshabilitado**: Si el formulario es inválido

### Mensajes de Retroalimentación
- ✅ **Éxito**: Tarjeta verde con animación
- ❌ **Error**: Tarjeta roja con descripción del problema

---

## 🛠️ Tecnologías Utilizadas

- **Angular Reactive Forms**: Para manejo robusto de formularios
- **Validators personalizados**: Para validaciones específicas
- **Angular Material**: Para feedback visual mejorado
- **TypeScript**: Para tipado fuerte y validaciones seguras

---

## ✅ Checklist de Validaciones Implementadas

- [x] Precio: rango 10-100 ✓
- [x] Código: letra + números ✓
- [x] Nombre: mínimo 5 caracteres ✓
- [x] Costo: mayor a cero ✓
- [x] Valor: obligatorio ✓
- [x] Mensajes de error personalizados ✓
- [x] Validación en tiempo real ✓
- [x] Feedback visual ✓

---

**Todas las validaciones han sido implementadas exitosamente según los requisitos del proyecto.** ✨
