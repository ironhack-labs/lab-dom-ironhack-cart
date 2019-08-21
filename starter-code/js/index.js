const bigTot = document.querySelector('#bigTotal')

document.querySelector("#calc").onclick = () => {
  calcPrice()
}

document.querySelector(".btn-create").onclick = () => {
  addProduct()
}


function calcPrice (){
  let prices = document.querySelectorAll('.price')
  let qty = document.querySelectorAll(".qty")
  let subtotal = document.querySelectorAll('.subtotal')
  let totalPrice = 0;
  let total = 0;

  for (i = 0; i < prices.length; i++) {
    total = parseFloat(prices[i].innerHTML)
    total *= parseFloat(qty[i].value)
    subtotal[i].innerText = `$ ${total}`
    totalPrice += total
  }
  bigTot.innerText = totalPrice
}


function addProduct (){
  let pr = document.querySelector('.newproduct')
  let parent = document.querySelector('.cart')
  let newPrd = document.querySelector('#newproduct')
  let bubbb =  document.querySelector('.buble')
  
 let newww = newPrd.val

 let closest = pr.closest('li > .price')

  console.log(closest)

let newItem = `
<li class="row prdct">
<span class="buble"></span>
<span class="price"></span>
<input type="number" class="qty" value="0">
<span class="subtotal"></span>
<button class="btn-delete">Delete</button>
</li>
`
parent.insertAdjacentHTML("afterend", newItem)

}
