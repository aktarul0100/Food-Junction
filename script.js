const phoneNumber = "916000586270";

function generateWhatsAppLink(itemName, portion, price) {

    const phoneNumber = "916000586270"; // apna number (without +)

  const message = `Hello Food Junction 👋

I would like to place an order:

• Item: ${itemName}
• Portion: ${portion}
• Price: ${price}

Please confirm availability and total amount.

Thank you 😊`;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

const menuData = {
    tea: [
        { name: "Milk Tea", full: "₹20", img: "images/milk-tea.jpg", rating: "4.2", time: "10 mins", bestseller: "fasse"},
        { name: "Black Tea", full: "₹15", img: "images/black-tea.jpg", rating: "4.0", time: "8 mins", bestseller: "false"},
        { name: "Green Tea", full: "₹30", img: "images/green-tea.jpg", rating: "4.5", time: "10 mins", bestseller: "false" },
        { name: "Cold Coffee", half: "₹60", full: "₹79", img: "images/cold-coffee.jpg", rating: "4.6", time: "10 mins", bestseller: "false" }
    ],
    biryani: [
        { name: "Chicken Biryani", half: "₹99", full: "₹149", img: "images/chicken-biryani.jpg", rating: "4.5", time: "25 mins", bestseller: "true" },
        { name: "Egg Biryani", half: "₹79", full: "₹119", img: "images/egg-biryani.jpg", rating: "4.4", time: "25 mins", bestseller: "true" },
        { name: "Mutton Biryani", half: "₹149", full: "₹219", img: "images/mutton-biryani.jpg", rating: "4.8", time: "25 mins", bestseller: "true" },
        { name: "Veg Biryani", half: "₹89", full: "₹129", img: "images/veg-biryani.jpg", rating: "4.4", time: "25 mins", bestseller: "true" }
    ],
    momo: [
        { name: "Chicken Momos", half: "₹69", full: "₹99", img: "images/chicken-momo.jpg", rating: "4.5", time: "15 mins", bestseller: "true" },
        { name: "Fried Momos", half: "₹79", full: "₹109", img: "images/fried-momo.jpg", rating: "4.7", time: "20 mins", bestseller: "true" },
        { name: "Tandoori Momos", half: "₹89", full: "₹129", img: "images/tandoori-momo.jpg", rating: "4.6", time: ":20 mins", bestseller: "true" },
        { name: "Veg Momos", half: "₹59", full: "₹89", img: "images/veg-momo.jpg", rating: "4.5", time: "15 mins", bestseller: "true" }
    ],
    chicken: [
        { name: "Chicken Pakora", half: "₹79", full: "₹129", img: "images/chicken-pakora.jpg", rating: "4.5", time: "15 mins", bestseller: "false" },
        { name: "Chicken Fry", half: "₹99", full: "₹159", img: "images/chicken-fry.jpg", rating: "4.6", time: "20 mins", bestseller: "true" },
        { name: "Chicken Wings", half: "₹119", full: "₹179", img: "images/chicken-wings.jpg", rating: "4.4", time: "15 mins", bestseller: "true" },
        { name: "Chicken Roll", half: "₹69", full: "₹99", img: "images/chicken-roll.jpg", rating: "4.6", time: "10 mins", bestseller: "false" }
    ],
    snacks: [
        { name: "French Fries", half: "₹49", full: "₹69", img: "images/french-fries.jpg", rating: "4.6", time: "10 mins", bestseller: "false" },
        { name: "Paneer Roll", half: "₹59", full: "₹89", img: "images/paneer-roll.jpg", rating: "4.4", time: "10 mins", bestseller: "false" },
        { name: "Veg Pakora", half: "₹39", full: "₹59", img: "images/veg-pakora.jpg", rating: "4.6", time: "10 mins", bestseller: "false" },
        { name: "Samosa", full: "₹20", img: "images/samosa.jpg", rating: "4.8", time: "10 mins", bestseller: "false" }
    ],
    drinks: [
        { name: "Cold Drink", full: "₹ (Depend)", img: "images/cold-drink.jpg", rating: "4.5", time: "10 mins", bestseller: "false" },
        { name: "Lassi", half: "₹40", full: "₹60", img: "images/lassi.jpg", rating: "4.7", time: "15 mins", bestseller: "false" },
        { name: "Mango Shake", half: "₹50", full: "₹80", img: "images/mango-shake.jpg", rating: "4.5", time: "15 mins", bestseller: "false" },
        { name: "Chocolate Shake", half: "₹60", full: "₹90", img: "images/chocolate-shake.jpg", rating: "4.6", time: "15 mins", bestseller: "false" }
    ]
};

const container = document.getElementById("menu-items");
const buttons = document.querySelectorAll(".categories button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        showMenu(this.getAttribute("data-category"));
    });
});
function showMenu(category) {

    container.innerHTML = "";

    menuData[category].forEach(item => {

        const row = document.createElement("div");
        row.classList.add("menu-row");

       let priceHTML = "";

// Half price
if (item.half) {
    priceHTML += `
    <div class="price-row">
        <span>Half: ${item.half}</span>
        <a href="${generateWhatsAppLink(item.name, 'Half', item.half)}"
           target="_blank"
           class="order-btn">
           Order Half (WhatsApp)
        </a>
    </div>
    `;
}

// Full price
if (item.full) {
    priceHTML += `
    <div class="price-row">
        <span>Full: ${item.full}</span>
        <a href="${generateWhatsAppLink(item.name, 'Full', item.full)}"
           target="_blank"
           class="order-btn">
           Order Full (WhatsApp)
        </a>

<a href="#" onclick="addToCart('${item.name}', '${item.full || item.half}')" class="order-btn">
    Add to Cart
</a>

    </div>
    `;
}



        row.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <div class="item-name">
    ${item.name}
    <span class="rating">⭐ ${item.rating}</span>
    ${item.bestseller ? `<span class="bestseller">Best Seller</span>` : ""}
</div>

<div class="delivery-time">
    ⏱ ${item.time}
</div>
                ${priceHTML}
            </div>
        `;

        container.appendChild(row);
    });
}

showMenu("biryani");
buttons[1].classList.add("active");

document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: parseInt(price.replace("₹","")) });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}

document.getElementById("cartBtn").onclick = function() {
    document.getElementById("cartModal").style.display = "flex";
};

document.getElementById("closeCart").onclick = function() {
    document.getElementById("cartModal").style.display = "none";
};

ddocument.getElementById("checkoutBtn").onclick = function() {

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const address = document.getElementById("custAddress").value;

    if(!name || !phone || !address){
        alert("Please fill all delivery details!");
        return;
    }

    const order = {
        id: Date.now(),
        customer: name,
        phone: phone,
        address: address,
        items: cart,
        total: cart.reduce((sum,item)=> sum+item.price,0),
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order Placed Successfully 🎉");

    cart = [];
    updateCart();
    document.getElementById("cartModal").style.display = "none";
};

document.getElementById("checkoutBtn").addEventListener("click", function () {

    const name = document.querySelector("input[type='text']").value;
    const phone = document.querySelector("input[type='tel']").value;
    const address = document.querySelector("textarea").value;

    if (!name || !phone || !address) {
        alert("Please fill all details");
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    const order = {
        id: Date.now(),
        customer: name,
        phone: phone,
        address: address,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toLocaleString()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("Order Confirmed Successfully!");

    location.reload();
});