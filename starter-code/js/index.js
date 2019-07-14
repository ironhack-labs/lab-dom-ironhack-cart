// function deleteItem(e) {

// }

// function getPriceByProduct(itemNode) {

// }

// function updatePriceByProduct(productPrice, index) {

// }

// function getTotalPrice() {

// }

// function createQuantityInput() {

// }

// function createDeleteButton() {

// }

// function createQuantityNode() {

// }

// function createItemNode(dataType, itemData) {

// }

// function createNewItemRow(itemName, itemUnitPrice) {

// }

// function createNewItem() {

// }

// window.onload = function () {
//   const calculatePriceButton = document.getElementById('calc-prices-button');
//   const createItemButton = document.getElementById('new-item-create');
//   const deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

const button = document.querySelector('button');
const productList = document.querySelector('ul');
const calculatePrices = document.querySelector('.calc-prices-button');
const shopList = [];
let totalCost = 0;

function addProduct() {
  productList.innerHTML = '';
  shopList.forEach((product) => {
    productList.innerHTML
    += `
      <li class = "product">
        <div class="product">
        <div class = "name">
          <span>
          ${product.name}
          </span>
        </div>
        <div class = "cost">
          <span>
          $${product.price}
          </span>
        </div>
        <div class = "input">
          <span>
            Qty <input type="number" placeholder="${product.qty}" class="quantity">
          </span>
        </div>
        <div class="partial">
          <span>
            $${product.price * product.qty}
          </span>
        </div>
        <div >
          <button class = "delete-button btn-delete btn">
            Delete
          </button>
        </div>
      </div>

      </li>

    `;
  });
}

button.onclick = () => {
  const product = {};
  product.name = document.querySelector('#input-name').value;
  product.price = document.querySelector('#input-price').value;
  product.qty = 0;
  shopList.push(product);
  addProduct();
  document.querySelector('#input-name').value = '';
  document.querySelector('#input-price').value = '';

  document.querySelectorAll('.delete-button').forEach((button, idx) => {
    button.onclick = (e) => {
      shopList.splice(idx, 1);
      addProduct();
    };
  });

  document.querySelectorAll('.quantity').forEach((quantity, index) => {
    quantity.onchange = (element) => {
      shopList[index].qty = document.querySelectorAll('.quantity')[index].value;
      document.querySelectorAll('.partial')[index].innerHTML = `
      <span>
      $${shopList[index].price * shopList[index].qty}
      </span>
      `;
      totalCost = 0;
      for (let j = 0; j < shopList.length; j++) {
        totalCost += shopList[j].qty * shopList[j].price;
      }
    };
  });

  calculatePrices.onclick = () => {
    document.querySelector('#total').innerHTML = `
      <strong>Total Price: $${totalCost.toFixed(2)}</strong>
      `;
  };

};
