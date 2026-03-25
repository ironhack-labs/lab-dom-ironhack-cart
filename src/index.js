/**
 * ========================================
 * CARRITO DE COMPRAS - IRONHACK CART
 * ========================================
 * Este archivo contiene la lógica de un carrito de compras
 * con funcionalidades para:
 * - Calcular subtotales de productos
 * - Calcular el total de la compra
 * - Eliminar productos
 * - Crear nuevos productos dinámicamente
 * ========================================
 */

// ================================================================
// ITERACIÓN 1: CALCULAR EL SUBTOTAL DE UN SOLO PRODUCTO
// ================================================================

/**
 * updateSubtotal(product)
 * 
 * Función que calcula el subtotal de UN producto específico.
 * Multiplica el precio unitario por la cantidad deseada.
 * 
 * @param {HTMLElement} product - Una fila de producto (<tr class="product">)
 * 
 * Pasos:
 * 1. Busca el precio dentro de ese producto
 * 2. Busca la cantidad que el usuario escribió
 * 3. Busca el elemento donde mostrar el resultado
 * 4. Multiplica: precio × cantidad
 * 5. Muestra el resultado en la página
 * 
 * Ejemplo: Si un producto cuesta $25 y quieres 3, muestra $75
 */
function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  // Busca el elemento con la clase 'price' y dentro de él el <span> con el precio
  const price = product.querySelector('.price span');
  
  // Busca el input de número donde está la cantidad
  const quantity = product.querySelector('.quantity input');
  
  // Busca el elemento donde mostraremos el subtotal (el <span> dentro de subtotal)
  const subtotal = product.querySelector('.subtotal span');
  
  // Multiplica el precio (textContent) por la cantidad (value del input)
  // textContent = el texto que hay dentro del <span>
  // value = lo que el usuario escribió en el input
  const total = price.textContent * quantity.value;
  
  // Muestra el resultado en la página
  subtotal.textContent = total;

}

// ================================================================
// ITERACIÓN 2 + 3: CALCULAR TODOS LOS PRODUCTOS Y EL TOTAL
// ================================================================

/**
 * calculateAll()
 * 
 * Función que calcula el subtotal de TODOS los productos
 * y luego suma todo para obtener el total de la compra.
 * 
 * Se ejecuta en 2 pasos:
 * PASO 1: Calcula el subtotal de cada producto
 * PASO 2: Suma todos los subtotales para obtener el total
 */
function calculateAll() {
  // ==========================================
  // PASO 1: Calcular cada subtotal
  // ==========================================

  // Busca TODOS los elementos con clase 'product' (todas las filas de productos)
  const products = document.querySelectorAll('.product');
  
  // Para CADA producto encontrado, ejecuta la función updateSubtotal
  // Esto calcula el subtotal de cada fila
  // forEach es como un "para cada uno..."
  products.forEach(updateSubtotal);

  // ==========================================
  // PASO 2: Sumar todos los subtotales
  // ==========================================

  // Busca el elemento donde mostraremos el total final (el <span> dentro de #total-value)
  const total = document.querySelector('#total-value span');
  
  // Busca TODOS los elementos con clase 'subtotal span' (todos los subtotales)
  const subTotales = document.querySelectorAll('.subtotal span');
  
  // Inicializamos la variable sum en 0 (empezamos a contar desde cero)
  let sum = 0;
  
  // Para CADA subtotal encontrado:
  subTotales.forEach((subtotal) => {
    // Convertimos el texto a número y lo sumamos al total
    // Number() = convierte texto a número
    // sum = sum + valor  ó  sum += valor (lo mismo)
    sum = sum + Number(subtotal.textContent);
  });

  // Mostramos el total final en la página
  total.textContent = sum;

}

// ================================================================
// ITERACIÓN 4: ELIMINAR UN PRODUCTO
// ================================================================

/**
 * removeProduct(event)
 * 
 * Función que se ejecuta cuando el usuario hace clic en un botón "Remove"
 * Elimina la fila del producto de la tabla y recalcula el total.
 * 
 * @param {Event} event - El evento del click (necesario para identificar qué botón se clickeó)
 * 
 * Pasos:
 * 1. Identifica el botón que fue clickeado
 * 2. Encuentra toda la fila del producto
 * 3. Borra la fila de la tabla
 * 4. Recalcula el total (porque cambió lo que hay en el carrito)
 */
function removeProduct(event) {
  // event.currentTarget = el botón que fue clickeado (el que dispara el evento)
  const target = event.currentTarget; //El botón que dispara el evento
  
  // closest() busca hacia arriba en la estructura HTML
  // Encuentra el <tr class="product"> más cercano (la fila completa)
  const productRow = target.closest('.product'); // Encuentra la fila completa del producto
  
  // .remove() borra el elemento de la página
  productRow.remove(); // Elimina la fila
  
  // Recalcula todos los precios porque el carrito cambió
  //Recalcular los precios
  calculateAll();
  
  // Esto es solo para ver en la consola (debugging)
  console.log('The target in remove is:', target);
  
 

}

// ================================================================
// ITERACIÓN 5: CREAR UN NUEVO PRODUCTO
// ================================================================

/**
 * createProduct()
 * 
 * Función que crea un nuevo producto basado en lo que el usuario escribe
 * en los inputs del formulario (nombre y precio).
 * 
 * El nuevo producto se añade dinámicamente a la tabla.
 * 
 * Pasos principales:
 * 1. Obtener los datos que escribió el usuario
 * 2. Validar que sean datos válidos
 * 3. Crear una fila nueva (HTML)
 * 4. Hacer que funcione el botón "Remove" de esa fila
 * 5. Añadir la fila a la tabla
 * 6. Limpiar los inputs del formulario
 * 7. Recalcular el total
 */
