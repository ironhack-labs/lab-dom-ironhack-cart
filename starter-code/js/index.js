var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelector(".pu span").innerText;
  let priceQty = $product.querySelector("input[value]").value;
  return priceUnit * priceQty;
}


function calcAll() {
    let argument = document.querySelectorAll(".product");
    let totalTag = document.querySelector("h2 span");
    let totalPrice = 0;
    argument.forEach(element => {
      const puSub = element.querySelector(".subtot span");
      puSub.innerText = updateSubtot(element);
      totalPrice += Number(puSub.innerText);
    });
    totalTag.innerText = totalPrice;
   }
  

   const buttonDelete = document.querySelectorAll('.rm button');
   buttonDelete.forEach(element => {
    element.addEventListener('click', (event)=>{
      const child = element.parentNode.parentNode.parentNode
      child.removeChild(element.parentNode.parentNode)
      calcAll();
      const buttonDelete = document.querySelectorAll('.rm button');
    } );
  });

const button = document.querySelector('#calc');
button.addEventListener('click', calcAll);

const buttonCreate = document.querySelector('#create');
buttonCreate.addEventListener('click', appendRow);

function appendRow(){

    const copy = document.querySelector("tbody .product");
    const clon = copy.cloneNode(true);
    $cart.appendChild(clon);
    let valueText = document.querySelector("#valueText[value]").value;
    let clonText = clon.querySelector('.name span');
    clonText.innerText = valueText;
    const buttonDelete = document.querySelectorAll('.rm button');
    buttonDelete.forEach(element => {
     element.addEventListener('click', (event)=>{
       const child = element.parentNode.parentNode.parentNode
       child.removeChild(element.parentNode.parentNode)
       calcAll();
       const buttonDelete = document.querySelectorAll('.rm button');
     } );
   });

  
}
