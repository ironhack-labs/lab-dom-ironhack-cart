class Merch {
  constructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.total = (price * amount).toFixed(2);
  }
}
// UI

// The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

class UI {
  static displayMerch() {
    const MerchInStore = [
      {
        name: 'IronBubble-Head',
        price: 25,
        amount: 1,
        total: (25).toFixed(2)
      }
    ];

    const merch = MerchInStore;

    // add a book to the list
    merch.forEach(item => UI.addItemToList(item));
  }
  static addItemToList(item) {
    const list = document.getElementById('item-list');

    const row = document.createElement('tr');
    row.classList.add('products');
    row.innerHTML = `
    <td>${item.name}</td>
    <td>$${item.price}</td>
    <td>${item.amount}
    </td>
    <td>$<span class='item-total'>${item.total}</span></td>
    <td><button class='btn delete'>delete</button></td>
    `;

    list.appendChild(row);
  }
  // Delete an item
  static deleteItem(e) {
    if (e.classList.contains('delete')) {
      e.parentElement.parentElement.remove();
    }
  }
  // Calculate total
  static calculatePrices(e) {
    const all = document.querySelectorAll('.item-total');
    let result = 0;
    all.forEach(a => (result += +a.innerHTML));
    e.total = (e.price * e.amount).toFixed(2);

    document.getElementById('total-price').innerHTML = '$' + result.toFixed(2);
  }
  // clear the input
  static clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qty').value = '';
  }
}
// display items
document.addEventListener('DOMContentLoaded', UI.displayMerch);
// add a new item
document.getElementById('item-form').addEventListener('submit', e => {
  // prevent default submit
  e.preventDefault();
  // get form values
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const qty = document.getElementById('qty').value;

  // create new item
  const item = new Merch(name, price, qty, price * qty);
  // Add item
  UI.addItemToList(item);
  // clear fields
  UI.clearFields();
});

// delete item
// target the list and remove the parent
document
  .getElementById('item-list')
  .addEventListener('click', e => UI.deleteItem(e.target));

// calculate total
document
  .getElementById('calc')
  .addEventListener('click', e => UI.calculatePrices(e.target));

console.log(document.getElementById('calc'));
