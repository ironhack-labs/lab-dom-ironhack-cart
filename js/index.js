function calculateSubTotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  // console.log(price);
  // console.log(quantity);

  let subTotal = price * quantity;
  // console.log(subTotal)
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal
}

function calculateAll() {
  let total = 0

  let products = document.querySelectorAll("tr.product")
  for (let p of products) {
    console.log(p)

    total += calculateSubTotal(p)
  }
  document.querySelector("#total-value span").innerText = total
}

document.querySelector('#calculate').onclick = function (e) {
  calculateAll()
}
document.querySelector('#create').onclick = function (e) {
  console.log(e)
  let productname = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value
  console.log(productname)
  let productprice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value
  console.log(productprice)

  let newhtml = `<tr class="product">
<td class="name">
  <span> ${productname}</span>
</td>
<td class="price">$<span>${productprice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`
  document.querySelector("tbody").innerHTML += newhtml
  fancyName()
}

// document.querySelector('.btn-remove').onclick = function(remove){

function fancyName() {
  let removeButtons = document.querySelectorAll('.btn-remove')

  for (let button of removeButtons) {
    button.onclick = function (e) {
      e.target.parentElement.parentElement.remove()
    }
  }
}
fancyName()
