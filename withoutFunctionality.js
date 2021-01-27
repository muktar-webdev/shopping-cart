// --Shopping Cart Plus Icon Event Handler--//

const shoppingCartPlusIcon = document.getElementById("shoppingCartPlusIcon");
shoppingCartPlusIcon.addEventListener("click", function() {
    updateSpanText("shoppingCartValue", "shoppingCartProductPrice", "subtotal", "tax", "total")
        // --Shopping Cart Value--//
    const shoppingCartValue = document.getElementById("shoppingCartValue").value;
    const shoppingCartValueNumber = parseInt(shoppingCartValue);
    const shoppingCartValueUpdate = shoppingCartValueNumber + 1;
    document.getElementById("shoppingCartValue").value = shoppingCartValueUpdate;

    // --Shopping Cart Product Price--//
    const shoppingCartProductPrice = document.getElementById("shoppingCartProductPrice").innerText;
    const shoppingCartProductPriceNumber = parseInt(shoppingCartProductPrice);
    const shoppingCartProductPriceUpdate = shoppingCartProductPriceNumber + 1219;
    document.getElementById("shoppingCartProductPrice").innerText = shoppingCartProductPriceUpdate;

    // --Subtotal--//
    const subTotal = document.getElementById("subtotal").innerText;
    const subTotalNumber = parseInt(subTotal);
    const subTotalNumberUpdate = shoppingCartProductPriceUpdate;
    document.getElementById("subtotal").innerText = subTotalNumberUpdate;

    // --Tax & total--//
    const tax = document.getElementById("tax").innerText;
    const taxNumber = parseInt(tax);
    const taxNumberUpdate = subTotalNumberUpdate + taxNumber;
    document.getElementById("total").innerText = taxNumberUpdate;

})

// --Shopping Cart Minus Icon Event Handler--//
const shoppingCartMinusIcon = document.getElementById("shoppingCartMinusIcon");
shoppingCartMinusIcon.addEventListener("click", function() {
    // --Shopping Cart Value--//
    const shoppingCartValue = document.getElementById("shoppingCartValue").value;
    const shoppingCartValueNumber = parseInt(shoppingCartValue);
    const shoppingCartValueUpdate = shoppingCartValueNumber - 1;
    document.getElementById("shoppingCartValue").value = shoppingCartValueUpdate;

    // --Shopping Cart Product Price--//
    const shoppingCartProductPrice = document.getElementById("shoppingCartProductPrice").innerText;
    const shoppingCartProductPriceNumber = parseInt(shoppingCartProductPrice);
    const shoppingCartProductPriceUpdate = shoppingCartProductPriceNumber - 1219;
    document.getElementById("shoppingCartProductPrice").innerText = shoppingCartProductPriceUpdate;

    // --Subtotal--//
    const subTotal = document.getElementById("subtotal").innerText;
    const subTotalNumber = parseInt(subTotal);
    const subTotalNumberUpdate = shoppingCartProductPriceUpdate;
    document.getElementById("subtotal").innerText = subTotalNumberUpdate;

    // --Tax & total--//
    const tax = document.getElementById("tax").innerText;
    const taxNumber = parseInt(tax);
    const taxNumberUpdate = subTotalNumberUpdate + taxNumber;
    document.getElementById("total").innerText = taxNumberUpdate;
})



