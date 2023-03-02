// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotalDisplay = product.querySelector(".subtotal span");
  const subtotal = price.innerHTML * quantity.value;

  subtotalDisplay.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");
  let totalSum = 0;
  products.forEach((element) => {
    totalSum += updateSubtotal(element);
  });
  const totalDisplay = document.querySelector("#total-value span");
  totalDisplay.innerHTML = totalSum;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  console.log(target.parentNode.parentNode.parentNode);
  const table = target.parentNode.parentNode.parentNode;
  const product = target.parentNode.parentNode;
  table.removeChild(product);
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // console.log("creating a new product");
  // to make my life easier, I’ve added IDs to the inputs
  const productName = document.getElementById("name-input");
  const productPrice = document.getElementById("price-input");

  let product = document.createElement("tr");
  product.classList.add("product");

  // The template for the product is organized in an array.
  // A new cell can be added just by adding to the array.
  const cells = [
    {
      tag: "td",
      classList: "name",
      attributes: [],
      innerHTML: "",
      children: [
        {
          tag: "span",
          classList: "",
          attributes: [],
          innerHTML: productName.value,
          children: [],
        },
      ],
    },
    {
      tag: "td",
      classList: "price",
      attributes: [],
      innerHTML: "$",
      children: [
        {
          tag: "span",
          classList: "",
          attributes: [],
          innerHTML: productPrice.value,
          children: [],
        },
      ],
    },
    {
      tag: "td",
      classList: "quantity",
      attributes: [],
      innerHTML: "",
      children: [
        {
          tag: "input",
          classList: "",
          attributes: [
            ["type", "number"],
            ["value", "0"],
            ["min", "0"],
            ["placeholder", "Quantity"],
          ],
          innerHTML: "",
          children: [],
        },
      ],
    },
    {
      tag: "td",
      classList: "subtotal",
      attributes: [],
      innerHTML: "$",
      children: [
        {
          tag: "span",
          classList: "",
          attributes: [],
          innerHTML: "0",
          children: [],
        },
      ],
    },
    {
      tag: "td",
      classList: "action",
      attributes: [],
      innerHTML: "",
      children: [
        {
          tag: "button",
          classList: "btn btn-remove",
          attributes: [],
          innerHTML: "Remove",
          children: [],
        },
      ],
    },
  ];
  createComposedElement(product, cells);

  // Now we can select the remove button
  const btn = product.querySelector("button.btn-remove");
  // and add an eventListener to it.
  btn.addEventListener("click", removeProduct);

  document.querySelector("#cart tbody").appendChild(product);
  productName.value = "";
  productPrice.value = 0;
}

function createComposedElement(parent, arr) {
  // receives a parent HTML element
  // creates recursively HTML elements from an array of objects
  // adds the elements to the parent
  // returns the parent

  arr.forEach((ele) => {
    const htmlElement = document.createElement(ele.tag);
    console.log(htmlElement);

    if (ele.attributes.length > 0) {
      ele.attributes.forEach((attr) => {
        htmlElement.setAttribute(attr[0], attr[1]);
      });
    }
    if (ele.classList.length > 0) {
      htmlElement.classList = ele.classList;
    }
    if (ele.innerHTML.length > 0) {
      htmlElement.innerHTML = ele.innerHTML;
    }
    if (ele.children.length > 0) {
      // if the ele has children this funtion calls itself
      // by passing htmlElement as parent
      // and ele.children as array
      createComposedElement(htmlElement, ele.children);
    }
    parent.appendChild(htmlElement);
    console.log(parent, htmlElement);
  });
  return parent;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn.btn-remove");
  removeButtons.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
