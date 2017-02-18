![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# DOM | The Ironhack Cart

## Learning Goals

After this learning unit, you will be able to:

- Understand what the DOM is
- Manipulate the DOM to edit elements


## Introduction

One of the most common business in Internet nowadays are online shops. Websites like Amazon win each year millions of dollars selling all kind of articles to their users. All this websites have something in common: they have a shopping cart.

We will create a the Ironhack Cart, where the users will be able to add and remove products to a shopping cart. Besides, we will calculate the total price of items for each product and the total price of the whole Shopping Cart.

## Exercise

## Requirements
- fork this repo

- Use a normalizer to avoid differences between browsers styles. Here you have one CDN:
	https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css
- Use at least 3 `onclick` events
- Use at least once `getElementById`
- Use at least once `getElementsByTagName`
- Use at least once `getElementsByClassName`

## Submission

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Write your JavaScript organized in the provided filesystem. Submit everything.

### Iteration 1: Creating one product

We will start by creating the HTML for one of your products. Its appearence will be:

![](https://i.imgur.com/gDZ1Lj0.png)

Every product will have:

- A div with an span, showing the product name
- A div with an span, showing the cost of one unit
- A div with one label and one input, where the user will indicate how many units will buy
- A div with an span, showing the total price of those items. This is the result of calculating the number of items multiplied by the price of one product. The default total price is 0
- A div with a delete button, to remove the product from the list

#### Calculating the total price

Once you have the HTML and CSS prepared, use JavaScript to retrieve the data you need to calculate the total price and change the value in the DOM:

- Create a click event for the `Calculate Prices` button
- This event will execute a function that:
	* Retrieves the unit price of the product
	* Retrieves the quantity of items desired
	* Calculates the total price based on this data
	* Updates the total price in the DOM

### Iteration 2: Add another product

Add a second product.

![](https://i.imgur.com/Fe48iGO.png)

When you click on the `Calculate Prices` button, all the prices should update its value at the same time.

### Iteration 3: Calculating the total price

We will sum all the prices of each product to calculate the total price of the shopping cart. Then, show the result in the DOM.

![](https://i.imgur.com/u607NQ0.png)

Create a new `div` below the `Calculate Prices` button. This `div` will have an `h2` element showing:

`<h2>Total Price: <span>$0</span></h2>`

Also, we need to create a function that will:

- Select the totals for each product
- Sum all the elements selected in the previous step to calculate the total price
- Show the total price in the DOM

### Iteration 4: Deleting a product

We will create a click event binded to the Delete buttons to delete a product from the list. To do this, we need to:

- Select all the `Delete` buttons
- Assign to them a click event for them that will:
	- Select the div that contains the HTML element of the product we want to delete
	- Select the div that contains the product list
	- Use the function `removeChild` we saw in [DOM Manipulators](https://hackmd.io/MwBgRgHAjATArMAtANjsgxogLAU3QQ0QmQHZlEdgox8BOE9EsAMzCA==)

:::success
:bulb: Remember it is possible to track which button was clicked by the `e.currentTarget` function, and select the parent node of an HTML element with `parentNode`.
:::

### Iteration 5: Creating new products

We will create dynamically new products for the shop. The form will look like this:

![](https://i.imgur.com/FGVUuHt.png)

We have two inputs that represent the name and the unit price of the new product. At the end, we will add a button to create that product.

- Create two input to let the user set up the new product data.
- Create a button. This button will have assigned a click event that will:
	- Get the data from the inputs.
	- Create a new product row with the data we stored.

:::warning

:warning: Be sure the new product you added has the same behavior than the previous products.
- You should be able to calculate the product total price
- You should be able to sum the product total price to the Shopping Cart total price
- You should be able to delete the product

:::
