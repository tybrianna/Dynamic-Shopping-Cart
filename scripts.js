const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Function to add product to list
addProductButton.addEventListener("click", () => {
    const name = productNameInput.value;
    const price = parseFloat(productPriceInput.value);
  if (!name || isNaN(price)) {
    alert("Enter product name to add to list");
    return;
  }

//   
  const li = document.createElement("li");
  li.dataset.price = price;

  li.innerHTML = `
    ${name} - $${price.toFixed(2)}
    <button>Remove</button>
  `;

  li.querySelector("button").addEventListener("click", removeItem);

  cart.appendChild(li);

  updateTotalPrice(price);

  productNameInput.value = "";
  productPriceInput.value = "";
});