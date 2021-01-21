// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value;

 

  let subTotal = price * quantity

  let calcSubtotal = product.querySelector(".subtotal span")
  return calcSubtotal.innerHTML = subTotal  
}



function calculateAll() {
 
  const singleProduct = document.getElementsByClassName('product');
  console.log(singleProduct[1])
  
  // ITERATION 2
let grandTotal = 0
 for(i=0; i < singleProduct.length ; i++) {
   grandTotal+= parseFloat(updateSubtotal(singleProduct[i]));
  
  }



console.log(grandTotal)
let newTotal = document.querySelector("#total-value span")
newTotal.innerHTML = grandTotal

}
  
  
 
  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentN = target.parentNode.parentNode
  
  let removeFromBody = document.querySelector("tbody")
 
  console.log(parentN)

  
  removeFromBody.removeChild(parentN)

  /*parentN.innerHTML=""**/
  /*while(parentN.firstChild){
    parentN.removeChild(parentN.firstChild)
  calculateAll()

  }*/
  


  }






// ITERATION 5

/*const btnCreate = document.querySelector("#create")*/


 
   function  createProduct () {
    let newName = document.querySelector("#newName").value
    let newQuantity = document.querySelector(".create-product #newQuantity").value
    let insertNewProduct = document.querySelector("tbody")

    let nuevoElemento = document.createElement("tr")
    nuevoElemento.classList.add("product")
    
    nuevoElemento.innerHTML = `<tr class="product"
    <td class="name">
      <span>${newName}</span>
    </td>
    <td class="price">$<span>${newQuantity}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`

    insertNewProduct.appendChild(nuevoElemento)

  }
    
  
    

   


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createPricesBtn = document.getElementById('create');
  createPricesBtn.addEventListener('click', createProduct);

  const removeProductBtn = document.querySelectorAll('.btn-remove');

  for(i=0; i < removeProductBtn.length; i++) {
  removeProductBtn[i].addEventListener('click', removeProduct);
  }
});
