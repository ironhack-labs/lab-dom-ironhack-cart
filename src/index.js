// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price=product.querySelector(".price span").innerHTML;
  const quantity=product.querySelector(".quantity input").value
const calculate=price*quantity
product.querySelector(".subtotal span").innerHTML=calculate
return calculate
}

function calculateAll() {
 let productAll=document.getElementsByClassName("product")
 let count=0
for(let i=0;i<productAll.length;i++){

  count+=updateSubtotal(productAll[i]);
}
let sumTotal=document.querySelector("#total-value span").innerHTML+=count
;
return sumTotal
}



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

 let remover=target.parentNode.parentNode
let parent=target.parentNode.parentNode.parentNode
parent.removeChild(remover)
}


function createProduct() {

  let text=document.querySelectorAll(".create-product")
  let textDoc=text.querySelector("input")
  let productName=textDoc.value

let number=document.querySelector(".create-product")
let textnumber=number.querySelector("input [type='number']")
let productPrice=textnumber.value

  let productBody=document.createElement(`tr`)
   productBody.innerHTML=`<tr class="create-product">
   <td>
     <input type="text" placeholder="${productName}" />
   </td>
   <td>
     <input type="number" min="0" value="0" placeholder"${productPrice}" />
   </td>
   <td></td>
   <td></td>
   <td>
     <button id="create" class="btn">Create Product</button>
   </td>
 </tr>`
 productBody.classList.add('product');
  let positio=document.querySelector(".tbody")
  positio.appendChild(productBody)
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createMaterial=document.querySelector('.btn');
  createMaterial.addEventListener('click', createProduct);
 
  
  
  let delet=document.querySelectorAll(".btn-remove")
  for(let i=0;i<delet.length;i++){
delet[i].addEventListener("click",removeProduct);
    
  }
});
