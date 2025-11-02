# Gestión de Productos - SPA-LAB-SRC

## 📋 Descripción del Proyecto

Este módulo implementa una pantalla completa de gestión de productos para el proyecto SPA-LAB-SRC, incluyendo validaciones personalizadas y un diseño moderno utilizando Angular Material.

## ✨ Características Implementadas

### 1. Campos del Formulario

El formulario de productos incluye los siguientes campos:

- **Código del Producto**: Tipo texto (debe iniciar con letra seguida de números)
- **Nombre**: Tipo texto (mínimo 5 caracteres)
- **Costo**: Tipo numérico (debe ser mayor a cero)
- **Precio**: Tipo flotante (rango: 10 a 100)
- **Valor**: Tipo flotante

### 2. Validaciones Personalizadas

#### ✅ Precio (Rango 10-100)
```typescript
validarRangoPrecio(control: AbstractControl): ValidationErrors | null {
  const valor = parseFloat(control.value);
  if (valor < 10 || valor > 100) {
    return { fueraDeRango: true };
  }
  return null;
}
```
**Mensaje**: "El precio está fuera de rango (10 - 100)"

#### ✅ Código de Producto
```typescript
validarCodigoProducto(control: AbstractControl): ValidationErrors | null {
  const patron = /^[A-Za-z]\d+$/;
  const valido = patron.test(control.value);
  return valido ? null : { codigoInvalido: true };
}
```
**Mensaje**: "El código debe iniciar con una letra seguida de números (Ej: A001)"
**Ejemplo válido**: A001, B123, Z999

#### ✅ Nombre del Producto
```typescript
Validators.required, Validators.minLength(5)
```
**Mensaje**: "El nombre del producto debe tener mínimo 5 caracteres"

#### ✅ Costo
```typescript
validarCostoMayorCero(control: AbstractControl): ValidationErrors | null {
  const valor = parseFloat(control.value);
  if (isNaN(valor) || valor <= 0) {
    return { costoInvalido: true };
  }
  return null;
}
```
**Mensaje**: "Ingrese un costo válido (mayor a cero)"

### 3. Diseño Visual con Angular Material

Se implementaron los siguientes componentes de Angular Material:

- ✅ **MatCardModule**: Para tarjetas de contenido
- ✅ **MatFormFieldModule**: Para campos de formulario
- ✅ **MatInputModule**: Para inputs
- ✅ **MatButtonModule**: Para botones
- ✅ **MatIconModule**: Para iconos
- ✅ **MatTableModule**: Para tabla de productos
- ✅ **MatTooltipModule**: Para tooltips informativos

#### Características del Diseño:

1. **Interfaz Moderna y Atractiva**
   - Gradiente de fondo (violeta a púrpura)
   - Tarjetas con sombras y bordes redondeados
   - Animaciones suaves en interacciones
   - Diseño responsive

2. **Formulario Intuitivo**
   - Campos con iconos descriptivos
   - Mensajes de error claros y específicos
   - Hints informativos
   - Validación en tiempo real

3. **Tabla de Productos**
   - Diseño limpio y organizado
   - Acciones rápidas (editar/eliminar)
   - Efectos hover
   - Mensaje cuando no hay datos

4. **Feedback Visual**
   - Mensajes de éxito (verde)
   - Mensajes de error (rojo)
   - Animaciones de entrada
   - Auto-ocultamiento de mensajes

## 📁 Estructura de Archivos

```
src/app/
├── productos/
│   ├── productos.component.ts       # Lógica del componente
│   ├── productos.component.html     # Template HTML
│   └── productos.component.css      # Estilos personalizados
├── services/
│   └── producto.service.ts          # Servicio de gestión de productos
├── app.module.ts                    # Módulo principal (incluye Material)
└── app-routing.module.ts            # Rutas actualizadas
```

## 🚀 Cómo Usar

### 1. Acceder al Módulo

Desde el dashboard, hacer clic en el botón **"Gestión de Productos"**

### 2. Agregar un Producto

1. Completar todos los campos del formulario
2. Asegurarse de cumplir con todas las validaciones
3. Hacer clic en el botón **"AGREGAR"**

### 3. Editar un Producto

1. Hacer clic en el icono de editar (lápiz) en la tabla
2. Modificar los campos necesarios
3. Hacer clic en **"ACTUALIZAR"**

### 4. Eliminar un Producto

1. Hacer clic en el icono de eliminar (papelera) en la tabla
2. Confirmar la eliminación

## 🎨 Paleta de Colores

- **Principal**: #667eea (Azul violeta)
- **Secundario**: #764ba2 (Púrpura)
- **Éxito**: #4caf50 (Verde)
- **Error**: #f44336 (Rojo)
- **Fondo**: Linear gradient (violeta a púrpura)

## 📱 Responsive Design

El diseño es completamente responsive y se adapta a:

- 📱 Dispositivos móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Escritorio (> 1024px)

## 🔒 Seguridad

- Ruta protegida con **AuthGuard**
- Validaciones del lado del cliente
- Almacenamiento local de datos (localStorage)

## 📦 Dependencias Añadidas

```json
{
  "@angular/material": "^17.3.0",
  "@angular/cdk": "^17.3.0"
}
```

## 🛠️ Comandos de Instalación

```bash
# Instalar Angular Material
npm install @angular/material@^17.3.0 @angular/cdk@^17.3.0

# Iniciar el servidor de desarrollo
npm start
```

## 📚 Validaciones Implementadas

| Campo | Validación | Mensaje de Error |
|-------|-----------|------------------|
| Código | Letra seguida de números | "El código debe iniciar con una letra seguida de números (Ej: A001)" |
| Nombre | Mínimo 5 caracteres | "El nombre del producto debe tener mínimo 5 caracteres" |
| Costo | Mayor a cero | "Ingrese un costo válido (mayor a cero)" |
| Precio | Rango 10-100 | "El precio está fuera de rango (10 - 100)" |
| Valor | Obligatorio | "El valor es obligatorio" |

## 🎯 Ejemplos de Datos Válidos

```typescript
{
  codigo: "A001",
  nombre: "Laptop HP Pavilion",
  costo: 500,
  precio: 75.50,
  valor: 650
}

{
  codigo: "B250",
  nombre: "Mouse Logitech",
  costo: 10,
  precio: 15.99,
  valor: 18
}
```

## ✅ Tareas Completadas

- [x] Tarea 1: Implementación de validaciones personalizadas
  - [x] Validación de precio (rango 10-100)
  - [x] Validación de código de producto (letra + números)
  - [x] Validación de nombre (mínimo 5 caracteres)
  - [x] Validación de costo (mayor a cero)

- [x] Tarea 2: Diseño visual con Angular Material
  - [x] Instalación de Angular Material
  - [x] Implementación de componentes Material
  - [x] Diseño moderno y responsive
  - [x] Experiencia de usuario mejorada

## 🔗 Navegación

- `/login` - Pantalla de inicio de sesión
- `/dashboard` - Dashboard principal
- `/clientes` - Gestión de clientes
- `/productos` - **Gestión de productos** (NUEVO)

## 📝 Notas Adicionales

- Los productos se almacenan en localStorage para persistencia
- El formulario usa ReactiveFormsModule para validaciones robustas
- Todos los mensajes de error son claros y específicos
- El diseño sigue las mejores prácticas de Material Design
- El código es modular y fácil de mantener

---

**Desarrollado para el curso de Aplicaciones Web Avanzadas** 🎓
