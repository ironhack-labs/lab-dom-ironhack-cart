// let qttsArray = []

function createNewItem(){
  let addName = document.getElementById('add-name');
  let addPrice = document.getElementById('add-price');
  document.getElementById('products').innerHTML += `
  <div class="product">
  <div class="space"><span class="name">${addName.value}</span></div>
  <div>$<span class="price">${Number(addPrice.value).toFixed(2)}</span></div>
  <div><label>QTY <input type="number" value="1" class="quantity" onchange="priceUpdate()"></label></div>
  <div>$<span class="total-product">${Number(addPrice).toFixed(2)}</span></div>
  <div><button class="btn btn-delete">Delete</button></div>
  </div>
  `;
  
  addName.value = '';
  addPrice.value = '';
  priceUpdate();
  
  const deleteButtons = document.querySelectorAll('.btn-delete');
  
  for (let i = 0; i < deleteButtons.length ; i++) {
    deleteButtons[i].onclick = () => {
      deleteButtons[i].parentNode.parentNode.remove();
      priceUpdate();
    }
  }
  
  // for (let i = 0; i < document.querySelectorAll('.quantity').length; i++) {
  //   document.querySelectorAll('.quantity')[i].value = qttsArray[i]
  //   }
  
  }
  
  function priceUpdate(){
  let qtts = document.querySelectorAll('.quantity');
  let prices = document.querySelectorAll('.price');
  let totals = document.querySelectorAll('.total-product');
  let totalPrice = 0;

  for (let i = 0; i < qtts.length; i++) {
    let currPrice = parseFloat(prices[i].innerText);
    let currQtt = qtts[i].value;
    // qttsArray.push(currQtt)
    let currTotal = currPrice * currQtt;
    totals[i].innerText = Number(currTotal).toFixed(2);
    totalPrice += currTotal;


  }

  document.getElementById('total-price').innerText = Number(totalPrice).toFixed(2);
}
