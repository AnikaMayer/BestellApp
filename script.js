function init() {
    // renderBurger();
    // renderPizza();
    // renderSalad();
    // renderBasketContent();
    renderDishes("burger");
    renderDishes("pizza");
    renderDishes("salad");
}

// #region renderDishes

// function renderBurger() {
//     const burgerContentRef = document.getElementById("dishes_burger");

//     for (let i = 0; i < dishes.burger.length; i++) {
//         burgerContentRef.innerHTML += renderBurgerTemplate(i);
//     }
// }

// function renderPizza() {
//     const pizzaContentRef = document.getElementById("dishes_pizza");

//     for (let i = 0; i < dishes.pizza.length; i++) {
//         pizzaContentRef.innerHTML += renderPizzaTemplate(i);
//     }
// }

// function renderSalad() {
//     const saladContentRef = document.getElementById("dishes_salad");

//     for (let i = 0; i < dishes.salad.length; i++) {
//         saladContentRef.innerHTML += renderSaladTemplate(i);
//     }
// }

function renderDishes(category) {
    const dishesContentRef = document.getElementById(`dishes_${category}`);
    dishesContentRef.innerHTML = "";
    for (let i = 0; i < dishes[category].length; i++) {
        dishesContentRef.innerHTML += renderDishesTemplate(category, i);
    }
}

//#endregion

// #region renderBasket

function renderBasketContent(i) {
    basketContentRef = document.getElementById("basket_content");
    basketContentRef.innerHTML = "";
    if (basket.length === 0) {
        basketContentRef.innerHTML = renderEmptyBasketTemplate();
    } else {
        for (let j = 0; j < basket.length; j++) {
            basketContentRef.innerHTML += renderBasketContentTemplate(j);
            basketPriceCalc(j);
        }
        renderBasketTotal();
    }
}

function basketPriceCalc(i) {
    dishesPriceRef = document.getElementById(`item_price${i}`);
    dishesPrice = basket[i].price * basket[i].amount;
    const itemPrice = dishesPrice.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    dishesPriceRef.innerHTML = itemPrice;
}

function renderBasketTotal() {
    basketTotalRef = document.getElementById("basket_buy");
    basketTotalRef.innerHTML = renderBasketTotalTemplate();
}

//#endregion

// #region moveToBasket

function moveBurgerToBasket(i) {
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

function movePizzaToBasket(i) {
    const pizzaMeal = basket.find((item) => item.name === dishes.pizza[i].name);
    if (pizzaMeal) {
        pizzaMeal.amount++;
    } else {
        basket.push({
            "name": dishes.pizza[i].name,
            "price": dishes.pizza[i].price,
            "amount": dishes.pizza[i].amount,
        });
    }

    renderBasketContent(i);
}

function moveSaladToBasket(i) {
    const saladMeal = basket.find((item) => item.name === dishes.salad[i].name);
    if (saladMeal) {
        saladMeal.amount++;
    } else {
        basket.push({
            "name": dishes.salad[i].name,
            "price": dishes.salad[i].price,
            "amount": dishes.salad[i].amount,
        });
    }

    renderBasketContent(i);
}

//#endregion

function numberToCurrency(price) {
    return price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    priceRef.innerHTML = priceFormat;
}

function basketTotal() {}
