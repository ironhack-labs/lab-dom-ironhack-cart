![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# DOM | The Ironhack Cart

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

- Use a normalizer to not have to worry about the differences between browser styles. Here's normalize.css from a CDN:
	https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css
- Use at least 3 `onclick` events
- Use at least one `getElementById`
- Use at least one `getElementsByTagName`
- Use at least one `getElementsByClassName`

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

### Iteration 1: Creating one product

We will start by creating the HTML for one of your products. It should look like this:

![](https://i.imgur.com/gDZ1Lj0.png)

Every product will have:

- A wrapper div that contains all the HTML for that product.
- A div with a span, showing the product name.
- A div with a span, showing the cost of one unit.
- A div with one label and one input, where the user will indicate how many units they will buy.
- A div with a span, showing the total price for this product. This number should be the result of multiplying the amount of units multiplied by the price of one unit of that product. The default total price should be 0.
- A div with a delete button, to remove the product from the list.

#### Calculating the total price for the product

Once you have the HTML and CSS ready, use JavaScript and functions of the `document` object to retrieve the data you need to calculate the total price for that product. Change the value of the element in the DOM that displays the total price:

- Create a click event for the `Calculate Prices` button
- This event will execute a function that:
	* Retrieves the unit price of the product
	* Retrieves the quantity of items desired
	* Calculates the total price based on this data
	* Updates the total price in the DOM

### Iteration 2: Add another product

Add a second product.

![](https://i.imgur.com/Fe48iGO.png)

When you click on the `Calculate Prices` button, the total prices for both products should update their values based on each quantity specified.

### Iteration 3: Calculating the total price of all products

Now that you have each product's total price, you need to calculate the total price of the entire shopping cart. Once you have that number, you need to display the result in the DOM.

![](https://i.imgur.com/u607NQ0.png)

Create a new `div` below the `Calculate Prices` button. This `div` should have an `h2` element like this one:

`<h2>Total Price: <span>$0</span></h2>`

Now, as part of your "Calculate Prices" function:

- Select the elements that contain the each product's total price.
- Loop through the elements selected in the previous step, retrieve each of their total prices and add them together to get the total price of the entire shopping cart.
- Show the total price in the DOM.

### Iteration 4: Deleting a product

Associate the "Delete" buttons to click events so that when you click one, it deletes that product from the list. Steps to follow:

- Select all the "Delete" buttons
- For each button, assign a click event that will:
	- Select the wrapper div that contains all the HTML for the product that should be deleted
	- Select the parent that contains all of the product wrapper divs
	- Use the function `removeChild` we saw in [DOM Manipulators](https://hackmd.io/MwBgRgHAjATArMAtANjsgxogLAU3QQ0QmQHZlEdgox8BOE9EsAMzCA==)

:bulb: Use `e.currentTarget` to access the "Delete" button that was just clicked and select the parent node of an HTML element with `parentNode`.

### Iteration 5: Creating new products

For the last iteration, allow the user to create new products for the shop. You'll add inputs that look like this:

![](https://i.imgur.com/FGVUuHt.png)

Those two inputs represent the name and the unit price of the new product. Then there's the "Create" button that the user needs to click to actually add the new product to the list.

- Add two inputs to let the user enter the new product data.
- Add a "Create" button. Assign it a click event that will:
	- Get the data from the inputs.
	- Create a new product row with the data from the inputs. The structure of the new product should be the same as in Iteration #1.

:warning: Make sure that the new product you added has the same behavior than the other products:
- You should be able to calculate the product's total price
- That product's price should be included in the total price of the entire Shopping Cart
- You should be able to delete the product
