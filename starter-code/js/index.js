var pressCalculate = document.getElementById('calc-prices-button');
pressCalculate.onclick = getTotalPrice;

var createButton = document.querySelector('.new');
console.log(createButton);
createButton.onclick = newProduct;

var productsList = document.getElementById('product');

function newProduct() {
	console.log('ey you have a new product');
	let newName = document.getElementById('new-name').value;
	console.log(newName + ' nuevo nombre');
	let newPrice = document.getElementById('new-price').value;
	console.log(newPrice + ' nuevo precio');
	let parent = document.getElementById('product');
	console.log(parent + ' ey parent');

	var addingArticle = document.createElement('article');
	addingArticle.className = 'products grid';
	addingArticle.innerHTML = `
  <div><span>${newName}</span></div>
  <div>$<span class="product-price">${newPrice}</span></div>
  <div class="quantity">
    <label>QTY</label>
    <input
      class="input"
      type="number"
      autocomplete="off"
      placeholder="enter the amount..."
      min="1"
    />
  </div>
  <div>$<span class="total-price">0.00</span></div>
  <div><button class="btn btn-delete">Delete</button></div>
`;

	parent.appendChild(addingArticle);

	var deleteButtons = document.getElementsByClassName('btn-delete');
	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener(
			'click',
			function(e) {
				e.currentTarget.parentNode.parentNode.remove();
			},
			false
		);
	}
}
document.getElementById('del').parentElement.parentElement.addEventListener('click', (e) => {
	e.target.parentElement.parentElement.remove();
});

function getTotalPrice() {
	var prices = document.querySelectorAll('.total-price');
	var lengthPrices = prices.length;
	var totalPrice = 0;
	for (let i = 0; i < lengthPrices; i++) {
		totalPrice = (createQuantityInput(i) * getPriceByProduct(i)).toFixed(2);
		prices[i].innerHTML = totalPrice;
	}
}

function getPriceByProduct(index) {
	//itemNode as argumen???
	var productPrices = document.querySelectorAll('.product-price');
	var singleProductPrice = Number(productPrices[index].innerHTML);
	return Number(singleProductPrice);
}

function createQuantityInput(index) {
	var qantityInputs = document.querySelectorAll('.input');
	var quantity = Number(qantityInputs[index].value);
	return Number(quantity);
}
//window.onload = function () {
//  var calculatePriceButton = document.getElementById('calc-prices-button');
// var createItemButton = document.getElementById('new-item-create');
// var deleteButtons = document.getElementsByClassName('btn-delete');
// var pressCalculate = document.getElementsByClassName('calc-prices-button');
// pressCalculate.onclick = getTotalPrice;  // createItemButton.onclick = createNewItem;
// for (var i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].onclick = deleteItem;
// }
//};
