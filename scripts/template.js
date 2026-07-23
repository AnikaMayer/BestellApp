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
                        <button class="add_button">Add to basket</button>
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
