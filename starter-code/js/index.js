let $products = document.querySelectorAll(".product");

// ITERATION 1
function updateSubtotal($product) {
  let pricePerUnit = $product.querySelector(".price span").innerHTML;
  console.log(pricePerUnit);

  let quantity = $product.querySelector(".quantity input").value;
  console.log("quantityProduct = " + quantity);

  let subtotal = (pricePerUnit *= quantity); 
  console.log("updateSubtotal = " + subtotal);

  $product.querySelector(".subtotal span").innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //...

  console.log("Is products an array? " + Array.isArray($products));

  let arrProducts = Array.from($products);
  console.log("Now products is an array? " + Array.isArray(arrProducts));

  // ITERATION 3
  // ...
  let total = 0;
  arrProducts.forEach(function (p) {
    total += updateSubtotal(p);
  });
  console.log("total = " + total);

  document.querySelector("#total-value span").innerHTML = total;

  //hola soy coco

  /* SUMA CON EL METOD REDUCE() 
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue
})

  const totalAmount = subtotals.reduce(function(accumulator, currentValue, currentIndex, array) {
                                          return accumulator + currentValue
                                       })
*/

  // For development testing purposes, paste the following code inside of `calculateAll`:
  //const $singleProduct = document.querySelector(".product");
  //updateSubtotal($singleProduct);
  // End of test
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");
  $calculateTrigger.addEventListener("click", calculateAll);

  $products.forEach(function (p) {
    let subtotalTrigger = p.querySelector("input[type='number']");
    subtotalTrigger.addEventListener(
      "change",
      function () {
        updateSubtotal(p);
      },
      false
    );
  });
  
  /*  $products.forEach(function (event) {
    let remove = event.querySelector(".btn btn-remove");
    remove.addEventListener(
      "click",
      function () {
        productRemoveListener(event);
      },
      false
    );
  });*/
  
  
});

// ITERATION 4

 /* let nodeChild = document.querySelector(".product")
  let node = nodeChild.parentNode
  console.log(node); */
const buttonRemove = document.querySelectorAll(".btn-remove")
const tBodyParent = document.querySelector("tbody")
  
function productRemoveListener(event) {
  // node.removeChild(nodeChild) Primera opcion para hacer la iteracion que no he conseguido 
  
  const productRemoved = event.currentTarget.parentNode
  tBodyParent.removeChild(productRemoved.parentNode)
}  
    
 // buttonRemove.forEach(elm => buttonRemove[elm].onClick = productRemoveListener)

for (let i = 0; i < buttonRemove.length; i++) {
  buttonRemove[i].onclick = productRemoveListener()
}
  


// ITERATION 5

const creationButton = document.querySelector("#create")
  
creationButton.onclick = createProduct 


function createProduct(event) {
// ...

let newProduct = document.querySelector('#cart > tbody > tr').cloneNode(true)
//newProduct.innerText = "newRow"  
tBodyParent.appendChild(newProduct)


}
