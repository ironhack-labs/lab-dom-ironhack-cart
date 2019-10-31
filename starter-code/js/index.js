var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $total = document.querySelector('h2 span');
var $create = document.querySelector('#create');
var $inputName = document.querySelector('#inputName');
var $inputPrice = document.querySelector('#inputPrice');
var totalSum;

//Get trbody node
product = $cart.childNodes;
//tr list
let productList = [];
//buttons list
let removeBtnList = [];

console.log(productList, removeBtnList);

$create.addEventListener('click', () => {
	$cart.lastElementChild.insertAdjacentHTML(
		'afterend',
		`
    <tr class="product">
  <td class="name">
    <span>${$inputName.value}</span>
  </td>

  <td class="pu">
    $<span>${$inputPrice.value}</span>
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
  </td>
</tr>`
	);
	productList.push($cart.lastElementChild);
	let removeBtn = $cart.lastElementChild.children[4];
	removeBtnList.push(
		removeBtn.addEventListener('click', () => {
			console.log(productList[productList.length - 1]);
			$cart.removeChild(productList[productList.length - 1]);
			productList.pop();
			removeBtnList.pop();
		})
	);
});

function updateSubtot($product) {
	// Iteration 1.1
	//Getting pu and qty from tr children
	return (
		Number($product.children[1].children[0].innerText) * Number($product.children[2].children[0].children[0].value)
	);
}

function calcAll() {
	// Iteration 1.2
	totalSum = 0;
	productList.forEach((el, idx) => {
		console.log(productList[idx]);
		productList[idx].children[3].innerText = `$${updateSubtot(productList[idx])}`;
		totalSum += updateSubtot(productList[idx]);
	});
	$total.innerText = totalSum;
	console.log($cart, productList, removeBtnList, product);
}

//get tr list and button list
product.forEach((el, idx) => {
	if (idx % 2 != 0) {
		productList.push(el);
		removeBtnList.push(el.children[4]);
	}
});
removeBtnList.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		$cart.removeChild(productList[idx]);
		productList.pop();
		removeBtnList.pop();
	});
});

$calc.onclick = calcAll;

console.log($cart, productList, removeBtnList, product);
