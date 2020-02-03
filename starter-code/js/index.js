var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
   const $price = Number ($product.querySelector(".product > .pu > span").innerText);
   const $quantity = Number ($product.querySelector(".product > .qty > label > input").value);
   const $subTotalElement = $product.querySelector(".product > .subtot > span");
   let subTot = 0;
   subTot = $price * $quantity; 
   $subTotalElement.innerHTML = subTot;
  //  console.log("subTot"+subTot);
   return subTot;
}

function calcAll() {
  // console.log("within calcAll");
  const $totPrice = document.querySelector("#Total-Price");
  const $productArray = document.querySelectorAll(".product");
  let totalPrice = 0;

  $productArray.forEach($product => {
     totalPrice = totalPrice + updateSubtot($product);
  })
  $totPrice.innerText  = totalPrice;
}
$calc.addEventListener('click', calcAll);

function deleteProduct(e) {
 const $parentTr = e.currentTarget.parentNode.parentNode;
 const $parentTbody = $parentTr.parentNode;
 $parentTbody.removeChild($parentTr);
//  console.log("call calcAll");
 calcAll();
}

const $deleteProductArray = [...document.querySelectorAll(".btn-delete")];

$deleteProductArray.forEach( $deleteProduct => {
  // console.log($deleteProduct);
  $deleteProduct.addEventListener('click', deleteProduct);
})

  const $createButton   = document.getElementById("create");

  function createNewProduct(){
    const $newProductArray = [...document.querySelectorAll(".new > td")];
    let $newProductName = $newProductArray[0].children[0].value;
    let $newPriceUnit   = $newProductArray[1].children[0].value;
    
    let newProduct = document.createElement('tr');
    newProduct.className = "product";
    newProduct.innerHTML =   
    `<td class='name'>
      <span>${$newProductName}</span>
    </td>

    <td class='pu'>
      $<span>${$newPriceUnit}</span>
    </td>

    <td class='qty'>
      <label>
        <input type='number' value='0' min='0'>
      </label>
    </td>

    <td class='subtot'>
      $<span>0</span>
    </td>

    <td class='rm'>
      <button class='btn btn-delete'>Delete</button>
    </td>`;
    $cart.appendChild(newProduct);
    const $deleteProd = [...document.querySelectorAll(".product")];
    const lastChild = $deleteProd[$deleteProd.length - 1];
    lastChild.querySelector(".btn-delete").addEventListener('click', deleteProduct);
    calcAll();
    $newProductArray[0].children[0].value = " ";
    $newProductArray[1].children[0].value = " " ;
  }

  $createButton.addEventListener('click', createNewProduct);
