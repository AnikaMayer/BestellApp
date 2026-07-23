function init() {
    renderBurger();
    renderPizza();
    renderSalad();
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
