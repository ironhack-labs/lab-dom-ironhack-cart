var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');
let $tbody = document.getElementById("parentProducts") 

function updateSubtot($product) {
  const unitPrice = $product.querySelector('.pu span').innerText;
  const quantity = $product.querySelector('input').value;
  const subTotal = parseFloat(unitPrice) * parseFloat(quantity);
  $product.querySelector(".subtot span").innerText = subTotal;
  return subTotal
}

function calcAll() {
  let total = 0;
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    total += updateSubtot(p);
  }
  document.getElementById('total').innerText = total;
}

function deleteProduct(e){
  let tr  = e.currentTarget.parentElement.parentElement;
  $tbody.removeChild(tr)
  calcAll()
  createDeleteEvents()
}

function createDeleteEvents(){
  const deleteBtns = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deleteProduct)
  }
}

function createProduct(){
  let newProductText = document.getElementById("newText")
  let newProductPrice = document.getElementById("newNumber")
  if(newProductPrice.value && newProductText.value){
    let productHtml = `<tr class="product"><td class="name"><span>${newProductText.value}</span></td><td class="pu">$<span>${newProductPrice.value}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td></tr>`
    $tbody.insertAdjacentHTML("beforeend", productHtml)
    createDeleteEvents();
    newProductPrice.value = "";
    newProductText.value = "";
  } else {
    alert("Tienes que añadir nombre y precio, melon!")
  }
}

$calc.onclick = calcAll;
$create.onclick = createProduct;
createDeleteEvents()