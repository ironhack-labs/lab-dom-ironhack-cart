![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# DOM | The Ironhack Cart

![shopping cart](https://i.imgur.com/s2Qxc9Z.jpg)

## Introduction

One of the most common businesses on the Internet today are online shops. Websites like Amazon earn millions of dollars each year by selling all kinds of products. All of these websites have something in common: they have a shopping cart.

Let's create the Ironhack Cart, where users will be able to add and remove products in their frontend shopping cart. Additionally, it will calculate the total price of each product based on how many of those the user has added and the total price of the everything in the cart.

In the starter-code you will find some CSS to start with that includes classes for the different types of buttons. Add the classes to the button tags you write in your HTML and they will be perfectly styled. 😉

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

Solve the Lab by writing all of your JavaScript in `starter-code/js/index.js`.

### Iteration 1: Calculating a total price for one product

We will start by looking at the HTML of our `#cart`:

```html
<table id="cart">
  <thead>
    <tr>
      <th>Product name</th>
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
</table>
```

![](https://i.imgur.com/ZXjbkVG.png)

Every product will have the following markup, that is, a `tr` with the class `product` inside of `tbody`:

```html
<tr class="product">
  <td class="name">
    <span>IronBubble-head</span>
  </td>
  <td class="pu">$<span>25.00</span></td>
  <td class="qty">
    <input type="number" value="0" min="0" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="rm">
    <button class="btn btn-remove">Delete</button>
  </td>
</tr>
```

#### Iteration 1: `updateSubtotal`

Each of our products will have a price and cart quantity. They should, therefore, also have a subtotal price that corresponds to the product of those values.

Complete the function named `updateSubtotal` that will calculate the subtotal for any given product and update the value for the corresponding product.

As a single argument, it takes a DOM node that corresponds to a single `tr` element with a `product` class. In the boilerplate code we included in the script, we called it `$product`.

When invoked, the function gets the value of the unit price for the product it was called with, it's quantity, multiplies both and updates the span in the table cell `td.subtotal` with said value. It then returns the subtotal value.

```js
// Iteration 1.1
function updateSubtotal($product) {
  // ...
}
```

#### Iteration 2: `calculateAll`

We expect to have more than one product on our cart. As such, we'll use `calculateAll` to trigger the update of subtotals for every product.

Complete the function named `calculateAll`. Its purpose, for now, is to call the function `updateSubtotal` with every `tr.product` DOM node in the `table#card`.

```js
// Iteration 1.2
function calculateAll() {
  // ...
}

$calc.addEventListener('click', calculateAll);
```

To test wether `calculateAll` is working as expected, let's add a new product to our `index.html` file, by duplicating the `tr` with the class `product`, renaming the product inside and changing the product price.

![](https://i.imgur.com/cbkHzZC.png)

### Iteration 3: Total

Our calculation functionality is still incomplete. The subtotal for each product is being updated but the total remains untouched.

At the end of the `calculateAll` function, compute the total price for the products in your cart by summing all of the subtotals returned by `updateSubtotal` when it was called with each product.

Lastly, display that value on your DOM.

![](https://i.imgur.com/dJGyeK1.png)

## BONUS ITERATIONS

### Iteration 4: Deleting a product

Users should be able to remove products from their carts. For that purpose, every product row in our table has a "remove" button at the end.

For that purpose, lets declare a function named `addProductRemoveListener` that takes as a single argument a DOM node referencing a product "remove" button, selects its parent `tr` and removes it from the DOM.

On page load, that is, inside a callback given to the `load` event listener on the document, ensure that whenever a "remove" button is clicked the corresponding product is removed from the table.

We would recommend that you query the document for all of the "remove" buttons, and call `addProductRemoveListener` on each node.

💡 Tips: To access the element an event was fired on, you can reference `e.currentTarget`. To remove a node from the DOM, you need to access its parent node and call [`removeChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) on it. You can access the parent of a DOM node from its property `parentNode`.

### Iteration 5: Creating new products

To finish it off, we'll allow the user to add a custom product to their cart.

Uncomment the `tfoot` on the `index.html` file:

```html
<table>
  <tbody>
    <!-- ... -->
  </tbody>
  <!-- <tfoot>
    <tr class="new">
      <td>
        <input placeholder="Product Name" />
      </td>
      <td>
        <input type="number" min="0" placeholder="Product Price" />
      </td>
      <td></td>
      <td></td>
      <td>
        <button id="create" class="btn">Create</button>
      </td>
    </tr>
  </tfoot> -->
</table>
```

![](https://i.imgur.com/hFKb7Fa.png)

Those two inputs represent the name and the unit price of the new product. Then there's the "Create" button that the user needs to click to actually add the new product to the list.

Assign a click event to the create button that will: - get the data from the `input`s, - create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

:warning: Make sure that the new product you added has the same behavior than the other products:

- You should be able to calculate the product's total price.
- That product's price should be included in the total price of the entire Shopping Cart.
- You should be able to remove the product.

When the product creation is finalized, please, clear the input fields in the creation form.

**Happy coding! 💙**
