function init() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasketContent();
}

function renderBurger() {
    burgerContentRef = document.getElementById("dishes_burger");

    for (let i = 0; i < dishes.burger.length; i++) {
        burgerContentRef.innerHTML += renderBurgerTemplate(i);
    }
}

function renderPizza() {
    pizzaContentRef = document.getElementById("dishes_pizza");

    for (let i = 0; i < dishes.pizza.length; i++) {
        pizzaContentRef.innerHTML += renderPizzaTemplate(i);
    }
}

function renderSalad() {
    saladContentRef = document.getElementById("dishes_salad");

    for (let i = 0; i < dishes.salad.length; i++) {
        saladContentRef.innerHTML += renderSaladTemplate(i);
    }
}

function numberToCurrency(price) {
    return price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    priceRef.innerHTML = priceFormat;
}

function renderBasketContent(i) {
    basketContentRef = document.getElementById("basket_content_box");
    basketContentRef.innerHTML = "";
    if (basket.length === 0) {
        basketContentRef.innerHTML = renderEmptyBasketTemplate();
    } else {
        for (let j = 0; j < basket.length; j++) {
            basketContentRef.innerHTML += renderBasketContentTemplate(j);
        }
    }
}

function moveToBasket(i) {
    const burgerMeal = basket.find((item) => item.name === dishes.burger[i].name);
    if (burgerMeal) {
        burgerMeal.amount++;
    } else {
        basket.push({
            "name": dishes.burger[i].name,
            "price": dishes.burger[i].price,
            "amount": dishes.burger[i].amount,
        });
    }

    renderBasketContent(i);
}
