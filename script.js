// --Iphone 11--//
// --Shopping Cart Plus Icon Event Handler-- //
const shoppingCartPlusIcon = document.getElementById("shoppingCartPlusIcon");
shoppingCartPlusIcon.addEventListener("click", function() {
    updateSpanText("shoppingCartValue", "shoppingCartProductPrice", "subtotal", "tax", "total");

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

// --Common Function for Plus & Minus Icon--//
function updateSpanText(id1, id2, id3, id4, id5) {
    // --Shopping Cart Value--//
    const shoppingCartValue = document.getElementById(id1).value;
    const shoppingCartValueNumber = parseInt(shoppingCartValue);
    const shoppingCartValueUpdate = shoppingCartValueNumber + 1;
    document.getElementById(id1).value = shoppingCartValueUpdate;

    // --Shopping Cart Product Price--//
    const shoppingCartProductPrice = document.getElementById(id2).innerText;
    const shoppingCartProductPriceNumber = parseInt(shoppingCartProductPrice);
    const shoppingCartProductPriceUpdate = shoppingCartProductPriceNumber + 1219;
    document.getElementById(id2).innerText = shoppingCartProductPriceUpdate;

    // --Subtotal--//
    const subTotal = document.getElementById(id3).innerText;
    const subTotalNumber = parseInt(subTotal);
    const subTotalNumberUpdate = shoppingCartProductPriceUpdate;
    document.getElementById(id3).innerText = subTotalNumberUpdate;

    // --Tax & total--//
    const tax = document.getElementById(id4).innerText;
    const taxNumber = parseInt(tax);
    const taxNumberUpdate = subTotalNumberUpdate + taxNumber;
    document.getElementById(id5).innerText = taxNumberUpdate;
}


// --Iphone 11 Case---//

// --Plus Event Handler--//
const plusIcon = document.getElementById("plusIcon");
plusIcon.addEventListener("click", function() {
        // --Shopping Cart Value--//
    const value = document.getElementById("value").value;
    const valueNumber = parseInt(value);
    const valueUpdate = valueNumber + 1;
    document.getElementById("value").value = valueUpdate;
    // --Shopping Cart Product Price--//
    const casePrice = document.getElementById("iphoneCasePrice").innerText;
    const casePriceNumber = parseInt(casePrice);
    const casePriceUpdate = casePriceNumber + 59;
    document.getElementById("iphoneCasePrice").innerText = casePriceUpdate;

     // --Subtotal--//
     const subTotal = document.getElementById("subtotal").innerText;
     const subTotalNumber = parseInt(subTotal);
     const subTotalNumberUpdate = casePriceUpdate;
     document.getElementById("subtotal").innerText = subTotalNumberUpdate;
 
     // --Tax & total--//
     const tax = document.getElementById("tax").innerText;
     const taxNumber = parseInt(tax);
     const taxNumberUpdate = subTotalNumberUpdate + taxNumber;
     document.getElementById("total").innerText = taxNumberUpdate;
})