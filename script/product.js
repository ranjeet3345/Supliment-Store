
const dummyProducts = [
  { id: 1, name: 'Protein X', price: 49.99 },
  { id: 2, name: 'Vitamin C', price: 14.99 },
  { id: 3, name: 'Omega 3', price: 24.99 },
];

const productList = document.getElementById("productList");
dummyProducts.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(dummyProducts.find(p => p.id === id));
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}

/* scripts/cart.js */
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById("cartItems");
let total = 0;
cartItems.forEach(item => {
  const div = document.createElement('div');
  div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
  container.appendChild(div);
  total += item.price;
});
document.getElementById("totalAmount").innerText = total.toFixed(2);

function checkout() {
  alert('This is a demo checkout. Thank you!');
  localStorage.removeItem('cart');
  window.location.href = 'index.html';
}