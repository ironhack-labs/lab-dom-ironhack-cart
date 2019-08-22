const grandPrice = document.querySelector('.grandprice')
const deleteThis = document.querySelectorAll('.btn-delete')
const products = document.querySelector('#productos')
calculatePriceButton = document.getElementById('calc-prices-button')
calculatePriceButton.addEventListener('click', ()=> {
  getPriceByProduct() 
 })

function deleteItem(e){
const deleteinv = e.target.parentElement
products.removeChild(deleteinv)
}

function getPriceByProduct(jnikj){
  let nodes = document.querySelectorAll('.price')
  let quant = document.querySelectorAll('.qty')
  let total = document.querySelectorAll('.totalprice')
  if (nodes.length <= 0) return 0;
  let grandprice = 0
  let totalPrice = 0
  for(i=0; i< nodes.length; i++){
    totalPrice = (parseFloat(nodes[i].innerHTML.match(/[0-9]/g).join(''))*parseInt(quant[i].value)/100)
    total[i].innerText = `$${totalPrice.toFixed(2)}`
    grandprice += totalPrice  
  } 
  grandPrice.innerText = `$${grandprice.toFixed(2)}` 
  }

function createNewProduct(){
const addProduct  = document.querySelector('.addproduct')
const addPrice = document.querySelector('.addprice')
const newElem = document.createElement('div')
const spanProduct = document.createElement('span')
const spanPrice = document.createElement('span')
spanProduct.innerText = addProduct.value
spanProduct.className = 'product'
spanPrice.innerText = `$${parseFloat(addPrice.value).toFixed(2)}`
spanPrice.className = 'price'

newElem.appendChild(spanProduct)
newElem.appendChild(spanPrice)

newElem.className = 'inventario'
newElem.innerHTML += '<label class="quantity">QTY</label><input type="number" name="" min="0" max="100" class="qty" value="0"><span class="totalprice">$0.00</span>'

const dltbtn = document.createElement('button')
dltbtn.innerText = 'Delete'
dltbtn.className = 'btn btn-delete'
dltbtn.onclick = deleteItem

newElem.appendChild(dltbtn)
products.appendChild(newElem)


}
/*
const newProductName = document.querySelector('.addproduct')
const newProductPrice = document.querySelector('.addprice')

function createNewItem(){
  const newElem = document.createElement('div')

  const newProductContent = `<span class="product">${newProductName.value}</span>

      <span class="price">${newProductPrice.value}</span>
      <div>
      <label class="quantity">QTY</label>
      <input type="number" name="" min="0" max="100" class="qty" value="0">
    </div>

      <span class="totalprice">$0.00</span>

      <button type="submit" name="delete" class="btn btn-delete">Delete</button>`

      newElem.innerHTML = newProductContent
      productos.appendChild(newElem)
}
*/

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  createItemButton.onclick = createNewProduct;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

