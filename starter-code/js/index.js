var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $create = document.getElementById('create')

function updateSubtot($product) {
  let priceUnit= $product.querySelector('.pu span').innerHTML;
  let theQuantity= $product.querySelector('.qty input').value;
  let subTotal= $product.querySelector('.subtot span');
   subTotal.innerHTML= Number(priceUnit *theQuantity);
   return subTotal
 }

function calcAll() {
  let filas = document.querySelectorAll('.product')
  let totalPrice = document.querySelector('h2 span')
  let count = 0;
  for (let i = 0; i < filas.length; i++){
    count += parseInt(updateSubtot(filas[i]).innerHTML)   
    }
    totalPrice.innerHTML=count
  return totalPrice 
}
$calc.onclick = calcAll;
//createButton.onclick = createRow;


function deleteProduct(){
  let deleteButtonArr = [...document.querySelector('.btn btn-delete')]
deleteButtonArr.forEach(element => {
  element.addEvenListener('click', (e) => {
    e.target.parentNode.parentNode.remove()
    calcAll()
  })
})
}
deleteProduct();

function createRow(){
  const productName = document.querySelector('.new .input [type="text"]')
  const productPrice = document.querySelectorAll('.new .input [type = "number"]')
  let table = document.querySelector("tbody")
  let newProduct = document.querySelector("tbody tr").cloneNode(true)
  newProduct.querySelector(".name span").innerHTML = productName;
  newProduct.querySelector(".pu span").innerHTML = productPrice;
  table.appendChild(newProduct)
  productName.value = '';
  productPrice.value = '';
  deleteProduct()
}

