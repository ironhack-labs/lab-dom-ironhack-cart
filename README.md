![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | The IronCart

![shopping cart](https://i.imgur.com/s2Qxc9Z.jpg)


## Introduction

Ecommerce has proven to be a big game-changer in the 21st century economy. As one of the largest sales channels, second only to physical retail, ecommerce [is expected](https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/) to be responsible for 4.9 trillion USD in worldwide sales by the year 2021.

Ecommerce is, however, a highly competitive business, and building a positive user experience is crucial to retaining customers and improving conversions. As such, it's not uncommon for companies make a big investment in optimizing the purchase flow on their ecommerce platforms.

One of the largest components of this experience is **the shopping cart**.

In this Lab, we'll be building the **Ironhack Cart**, a shopping cart for the unofficial Ironhack merchandising store. Visitors should be able to add, delete, and modify the quantity of items that they want to purchase. Additionally, the cart should reflect the subtotal and total price for the items added.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Deliverables

In the `starter-code` directory you'll find everything you need to get started. We added the initial necessary markup in `index.html`, and some basic stylings that you will not need to change in the `css/style.css` file. Most of what you're required to edit is on the `js/index.js` file.

### Iteration 1: `updateSubtotal`

Let's start by looking at the HTML of our `#cart` table:

```html
<table id="cart">
  <thead>
    <tr>

      <th>Product Name</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>

      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="product">
      <!-- ... -->
    </tr>
  </tbody>
  <!-- ... -->
</table>
```

![](https://i.imgur.com/zCWQYg2.png)

For every product in our `#cart`, you should have a `tr` with the class `product` (that goes inside of `tbody`):

```html
<tr class="product">
  <td class="name">
    <span>Ironhack Rubber Duck</span>
  </td>
  <td class="price">$<span>25.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
```

Each of our products will have a **price** and **cart quantity**. They should, therefore, also have a **subtotal price** that corresponds to the _multiplication_ of those values.

Complete the function named `updateSubtotal` that will **calculate the subtotal** for any given product, **update the subtotal value** for that same product in the DOM and return the **subtotal value**.

As a single argument, the function should take a **DOM node** that corresponds to a single `tr` element with a `product` class. In the boilerplate code included, we called it `$product`.


```js
function updateSubtotal($product) {
  // ...
}
```

💡 Tip: You might have a hard time testing your solution to this iteration, since there's nothing triggering the execution of `updateSubtotal` for now. To address that, temporarily, paste and uncomment the following code into `calculateAll`. Now, whenever you click on the "Calculate Prices" button, the subtotal for your product should be updated.

```js
// For development testing purposes, paste the following code inside of `calculateAll`:
// const $singleProduct = document.querySelector('.product');
// updateSubtotal($singleProduct);
// End of test
```

### Iteration 2: `calculateAll`

We expect to have more than one product on our cart. As such, we'll use `calculateAll` to trigger the update of subtotals for every product.

Complete the function named `calculateAll`. Its purpose, for now, is to call the function `updateSubtotal` with every `tr.product` DOM node in the `table#cart`.

```js
function calculateAll() {
  // ...
}

$calculateTrigger.addEventListener('click', calculateAll);
```

To test wether `calculateAll` is working as expected, let's add a new product to our `index.html` file, by duplicating the `tr` with the class `product`, renaming the product inside and changing the product price.

![](https://i.imgur.com/Pv4NmR8.png)

### Iteration 3: Total

Our calculation functionality is still incomplete. The subtotal for each product is being updated but the total value remains untouched.

At the end of the `calculateAll` function, compute the total price for the products in your cart by summing all of the subtotals returned by `updateSubtotal` when it was called with each product.

Lastly, display that value on your DOM.

![](https://i.imgur.com/SCtdzMd.png)

## Bonus Iterations

### Iteration 4: Removing a product


Users should be able to remove products from their carts. For that purpose, every product row in our table has a "Remove" button at the end.

To achieve this, lets query the document for all "Remove" buttons, and add a `click` event listener to each, passing a named function `productRemoveListener` as the callback argument for `addEventListener`.

Now, lets declare the aforementioned function named `productRemoveListener` that expects the event as a single argument, and that is going to trigger the removal of the corresponding product from the cart.

💡 Tip: To access the element an event was fired on, you can reference `event.currentTarget`. To remove a node from the DOM, you need to access its parent node and call [`removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) on it. You can access the parent of a DOM node from its property `parentNode`.

### Iteration 5: Creating new products

To finish it off, we'll allow the user to add a custom product to their cart.

Uncomment the `tfoot` element and its children from the `index.html` file:

```html
<table>
  <tbody>
    <!-- ... -->
  </tbody>
  <!-- <tfoot>
    <tr class="create-product">
      <td>
        <input type="text" placeholder="Product Name" />
      </td>
      <td>
        <input type="number" min="0" value="0" placeholder="Product Price" />
      </td>
      <td></td>
      <td></td>
      <td>
        <button id="create" class="btn">Create Product</button>
      </td>
    </tr>
  </tfoot> -->
</table>
```

![](https://i.imgur.com/J8aserm.png)

The two inputs inside of `tfoot` represent the name for the new product and the unit price, respectively. The "Create Product" button should add a new product to the cart when triggered.

Add a `click` event handler to the "Create Product" that will take a function named `createProduct` as a callback.


In `createProduct` you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.

Remember, the new product should look undistinguished and behave as any of the products previously included in the cart. As such, one should be able to calculate its subtotal when the "Calculate All" button is clicked, and remove the product.

When the product creation is finalized, please, clear the input fields in the creation form.

**Happy coding! 💙**