function createProduct() {
  
  // ==========================================
  // PASO 1: Obtener los datos del usuario
  // ==========================================
  
  // 1️ Seleccionar inputs del tfoot
  // Busca TODOS los inputs dentro de la clase 'create-product'
  const inputs = document.querySelectorAll('.create-product input');
  
  // El primer input (índice 0) es el nombre del producto
  const nameInput = inputs[0];
  
  // El segundo input (índice 1) es el precio
  const priceInput = inputs[1];

  // .trim() elimina espacios en blanco al principio y final
  // Ej: "  iPhone  " se convierte en "iPhone"
  const nameValue = nameInput.value.trim();
  
  // Number() convierte el texto a número
  // .toFixed(2) redondea a 2 decimales (formato de dinero: 19.99)
  const priceValue = Number(priceInput.value).toFixed(2);

  // ==========================================
  // PASO 2: Validar los datos
  // ==========================================
  
  // Si el nombre está vacío O el precio es negativo, cancela la función
  // return = sale de la función sin hacer nada
  if (!nameValue || priceValue < 0) return; // validación

  // ==========================================
  // PASO 3: Crear la fila nueva (HTML)
  // ==========================================
  
  // 2️ Crear fila nueva
  // document.createElement('tr') crea una etiqueta <tr> vacía
  const productRow = document.createElement('tr');
  
  // Añade la clase 'product' al <tr> para que CSS lo reconozca
  productRow.classList.add('product');
  
  // innerHTML = meter HTML dentro del elemento
  // ${variable} = insertar el valor de la variable (template literals con backticks)
  // Creamos una fila con: nombre, precio, input de cantidad, subtotal, botón remove
  productRow.innerHTML = `
    <td class="name"><span>${nameValue}</span></td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  // ==========================================
  // PASO 4: Hacer funcionar el botón Remove
  // ==========================================

  // 3️ Agregar funcionalidad al botón remove
  // Busca el botón 'btn-remove' dentro de la fila que acabamos de crear
  const removeBtn = productRow.querySelector('.btn-remove');
  
  // Cuando el usuario haga click en ese botón, ejecuta la función removeProduct
  removeBtn.addEventListener('click', removeProduct);

  // ==========================================
  // PASO 5: Añadir la fila a la tabla
  // ==========================================

  // 4️  Añadir la fila a la tabla
  // Busca el <tbody> (el cuerpo de la tabla donde van los productos)
  const tbody = document.querySelector('#cart tbody');
  
  // appendChild() = "añade como hijo"
  // Mete la fila nueva dentro del tbody
  tbody.appendChild(productRow);

  // ==========================================
  // PASO 6: Limpiar los inputs
  // ==========================================

  // 5️ Limpiar inputs
  // Borra el texto que escribió en el input de nombre
  nameInput.value = '';
  
  // Vuelve el precio a 0
  priceInput.value = 0;

  // ==========================================
  // PASO 7: Recalcular el total
  // ==========================================

  // 6️ Recalcular total
  // Porque añadimos un producto nuevo, recalcula todos los precios
  calculateAll();
}

// ================================================================
// INICIALIZACIÓN: Conectar los botones cuando carga la página
// ================================================================

/**
 * window.addEventListener('load', () => { ... })
 * 
 * Esta función se ejecuta automáticamente cuando la página termina de cargar.
 * 
 * ¿Por qué esperar a que cargue?
 * Porque si ejecutamos el código antes, los botones HTML todavía no existen,
 * así que no los podríamos encontrar ni podrían escuchar clicks.
 * 
 * Dentro conectamos:
 * 1. El botón "Calculate Prices"
 * 2. Todos los botones "Remove" que existen al cargar
 * 3. El botón "Create Product"
 */
window.addEventListener('load', () => {
  
  // ==========================================
  // BOTÓN: CALCULAR PRECIOS
  // ==========================================
  
  // Busca el elemento con id="calculate" (el botón de calcular)
  const calculatePricesBtn = document.getElementById('calculate');
  
  // Cuando hagas click, ejecuta la función calculateAll()
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ==========================================
  // BOTONES: ELIMINAR PRODUCTOS
  // ==========================================

  // botones de eliminar
  // Busca TODOS los botones con clase 'btn-remove'
  const removeBtns = document.querySelectorAll('.btn-remove');
  
  // Para CADA botón encontrado, añade un listener
  removeBtns.forEach((btn) => {
    // Cuando hagas click en ese botón, ejecuta removeProduct()
    btn.addEventListener('click', removeProduct);
  });

  // ==========================================
  // BOTÓN: CREAR PRODUCTO
  // ==========================================

  //botones de crear
  // Busca el elemento con id="create" (el botón de crear)
  const createBtn = document.getElementById('create');
  
  // Cuando hagas click, ejecuta la función createProduct()
  createBtn.addEventListener('click', createProduct);
  
});

/**
 * ========================================
 * RESUMEN RÁPIDO
 * ========================================
 * 
 * updateSubtotal() → Multiplica precio × cantidad de UN producto
 * calculateAll()   → Suma todos los subtotales
 * removeProduct()  → Borra un producto y recalcula
 * createProduct()  → Crea un nuevo producto dinámicamente
 * 
 * El "load" event conecta todo esto a los botones de la página.
 * 
 * ========================================
 */