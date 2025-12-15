let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-list");
    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        list.innerHTML += `
            <li>
                ${item.name} - ${item.price.toLocaleString()}đ
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = total.toLocaleString();
    document.getElementById("cart-count").innerText = cart.length;
}

renderCart();
