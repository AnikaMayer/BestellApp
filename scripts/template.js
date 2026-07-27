function renderBurgerTemplate(i) {
    return /*html*/ `
            <article>
                <div class="dish_image">
                    <img src="./${dishes.burger[i].path}" alt="Image of ${dishes.burger[i].name}">
                </div>
                <div class="dish_info">
                    <div class="dish_title">
                        <h3>${dishes.burger[i].name}</h3>
                        <p>${dishes.burger[i].description}</p>
                    </div>
                    <div class="dish_price_add">
                        <p id="price_currency${i}">${numberToCurrency(dishes.burger[i].price)}</p>
                        <button class="add_button" onclick="moveBurgerToBasket(${i})">Add to basket</button>
                    </div>
                </div>
            </article>
        `;
}

function renderPizzaTemplate(i) {
    return /*html*/ `
            <article>
                <div class="dish_image">
                    <img src="./${dishes.pizza[i].path}" alt="Image of ${dishes.pizza[i].name}">
                </div>
                <div class="dish_info">
                    <div class="dish_title">
                        <h3>${dishes.pizza[i].name}</h3>
                        <p>${dishes.pizza[i].description}</p>
                    </div>
                    <div class="dish_price_add">
                        <p id="price_currency${i}">${numberToCurrency(dishes.pizza[i].price)}</p>
                        <button class="add_button" onclick="movePizzaToBasket(${i})">Add to basket</button>
                    </div>
                </div>
            </article>
        `;
}

function renderSaladTemplate(i) {
    return /*html*/ `
            <article>
                <div class="dish_image">
                    <img src="./${dishes.salad[i].path}" alt="Image of ${dishes.salad[i].name}">
                </div>
                <div class="dish_info">
                    <div class="dish_title">
                        <h3>${dishes.salad[i].name}</h3>
                        <p>${dishes.salad[i].description}</p>
                    </div>
                    <div class="dish_price_add">
                        <p id="price_currency${i}">${numberToCurrency(dishes.salad[i].price)}</p>
                        <button class="add_button" onclick="moveSaladToBasket(${i})">Add to basket</button>
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
                    <p>${basket[j].name}</p>
                </div>
                <div class="menu_info">
                    <div>
                        <button onclick="">
                            <img src="./assets/icons/trash_icon.svg" alt="Remove Icon">
                        </button>
                        <button onclick="">-</button>
                        <p>${basket[j].amount}</p>
                        <button onclick="">+</button>
                    </div>
                    <p id="item_price${j}"></p>
                </div>
            </div>
        `;
}

function renderBasketTotalTemplate() {
    return /*html*/ `
            <div class="subtotal">
                <p>Subtotal</p>
                <p></p>
            </div>
            <div class="delivery">
                <p>Delivery fee</p>
                <p></p>
            </div>
            <div class="total">
                <p>Total</p>
                <p></p>
            </div>
            <button onclick="">Buy now ()</button>
        `;
}

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
                        <p id="price_currency${i}">${numberToCurrency(dishes[category][i].price)}</p>
                        <button class="add_button" onclick="moveSaladToBasket(${i})">Add to basket</button>
                    </div>
                </div>
            </article>
    `;
}
