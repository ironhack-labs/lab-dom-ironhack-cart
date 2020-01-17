var cart = document.querySelector('#cart tbody');
var calc = document.getElementById('calc');



function updateSubtot() {
  // Iteration 1.1
  var products = document.querySelectorAll(".product");
  let subTotal = 0;
  let total = 0;

  products.forEach((product) => {
    var subtot = product.querySelector(".subtot span");
    var pu = product.querySelector(".pu span");
    var qty = product.querySelector(".qty input");

    subTotal = pu.innerHTML * qty.value;
    subtot.innerHTML = subTotal
    total += subTotal
  })
  return total
}

function calcAll() {
  var finalPrice = document.querySelector("body h2 span")
  // Iteration 1.2
  updateSubtot();
  finalPrice.innerHTML = updateSubtot();
}



var delButtons = document.querySelectorAll(".rm");

delButtons.forEach((del) => {
  let wrapper = del.parentNode;
  let parent = wrapper.parentNode;

  del.addEventListener("click", () => {
    parent.removeChild(wrapper)
    calcAll();
  })
})


let create = document.querySelector("#create");
let itemName = document.querySelector("#nameItem")
let priceItem = document.querySelector("#priceItem")

function createItem() {
  cart.innerHTML += `<tr class="product"></tr>`;
  tbody = document.querySelector("tbody")
  tbody.lastElementChild.innerHTML +=
    `     <td class="name">
            <span>${itemName.value}</span>
          </td>
      
          <td class="pu">
            $<span>${priceItem.value}</span>
          </td>
      
          <td class="qty">
            <label>
              <input type="number" value="0" min="0">
            </label>
          </td>
      
          <td class="subtot">
            $<span>0</span>
          </td>
      
          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>`;
}


create.onclick = createItem;
calc.onclick = calcAll;
