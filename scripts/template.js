function renderDishesTemplate(category, i) {
    return /*html*/ `
        <article>
            <div class="dish_image">
                <img src="./${dishes[category][i].path}" alt="Image of ${dishes[category][i].name}">
            </div>
            <div class="dish_info">
                <div class="dish_title">
                    <h3>${dishes[category][i].name}</h3>
                    <p>${dishes[category][i].description}</p>
                </div>
                <div class="dish_price_add">
                    <p>${numberToCurrency(dishes[category][i].price)}</p>
                    <button class="add_button" onclick="addToCart('${category}', '${i}')">Add to basket</button>
                </div>
            </div>
        </article>
    `;
}

function renderEmptyBasketTemplate() {
    return /*html*/ `
        <div class="empty_message">
            <p class="empty_note">
                Nothing here yet.<br />Go ahead and choose something
                delicious!
            </p>
            <img
                class="empty_basket"
                src="./assets/icons/basket_icon_empty.svg"
                alt="Empty Basket"
            />
        </div>
    `;
}

function renderBasketContentTemplate(j) {
    return /*html*/ `
        <div class="item_card">
            <div class="menu_title">
                <p><span id="title_amount${j}">${basket[j].amount}</span> x ${basket[j].name}</p>
            </div>
            <div class="menu_info">
                <div class="menu_amount">
                    <button class="trash_btn" onclick="removeItem(${j})">
                        <img src="./assets/icons/trash_icon.svg" alt="Remove Icon">
                    </button>
                    <button onclick="decreaseAmount(${j})">-</button>
                    <p id="item_amount${j}">${basket[j].amount}</p>
                    <button onclick="increaseAmount(${j})">+</button>
                </div>
                <p id="item_price${j}"></p>
            </div>
        </div>
    `;
}

function renderBasketCheckoutTemplate() {
    return /*html*/ `
        <div class="subtotal_box">
            <div class="subtotal">
                <p>Subtotal</p>
                <p id="basket_subtotal"></p>
            </div>
            <div class="delivery">
                <p>Delivery fee</p>
                <p id="basket_delivery"></p>
            </div>
        </div>
        <div class="total_box">
            <div class="total">
                <p>Total</p>
                <p id="basket_total"></p>
            </div>
            <button class="order_btn" onclick="placeOrder()">Buy now (<span id="checkout_btn"></span>)</button>
        </div>
    `;
}

function orderConfirmTemplate() {
    return /*html*/ `
        <div onclick="bubblingProtection()">
            <button onclick="closeDialog()">
                <img src="./assets/icons/close_icon.svg" alt="Close Button">
            </button>
            <img src="./assets/icons/order_confirmed_truck.svg" alt="Delivery Truck">
            <h5>Order confirmed!</h5>
            <p>Your food is on the way!</p>
        </div>
    `;
}
