function init() {
    // renderBurger();
    // renderPizza();
    // renderSalad();
    renderDishes("burger");
    renderDishes("pizza");
    renderDishes("salad");
    renderBasketContent();
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

function renderBasketContent() {
    const basketContentRef = document.getElementById("basket_content");
    const basketCheckoutRef = document.getElementById("basket_checkout");
    basketContentRef.innerHTML = "";
    basketCheckoutRef.innerHTML = "";
    if (basket.length === 0) {
        basketContentRef.innerHTML = renderEmptyBasketTemplate();
    } else {
        for (let j = 0; j < basket.length; j++) {
            basketContentRef.innerHTML += renderBasketContentTemplate(j);
            basketPriceCalc(j);
        }
        renderBasketCheckout();
    }
}

function basketPriceCalc(i) {
    const dishesPriceRef = document.getElementById(`item_price${i}`);
    dishesPrice = basket[i].price * basket[i].amount;
    const itemPrice = dishesPrice.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    dishesPriceRef.innerHTML = itemPrice;
}

function renderBasketCheckout() {
    const basketCheckoutRef = document.getElementById("basket_checkout");
    basketCheckoutRef.innerHTML = renderBasketTotalTemplate();
}

function renderBasketTotal() {
    const basketSubtotalRef = document.getElementById("basket_subtotal");
    const basketTotalRef = document.getElementById("basket_total");
    const basketDeliveryRef = document.getElementById("basket_delivery");
    let subtotal = 0;
    let total = 0;
    const delivery = 4.99;
    for (let k = 0; k < basket.length; k++) {
        subtotal += basket[k].price * basket[k].amount;
    }
    basketSubtotalRef.innerText = subtotal;
    basketTotalRef.innerText = subtotal + delivery;
    basketDeliveryRef.innerText = delivery;
}

//#endregion

// #region moveToBasket

// function moveBurgerToBasket(i) {
//     const burgerMeal = basket.find((item) => item.name === dishes.burger[i].name);
//     if (burgerMeal) {
//         burgerMeal.amount++;
//     } else {
//         basket.push({
//             "name": dishes.burger[i].name,
//             "price": dishes.burger[i].price,
//             "amount": dishes.burger[i].amount,
//         });
//     }

//     renderBasketContent(i);
// }

// function movePizzaToBasket(i) {
//     const pizzaMeal = basket.find((item) => item.name === dishes.pizza[i].name);
//     if (pizzaMeal) {
//         pizzaMeal.amount++;
//     } else {
//         basket.push({
//             "name": dishes.pizza[i].name,
//             "price": dishes.pizza[i].price,
//             "amount": dishes.pizza[i].amount,
//         });
//     }

//     renderBasketContent(i);
// }

// function moveSaladToBasket(i) {
//     const saladMeal = basket.find((item) => item.name === dishes.salad[i].name);
//     if (saladMeal) {
//         saladMeal.amount++;
//     } else {
//         basket.push({
//             "name": dishes.salad[i].name,
//             "price": dishes.salad[i].price,
//             "amount": dishes.salad[i].amount,
//         });
//     }

//     renderBasketContent(i);
// }

function addToCart(category, i) {
    const itemCard = basket.find((item) => item.name === dishes[category][i].name);
    if (itemCard) {
        addMoreItems(category, i);
    } else {
        basket.push({
            "name": dishes[category][i].name,
            "price": dishes[category][i].price,
            "amount": dishes[category][i].amount,
        });
        renderBasketContent();
    }
    renderBasketTotal();
}

function addMoreItems(category, i) {
    const basketIndex = basket.findIndex(
        (item) => item.name === dishes[category][i].name,
    );
    basket[basketIndex].amount++;
    renderPriceAndAmount(basketIndex);
}

function renderPriceAndAmount(index) {
    const itemPriceRef = document.getElementById(`item_price${index}`);
    const itemAmountRef = document.getElementById(`item_amount${index}`);
    itemPriceRef.innerText = basket[index].price * basket[index].amount;
    itemAmountRef.innerText = basket[index].amount;
}

function increaseAmount(j) {
    basket[j].amount++;
    renderPriceAndAmount(j);
    renderBasketTotal();
}

function decreaseAmount(j) {
    if (basket[j].amount === 1) {
        removeItem(j);
    } else {
        basket[j].amount--;
        renderPriceAndAmount(j);
        renderBasketTotal();
    }
}

function removeItem(j) {
    basket.splice(j, 1);
    renderBasketContent();
    if (basket.length === 0) {
        return;
    } else {
        renderBasketTotal();
    }
}

//#endregion

function numberToCurrency(price) {
    return price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    priceRef.innerHTML = priceFormat;
}
