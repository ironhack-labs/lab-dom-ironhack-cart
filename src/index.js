// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerText // unary operator
  const quantity = product.querySelector('.quantity input').value
  
  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  let total = [...products].reduce((total, product) => {
    return total + updateSubtotal(product)
  }, 0)

  // ITERATION 3
  document.querySelector("#total-value span").innerText = total
}

// ITERATION 4
function removeProduct(event) {
  // const target = event.currentTarget // identifies the current target for the event, as the event traverses the DOM (event bubbling). It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.
  const target = event.target // required for METHOD 2.2
  const product = target.parentNode.parentNode
  if (product.parentNode === null) return
  const tBody = product.parentNode // for a product initially in the HTML, this event handler is called twice, but the second time the HTML DOM element (product tr) has been removed, so it has no parent anymore
  tBody.removeChild(product)
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const rowCreateProduct = document.querySelector(".create-product");
  const inputElmCollection = rowCreateProduct.getElementsByTagName("input");
  const inputName = inputElmCollection[0].value;
  const inputPrice = inputElmCollection[1].value;
  
  // METHOD 1.1 // best
  // const rowNewProduct = `
  // <tr class="product">
  //   <td class="name">
  //     <span>${inputName}</span>
  //   </td>
  //   <td class="price">$<span>${inputPrice}</span></td>
  //   <td class="quantity">
  //     <input type="number" value="0" min="0" placeholder="Quantity" />
  //   </td>
  //   <td class="subtotal">$<span>0</span></td>
  //   <td class="action">
  //     <button class="btn btn-remove">Remove</button>
  //   </td>
  // </tr>
  // `;
  // const tBody = document.querySelector("#cart tbody");
  // tBody.insertAdjacentHTML("beforeend", rowNewProduct);

  // METHOD 1.2 // won't work if cart has been emptied because there will be no product row to "copy"
  // const productFirst = [...document.getElementsByClassName("product")][0]
  // const productNew = document.createElement("tr") // only document has this method, not child elements
  // productNew.innerHTML = productFirst.innerHTML
  // productNew.classList.add("product")
  // productNew.querySelector("td.name span").innerText = inputName
  // productNew.querySelector("td.price span").innerText = inputPrice
  // const tBody = document.querySelector("#cart tbody");
  // tBody.appendChild(productNew);

  // METHOD 1.2 BIS
  const productNew = document.createElement("tr") // only document has this method, not child elements
  productNew.innerHTML = productFirst.innerHTML // still works if the element is actually removed from the HTML DOM (ie product row remove from cart)
  // productNew.innerHTML = productFirstHTML
  productNew.classList.add("product")
  productNew.querySelector("td.name span").innerText = inputName
  productNew.querySelector("td.price span").innerText = inputPrice
  productNew.querySelector("td.subtotal span").innerText = 0 // old value
  const tBody = document.querySelector("#cart tbody");
  tBody.appendChild(productNew);

  // Add event on the remove button of the new product inserted
  // METHOD 2.1 target only new button events
  // const removeBtnCollection = [...document.querySelectorAll(".btn-remove")];
  // const removeBtnNew = removeBtnCollection[removeBtnCollection.length - 1];
  // removeBtnNew.addEventListener("click", removeProduct);
  // METHOD 2.2 add an event listener on the whole document body (via event bubbling) and filter out the target
  // not great because it adds a new event listener each time there is a new product row in the cart...
  // document.body.addEventListener("click", function(event) {
  //   // event.target.classList : DOMTokenList(2) ['btn', 'btn-remove', value: 'btn btn-remove']
  //   // console.log({...event.target.classList}) // {0: 'btn', 1: 'btn-remove'}
  //   // console.log([...event.target.classList]) // ['btn', 'btn-remove']
  //   if([...event.target.classList].includes('btn-remove')) removeProduct(event) 
  // })
  // METHOD 2.2 BIS
  document.body.removeEventListener("click", clickNewHandler) // no error if does not exist!
  // there is no hasEventListener is JS
  // Chrome has getEventListeners() for debugging purposes
  document.body.addEventListener("click", clickNewHandler)
  
  // REMARK:
  // if(element.addEventListener) { // DOM standard for IE9+ (and all the other browsers)
  //   element.addEventListener('click', handler, false)
  // } else if(element.attachEvent) { // non-standard JS function implemented in IE8- (IE8 and previous versions)
  //   element.attachEvent('onclick', handler)
  // }
  // else {
  //   window.onclick = handler; // will override any attached event listeners --> prefer adding a handler to the event's stack, instead of overwriting it
  // }

  function clickNewHandler(event) {
    if([...event.target.classList].includes('btn-remove')) removeProduct(event) 
  }

  // clean inputs of the Create Product row in tfoot
  inputElmCollection[0].value = "";
  inputElmCollection[1].value = 0;
}

// Add hoisted type 2 global vars (global object pollution... but it's just to test METHOD 1.2 BIS!)
var productFirst // reference updated in real time when user interacting with the cart
var productFirstHTML

// Add event listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeProductBtnCollection = document.querySelectorAll(".product .btn-remove");
  removeProductBtnCollection.forEach((removeProductBtn) => {
    removeProductBtn.addEventListener("click", removeProduct)
  })
  
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener("click", createProduct)

  // save the html structure of a product row
  productFirst = [...document.getElementsByClassName("product")][0]
  productFirstHTML = productFirst.innerHTML
});
