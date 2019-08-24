

function createNewItem() {

  let name = window.prompt('What is the name for the Ironhack product?')
  let price = window.prompt('What is the price for the item?')
  let rowHTML = `  <div class="row flex">
  <p class="col">Iron${name}</p>
  <div class="col">
    <span>$</span>
    <p class="inline-block initialPrice  price">${price}.00</p>
  </div>
  <form class="col">
    <label class="inline-block" for="price">Quantity:</label>
    <input class="inline-block initialQuantity input" type="text" name="price" placeholder="0" />
  </form>
  <div class="col">
    <span>$</span>
    <p class="inline-block individualTotal values updated">0.00</p>
  </div>
  <button class="btn btn-danger btn-delete">Delete</button>
  </div>
  `
  
  document.getElementById('shopping').innerHTML += rowHTML

}


function deleteItem(e) {
  e.target.parentNode.remove()

}

function inputUpdate(e) {

  let i = 0
  let total = 0
  let updatedValue = document.getElementsByClassName('values')
  let price = Number(e.target.parentElement.parentElement.children[1].children[1].innerText)
  let qty = Number(e.target.value)


  e.target.parentElement.parentElement.children[3].children[1].innerText = price * qty

  while (i < updatedValue.length) {

    total += Number(updatedValue[i].innerText)
    i++
  }

  document.querySelector("body > h1.total").innerText = total
 

}

window.onload = function () {

  var deleteButtons = document.getElementsByClassName('btn-delete');
  let input = document.getElementsByClassName('input')
  var createItemButton = document.getElementById('new-item-create');

  createItemButton.onclick = createNewItem;

  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', inputUpdate)
  }
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

}

