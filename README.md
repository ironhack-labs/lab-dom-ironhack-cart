![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# DOM | The Ironhack Cart

![shopping cart](https://i.imgur.com/9h7pFVP.jpg)

## Learning Goals

After this learning unit, you will be able to:

- Understand what the DOM is
- Manipulate the DOM to edit elements


## Introduction

One of the most common businesses on the Internet today are online shops. Websites like Amazon earn millions of dollars each year by selling all kinds of products. All these websites have something in common: they have a shopping cart.

Let's create the Ironhack Cart, where users will be able to add and remove products in their frontend shopping cart. Additionally, it will calculate the total price of each product based on how many of those the user has added and the total price of the everything in the cart.

In the started code you will find some CSS to start with that includes classes for the different types of buttons. Add the classes to the button tags you write in your HTML and they will be perfectly styled. 😉

## Requirements
- Fork this repo

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo on GitHub and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request title field, add your name and last names separated by a dash "-".

## Deliverables

Write your JavaScript organized in the provided filesystem. Submit everything.

### Iteration 1: Calculating for one product

We will start by looking at the HTML of our `#cart`:

```html
<table id="cart">
	<thead>
		<tr>
			<th>Product name</th>
			<th>Price unit</th>
			<th>Quantity</th>
			<th>Sub-total</th>
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

Every product will have the following markup, ie: a `tr` inside the `tbody`:

```html
		<tr class="product">
			<td class="name">
				<span>IronBubble-head</span>
			</td>
	
			<td class="pu">
				$<span>25.00</span>
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
				<button class="btn btn-delete">delete</button>
			</td>
		</tr>
```

#### Iteration 1.1: `updateSubtot`

The `updateSubtot` function will calculate the subtotal for a given product.

Complete the `updateSubtot` function that :
  - have 1 parameter: the `tr` element of the product (we can call it `$product`)
	- calculates the subtotal price, from :
		- the unit price HTML element of the product
		- the quantity HTML element of the product
	- updates the HTML with the new product's subtotal
	- returns the subtotal value

```js
function updateSubtot($product) {
  // Iteration 1.1
}
```

#### Iteration 1.2: Call `updateSubtot`

Now that `updateSubtot` is in place, call it from `calcAll` on your product:

```js
function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;
```

### Iteration 2: Add another product

Add a second product (a second `<tr class="product">`).

![](https://i.imgur.com/cbkHzZC.png)

Inside `calcAll`, modify your code so when `Calculate Prices` button is clicked, it now updates subtotal for every products.

### Iteration 3: Total

Now that you have each product's subtotals, you need to calculate the total price of the entire shopping cart. Once you have that number, you need to display the result in the HTML:

![](https://i.imgur.com/dJGyeK1.png)

Inside `calcAll` function:
 - sum each product's subtotal to compute the total.
 - Update the HTML with that total value

### Iteration 4: Deleting a product

Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

- Select all the "Delete" buttons
- For each button, assign a click event that will:
	- Select the wrapper `tr` that contains all the HTML for the product that should be deleted
	- Select the `tbody` parent that contains all of the product wrapper `tr`s
	- Use the function `removeChild` we saw in [DOM Manipulators](https://hackmd.io/MwBgRgHAjATArMAtANjsgxogLAU3QQ0QmQHZlEdgox8BOE9EsAMzCA==)

:bulb: Use `e.currentTarget` to access the "Delete" button that was just clicked and select the parent node of an HTML element with `parentNode`.

### Iteration 5: Creating new products

For the last iteration, allow the user to create new products for the shop.

Uncomment the `tfoot` in the markup:
```html
   …
    </tbody>
    <!-- <tfoot>
      <tr class="new">
        <td>
          <input type="text"/>
        </td>
        <td>
          <input type="number" min="0"/>
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

Assign a click event to the create button that will:
	- Get the data from the `input`s
	- Create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

:warning: Make sure that the new product you added has the same behavior than the other products:
- You should be able to calculate the product's total price
- That product's price should be included in the total price of the entire Shopping Cart
- You should be able to delete the product
