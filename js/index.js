// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector("input").value;

  let subtotal = Number(price) * quantity;
  product.querySelector(".subtotal span").innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2


 
  
  
  
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


/* NOTAS

ACESO A ELEMS

- document.getElementById("id")
- document.getElementsByClassName("class")
- document.getElementsByTagName("p")
- document.querySelector("ul")
- document.querySelectorAll("")

ACCESO A CONTENIDO DE UN ELEM
 
(se pueden usar para sobreescribir el contenido de un elem)

- document.querySelector("p").innerText
- document.querySelector("p").textContent
- document.querySelector("p").innerHTML
*/