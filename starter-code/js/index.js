var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let newAllInfo = document.querySelector('.product');
let $tbody = document.getElementById("products")


//AQUI PUSE ESTO PARA LA CAPTURA DEL EVENTO EN EL BOTON DELETE PERO LUEGO DESCUBRI EL ONCLICK EN HTML Y LLAMO A LA FUNCION DIRECTAMENTE

var $deletebutton = document.getElementsByClassName('rm');
//console.log(document.getElementsByClassName('rm'));
let totalCart = 0;

function updateSubtot($product) {
  // Iteration 1.1

  //console.log($product);

  let prueba = 0;

  prueba = $product.querySelector(".qty");

  console.log($product.cells[1].childNodes);
  console.log($product.cells[1].innerText)
  console.log(prueba.querySelector("input").value)
  let totalSum = $product.cells[1].innerText.substring(1) * parseFloat(prueba.querySelector("input").value);
  $product.cells[3].innerText = totalSum;

  totalCart += totalSum;

}

function calcAll() {
  let u = 0;
  // Iteration 1.2
  const articlesAll = document.querySelectorAll('.product');
  //console.log(articlesAll);

  articlesAll.forEach(element => {
    let totalAmount;
    updateSubtot(element);
    u++;

  });

  document.getElementById(totalTag)
  totalAmount = document.querySelector("h2");
  //console.log(totalAmount.querySelector("span"))

  document.getElementById("totalTag").textContent = totalCart;
  totalCart = 0;

}

//BORRAR FILAS

function clearRows(buttonid) {

  //console.log(buttonid)
  //console.log((buttonid.parentNode).parentNode)
  //console.log(document.querySelectorAll('#deletebutton'));

  let eraserow = ((buttonid.parentNode).parentNode);

  eraserow.parentNode.removeChild(eraserow);

}

//CREAR FILA

function newProduct(productDetails) {

  //console.log(productDetails); NO LO USO PORQUE VOY A CAPTURAR CADA ELEMENTO POR SEPARADO, NO ME FUNCIONA PARENT NODE EN ESTE CASO.

  //let productInfo = document.getElementsByClassName('new');

  //MIRO QUE SACA LO ANTERIOR
  //console.log(document.getElementsByClassName('new'))
  //LO DESCARTO Y AÑADO ID AL TEXTO Y PRECIO DE NUEVOS ARTICULOS EN HTML

  //ALMACENO LOS DATOS DEL NUEVO PRODUCTO
  let productNewName = document.getElementById('productName').value;
  let productNewPrice = document.getElementById('productPrice').value;

  //CREO EL NUEVO TR COPIANDO UNO EXISTENTE Y MODIFICANDO LOS VALORES
  //COPIO EL PRIMERO EXISTENTE AL INICIO DEL JS POR SI BORRASE TODOS Y NO PUDIERA RECUPERARLO.
  //DESCARTO IDEA ANTERIOR TAMBIEN, CREO UNA TR OCULTA CON DISPLAYNONE  Y LOS CAMPOS YA A CERO ME LA COPIO Y LA MODIFICO PARA DESPUES INSERTARLA.

  //console.log(newAllInfo);

  //GUARDO EL CAMPO DE NOMBRE Y PRECIO PARA LUEGO ASIGNARLE EL VALOR INTRODUCIDO POR EL USUARIO 
  //let nameProduct = newAllInfo.getElementsByClassName('name');
  //let priceProduct = newAllInfo.getElementsByClassName('pu');
  // console.log(nameProduct);
  //ASIGNO VALOR A NOMBRE Y PRECIO

  //nameProduct.innerText = productName;
  //priceProduct.innerText = productPrice;
  //console.log(nameProduct)

  //PRUEBA COPIANDOME EL PRIMER TR, NO CONSIGO MODIFICARLO



  //let table = document.querySelectorAll('tr')[1];
  //console.log(table);

  //PRUEBO A COPIAR 1 EXISTENTE

  //let tabletry = document.getElementsByTagName('tr')[1];
  //console.log(tabletry);
  //console.log(productNewName);


  //console.log(newAllInfo.querySelectorAll('span')[0].innerHTML)
  //newAllInfo.querySelectorAll('span')[0].innerHTML = productNewName;************************
  //newAllInfo.querySelectorAll('span')[1].innerHTML = productNewPrice;*********************
  //let node = document.querySelector('tbody');

  //console.log(node.nextSibling)


  //console.log(newAllInfo);

  //let parent = document.getElementsByTagName('tbody');
  //console.log(document.querySelector('tbody'));
  //console.log(document.getElementsByTagName('tbody'));
  //let sibling = document.querySelectorAll('tr')[1];
  //console.log(sibling);

  //parent.insertBefore(newAllInfo, sibling);

  //let tableRef = document.getElementById('cart').getElementsByTagName('tbody')[0];
  //tableRef.insertRow();

  //let t = document.getElementById('cart');
  //let r = document.createElement('TR');
  //console.log(r);
  // console.log(newAllInfo)
  //let rowCount = t.rows.length;
  //console.log(rowCount)
  //console.log(t.tBodies[0].appendChild);
  // document.getElementById('addRow').prepend(newAllInfo);
  //t.tBodies[0].appendChild(newAllInfo);
  //var row = t.insertRow(-1);

  let productHtml = `<tr class="product"><td class="name"><span>${productNewName}</span></td><td class="pu">$<span>${productNewPrice}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button onclick="clearRows(this)" class="btn btn-delete">Delete</button></td></tr>`
  $tbody.insertAdjacentHTML("beforeend", productHtml)

  document.getElementById('productName').value = "";
  document.getElementById('productPrice').value = "";


}

$calc.onclick = calcAll;
$deletebutton.onclick = clearRows;