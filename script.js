function init() {
    renderDishes("burger");
    renderDishes("pizza");
    renderDishes("salad");
    renderBasketContent();
}

// #region renderDishes

function renderDishes(category) {
    const dishesContentRef = document.getElementById(`dishes_${category}`);
    dishesContentRef.innerHTML = "";
    for (let i = 0; i < dishes[category].length; i++) {
        dishesContentRef.innerHTML += renderDishesTemplate(category, i);
    }
}

//#endregion

//#region numberToCurrency

function numberToCurrency(price) {
    return price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
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

function basketPriceCalc(j) {
    const dishesPriceRef = document.getElementById(`item_price${j}`);
    dishesPrice = basket[j].price * basket[j].amount;
    const itemPrice = dishesPrice.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
    });
    dishesPriceRef.innerHTML = itemPrice;
}

function renderBasketCheckout() {
    const basketCheckoutRef = document.getElementById("basket_checkout");
    basketCheckoutRef.innerHTML = renderBasketCheckoutTemplate();
}

//#endregion

//#region basketCheckout

function renderBasketSubTotal() {
    const basketSubtotalRef = document.getElementById("basket_subtotal");
    let subtotal = 0;
    for (let k = 0; k < basket.length; k++) {
        subtotal += basket[k].price * basket[k].amount;
    }
    basketSubtotalRef.innerText = numberToCurrency(subtotal);
    renderBasketTotal(subtotal);
}

function renderBasketTotal(subtotal) {
    const basketDeliveryRef = document.getElementById("basket_delivery");
    const basketTotalRef = document.getElementById("basket_total");
    const delivery = 4.99;
    let total = 0;
    total = subtotal + delivery;
    basketTotalRef.innerText = numberToCurrency(total);
    basketDeliveryRef.innerText = numberToCurrency(delivery);
    checkoutButton(total);
}

function checkoutButton(total) {
    const checkoutButtonRef = document.getElementById("checkout_btn");
    checkoutButtonRef.innerText = numberToCurrency(total);
}

//#endregion

// #region dialog

function placeOrder() {
    const confirmOrderRef = document.getElementById("order_confirmation");
    const basketDisplayRef = document.getElementById("basket_display");
    confirmOrderRef.showModal();
    confirmOrderRef.innerHTML = orderConfirmTemplate();
    confirmOrderRef.classList.add("opened");
    basketDisplayRef.classList.add("none");
}

function closeDialog() {
    const confirmOrderRef = document.getElementById("order_confirmation");
    confirmOrderRef.close();
    confirmOrderRef.classList.remove("opened");
}

function bubblingProtection() {
    event.stopPropagation();
}

//#endregion

// #region changeBasketAmount

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
    renderBasketSubTotal();
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
    const titleAmountRef = document.getElementById(`title_amount${index}`);
    itemPriceRef.innerText = basket[index].price * basket[index].amount;
    itemAmountRef.innerText = basket[index].amount;
    titleAmountRef.innerText = basket[index].amount;
    basketPriceCalc(index);
}

function increaseAmount(j) {
    basket[j].amount++;
    renderPriceAndAmount(j);
    renderBasketSubTotal();
}

function decreaseAmount(j) {
    if (basket[j].amount === 1) {
        removeItem(j);
    } else {
        basket[j].amount--;
        renderPriceAndAmount(j);
        renderBasketSubTotal();
    }
}

function removeItem(j) {
    basket.splice(j, 1);
    renderBasketContent();
    if (basket.length === 0) {
        return;
    } else {
        renderBasketSubTotal();
    }
}

//#endregion
