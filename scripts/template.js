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
                        <button class="add_button" onclick="moveToBasket(${i})">Add to basket</button>
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
                        <button class="add_button">Add to basket</button>
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
                        <button class="add_button">Add to basket</button>
                    </div>
                </div>
            </article>
        `;
}

function renderEmptyBasketTemplate() {
    return /*html*/ `
            <div class="basket_items">
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
            <div class="basket_total"></div>
        `;
}

function renderBasketContentTemplate(j) {
    return /*html*/ `
                <div class="basket_items">
                    <div class="menu_title">
                        <p>${basket.name}</p>
                    </div>
                    <div class="menu_info">
                        <div>
                            <img src="./assets/icons/trash_icon.svg" alt="Remove Icon">
                            <button onclick="">-</button>
                            <p>${basket.amount}</p>
                            <button onclick="">+</button>
                        </div>
                        <p>${basket.price}</p>
                    </div>
                </div>
                <div class="basket_total">
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
                    <button>Buy now ()</button>
                </div>
            `;
}
