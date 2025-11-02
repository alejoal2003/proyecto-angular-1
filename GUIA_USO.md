# 🚀 Guía de Uso - Gestión de Productos

## Índice
1. [Acceso al Módulo](#acceso-al-módulo)
2. [Agregar Producto](#agregar-producto)
3. [Editar Producto](#editar-producto)
4. [Eliminar Producto](#eliminar-producto)
5. [Validaciones y Errores](#validaciones-y-errores)

---

## 1. Acceso al Módulo

### Paso 1: Iniciar sesión
1. Abrir la aplicación en `http://localhost:4200`
2. Ingresar credenciales válidas en la pantalla de login

### Paso 2: Navegar al Dashboard
1. Después del login exitoso, serás redirigido al dashboard
2. Verás el mensaje de bienvenida con tu nombre de usuario

### Paso 3: Acceder a Productos
1. En el dashboard, hacer clic en el botón **"Gestión de Productos"**
2. Serás redirigido a la pantalla de productos (`/productos`)

---

## 2. Agregar Producto

### Ejemplo 1: Producto Válido - Laptop

**Datos a Ingresar:**
```
Código del Producto: A001
Nombre del Producto: Laptop HP Pavilion
Costo: 500
Precio: 75.50
Valor: 650
```

**Pasos:**
1. ✍️ Completar el campo "Código del Producto" con: `A001`
2. ✍️ Completar el campo "Nombre del Producto" con: `Laptop HP Pavilion`
3. ✍️ Completar el campo "Costo" con: `500`
4. ✍️ Completar el campo "Precio" con: `75.50`
5. ✍️ Completar el campo "Valor" con: `650`
6. 🖱️ Hacer clic en el botón **"AGREGAR"**
7. ✅ Aparecerá un mensaje verde: "Producto agregado exitosamente"
8. 📋 El producto aparecerá en la tabla

### Ejemplo 2: Producto Válido - Mouse

**Datos a Ingresar:**
```
Código del Producto: B250
Nombre del Producto: Mouse Logitech MX Master
Costo: 25.99
Precio: 45.50
Valor: 55
```

**Pasos:**
1. Completar todos los campos
2. Hacer clic en **"AGREGAR"**
3. El producto se agregará a la tabla

### Ejemplo 3: Producto Válido - Teclado

**Datos a Ingresar:**
```
Código del Producto: C100
Nombre del Producto: Teclado Mecánico RGB
Costo: 60
Precio: 85
Valor: 95
```

---

## 3. Editar Producto

### Escenario: Actualizar el precio de una Laptop

**Estado Inicial:**
```
Código: A001
Nombre: Laptop HP Pavilion
Costo: 500
Precio: 75.50  ← Queremos cambiar esto
Valor: 650
```

**Pasos:**
1. 🔍 Localizar el producto "Laptop HP Pavilion" en la tabla
2. 🖱️ Hacer clic en el icono de **editar** (lápiz) en la fila del producto
3. 📝 El formulario se llenará con los datos actuales
4. ✏️ Cambiar el campo "Precio" de `75.50` a `90`
5. 🖱️ Hacer clic en el botón **"ACTUALIZAR"**
6. ✅ Mensaje: "Producto actualizado exitosamente"
7. 📋 La tabla mostrará el precio actualizado

**Estado Final:**
```
Código: A001
Nombre: Laptop HP Pavilion
Costo: 500
Precio: 90  ← Actualizado
Valor: 650
```

### Cancelar Edición

Si cambias de opinión mientras editas:
1. 🖱️ Hacer clic en el botón **"CANCELAR"**
2. 🔄 El formulario se limpiará
3. ❌ No se guardarán los cambios

---

## 4. Eliminar Producto

### Escenario: Eliminar un Mouse

**Pasos:**
1. 🔍 Localizar el producto "Mouse Logitech MX Master" en la tabla
2. 🖱️ Hacer clic en el icono de **eliminar** (papelera roja)
3. ⚠️ Aparecerá un cuadro de confirmación: "¿Está seguro de eliminar este producto?"
4. ✅ Hacer clic en **"Aceptar"** para confirmar
   - O hacer clic en **"Cancelar"** para abortar
5. ✅ Mensaje: "Producto eliminado exitosamente"
6. 📋 El producto desaparecerá de la tabla

---

## 5. Validaciones y Errores

### Error 1: Código Inválido

**Intentar Agregar:**
```
Código: 001A  ❌ (No inicia con letra)
Nombre: Monitor Samsung
Costo: 200
Precio: 75
Valor: 250
```

**Resultado:**
- ❌ Campo "Código" con borde rojo
- 💬 Mensaje: "El código debe iniciar con una letra seguida de números (Ej: A001)"
- 🔒 Botón "AGREGAR" deshabilitado

**Solución:**
- Cambiar el código a: `M001` ✅

### Error 2: Nombre Muy Corto

**Intentar Agregar:**
```
Código: D500
Nombre: CPU  ❌ (Solo 3 caracteres)
Costo: 150
Precio: 50
Valor: 180
```

**Resultado:**
- ❌ Campo "Nombre" con borde rojo
- 💬 Mensaje: "El nombre del producto debe tener mínimo 5 caracteres"
- 🔒 Botón "AGREGAR" deshabilitado

**Solución:**
- Cambiar el nombre a: `CPU Intel i7` ✅

### Error 3: Precio Fuera de Rango

**Intentar Agregar:**
```
Código: E300
Nombre: Server Dell
Costo: 1000
Precio: 150  ❌ (Mayor a 100)
Valor: 1200
```

**Resultado:**
- ❌ Campo "Precio" con borde rojo
- 💬 Mensaje: "El precio está fuera de rango (10 - 100)"
- 💡 Hint visible: "Rango: 10 - 100"
- 🔒 Botón "AGREGAR" deshabilitado

**Solución:**
- Cambiar el precio a: `95` ✅

### Error 4: Costo Inválido (Cero o Negativo)

**Intentar Agregar:**
```
Código: F100
Nombre: Cable HDMI
Costo: 0  ❌ (Debe ser mayor a 0)
Precio: 15
Valor: 20
```

**Resultado:**
- ❌ Campo "Costo" con borde rojo
- 💬 Mensaje: "Ingrese un costo válido (mayor a cero)"
- 🔒 Botón "AGREGAR" deshabilitado

**Solución:**
- Cambiar el costo a: `5` ✅

### Error 5: Múltiples Errores

**Intentar Agregar:**
```
Código: 123    ❌ (No inicia con letra)
Nombre: USB    ❌ (Menos de 5 caracteres)
Costo: -10     ❌ (Negativo)
Precio: 5      ❌ (Menor a 10)
Valor: (vacío) ❌ (Requerido)
```

**Resultado:**
- ❌ Todos los campos con errores mostrarán borde rojo
- 💬 Cada campo mostrará su mensaje de error específico
- 🔒 Botón "AGREGAR" deshabilitado
- ⚠️ Mensaje general: "Por favor, corrija los errores en el formulario"

**Solución:**
```
Código: U100  ✅
Nombre: USB Kingston 32GB  ✅
Costo: 8  ✅
Precio: 12  ✅
Valor: 15  ✅
```

---

## 🎨 Elementos Visuales de la Interfaz

### Iconos Utilizados

| Icono | Elemento | Descripción |
|-------|----------|-------------|
| 📦 `inventory_2` | Título | Gestión de Productos |
| 🔢 `qr_code` | Código | Campo de código |
| 🛍️ `shopping_bag` | Nombre | Campo de nombre |
| 💵 `attach_money` | Costo | Campo de costo |
| 💳 `payments` | Precio | Campo de precio |
| 🧮 `calculate` | Valor | Campo de valor |
| ➕ `add` | Agregar | Botón agregar |
| 💾 `save` | Actualizar | Botón actualizar |
| ✏️ `edit` | Editar | Acción editar |
| 🗑️ `delete` | Eliminar | Acción eliminar |
| ❌ `cancel` | Cancelar | Botón cancelar |
| 🔄 `refresh` | Limpiar | Botón limpiar |
| ✅ `check_circle` | Éxito | Mensaje éxito |
| ⚠️ `error` | Error | Mensaje error |

### Colores y Estados

| Estado | Color | Descripción |
|--------|-------|-------------|
| **Éxito** | 🟢 Verde (#4caf50) | Operación exitosa |
| **Error** | 🔴 Rojo (#f44336) | Validación fallida |
| **Primario** | 🔵 Azul violeta (#667eea) | Elementos principales |
| **Normal** | ⚪ Blanco/Gris | Estado neutral |
| **Hover** | 🟣 Púrpura | Al pasar el mouse |

---

## 📋 Checklist de Validación Rápida

Antes de hacer clic en "AGREGAR" o "ACTUALIZAR", verifica:

- [ ] ✅ **Código**: Empieza con letra, sigue con números (Ej: A001)
- [ ] ✅ **Nombre**: Mínimo 5 caracteres
- [ ] ✅ **Costo**: Número mayor a 0
- [ ] ✅ **Precio**: Entre 10 y 100
- [ ] ✅ **Valor**: Campo completado
- [ ] ✅ **Botón AGREGAR**: Habilitado (azul)

---

## 🔄 Flujo Completo de Operación

```
Inicio
  ↓
Login (/login)
  ↓
Dashboard (/dashboard)
  ↓
Clic en "Gestión de Productos"
  ↓
Pantalla Productos (/productos)
  ↓
┌─────────────┬──────────────┬────────────────┐
│  AGREGAR    │   EDITAR     │   ELIMINAR     │
└─────────────┴──────────────┴────────────────┘
  ↓               ↓                ↓
Completar       Seleccionar      Confirmar
Formulario      Producto         Eliminación
  ↓               ↓                ↓
Validar         Modificar        Eliminar de
Campos          Datos            la Tabla
  ↓               ↓                ↓
¿Válido?        ¿Válido?         Mensaje
  ↓               ↓                Éxito
Sí → Guardar    Sí → Actualizar
  ↓               ↓
Mensaje         Mensaje
Éxito           Éxito
  ↓               ↓
Aparece en      Actualiza
Tabla           Tabla
```

---

## 💡 Consejos y Mejores Prácticas

### ✨ Para Agregar Productos:
1. Siempre usa códigos únicos (no se valida duplicados, pero es buena práctica)
2. Sé descriptivo con los nombres (mín. 5 caracteres)
3. Verifica que el precio esté entre 10 y 100
4. Usa el botón "LIMPIAR" si quieres empezar de nuevo

### ✨ Para Editar Productos:
1. Haz clic en el ícono de editar (lápiz)
2. Modifica solo los campos necesarios
3. Usa "CANCELAR" si te equivocaste

### ✨ Para Eliminar Productos:
1. Asegúrate de que es el producto correcto
2. La eliminación es permanente (del localStorage)
3. Confirma en el diálogo antes de eliminar

---

## 🆘 Solución de Problemas

### Problema: El botón "AGREGAR" está deshabilitado
**Solución:** Revisa todos los campos, deben estar en verde sin mensajes de error

### Problema: No veo los productos después de agregar
**Solución:** Verifica que apareció el mensaje de éxito verde

### Problema: Los productos desaparecen al recargar
**Solución:** Los productos se guardan en localStorage, verifica que no esté bloqueado

### Problema: No puedo editar un producto
**Solución:** Haz clic en el ícono de lápiz en la fila del producto

---

**¡Listo! Ahora puedes gestionar tus productos de manera eficiente.** 🎉
