let cart = [];

/* ================= ADD TO CART ================= */

function addToCart(name, price, image) {

```
const existingItem = cart.find(item => item.name === name);

if (existingItem) {
    existingItem.quantity++;
} else {
    cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
    });
}

updateCart();

showNotification();
```

}

/* ================= UPDATE CART ================= */

function updateCart() {

```
const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const cartTotal = document.getElementById("cart-total");


if (cart.length === 0) {

    cartItems.innerHTML = `

        <div class="empty-cart">

            <i class="fa-solid fa-basket-shopping"></i>

            <h3>Your cart is empty</h3>

            <p>Add some delicious food!</p>

        </div>

    `;

} else {

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>Rs. ${item.price.toLocaleString()}</p>


                    <div class="quantity-controls">

                        <button onclick="changeQuantity(${index}, -1)">
                            -
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${index}, 1)">
                            +
                        </button>

                    </div>

                </div>


                <button class="remove-btn"
                    onclick="removeItem(${index})">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;
    });

}


const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
);


const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);


cartCount.textContent = totalItems;

cartTotal.textContent =
    "Rs. " + totalPrice.toLocaleString();
```

}

/* ================= CHANGE QUANTITY ================= */

function changeQuantity(index, amount) {

```
cart[index].quantity += amount;


if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

}


updateCart();
```

}

/* ================= REMOVE ITEM ================= */

function removeItem(index) {

```
cart.splice(index, 1);

updateCart();
```

}

/* ================= TOGGLE CART ================= */

function toggleCart() {

```
document
    .getElementById("cart-sidebar")
    .classList.toggle("active");


document
    .getElementById("cart-overlay")
    .classList.toggle("active");
```

}

/* ================= FAVORITE ================= */

function toggleFavorite(button) {

```
const icon = button.querySelector("i");


if (icon.classList.contains("fa-regular")) {

    icon.classList.remove("fa-regular");

    icon.classList.add("fa-solid");

} else {

    icon.classList.remove("fa-solid");

    icon.classList.add("fa-regular");

}
```

}

/* ================= FILTER FOOD ================= */

function filterFood(category, element) {

```
const cards =
    document.querySelectorAll(".food-card");


cards.forEach(card => {

    if (
        category === "all" ||
        card.dataset.category === category
    ) {

        card.style.display = "block";

    } else {

        card.style.display = "none";

    }

});


document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.classList.remove("active");

    });


element.classList.add("active");
```

}

/* ================= SEARCH FOOD ================= */

function searchFood() {

```
const searchValue =
    document
        .getElementById("search-input")
        .value
        .toLowerCase();


const cards =
    document.querySelectorAll(".food-card");


cards.forEach(card => {

    const foodName =
        card
            .querySelector("h3")
            .textContent
            .toLowerCase();


    if (foodName.includes(searchValue)) {

        card.style.display = "block";

    } else {

        card.style.display = "none";

    }

});
```

}

/* ================= NOTIFICATION ================= */

function showNotification() {

```
const notification =
    document.getElementById("notification");


notification.classList.add("show");


setTimeout(() => {

    notification.classList.remove("show");

}, 2500);
```

}

/* ================= CHECKOUT ================= */

function checkout() {

```
if (cart.length === 0) {

    alert(
        "Your cart is empty! Please add some delicious food first."
    );

    return;

}


alert(
    "🎉 Order placed successfully! Thank you for ordering from Umaima Eats Hub. Your delicious food will arrive soon!"
);


cart = [];


updateCart();


toggleCart();
```

}
