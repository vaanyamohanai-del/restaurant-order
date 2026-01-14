const urlParams = new URLSearchParams(window.location.search);
const tableNo = urlParams.get('table') || 1;
document.getElementById("tableNo").innerText = tableNo;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  cart.push({ id, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added");
}

function goToCart() {
  window.location.href = "cart.html?table=" + tableNo;
}
