// --Shopping Cart Plus Icon Event Handler--//
const shoppingCartPlusIcon = document.getElementById("shoppingCartPlusIcon");
shoppingCartPlusIcon.addEventListener("click",function(){
    // --Shopping Cart Value--//
    const shoppingCartValue = document.getElementById("shoppingCartValue").value;
    const shoppingCartValueNumber = parseInt(shoppingCartValue);
    const shoppingCartValueUpdate = shoppingCartValueNumber + 1;
    document.getElementById("shoppingCartValue").value = shoppingCartValueUpdate;

    // --Shopping Cart Product Price--//
    const shoppingCartProductPrice = document.getElementById("shoppingCartProductPrice").innerText;
    const shoppingCartProductPriceNumber = parseInt(shoppingCartProductPrice);
    const shoppingCartProductPriceUpdate = shoppingCartProductPriceNumber + 1219;
    // console.log(shoppingCartProductPriceUpdate);
    document.getElementById("shoppingCartProductPrice").innerText = shoppingCartProductPriceUpdate;
})

// --Shopping Cart Minus Icon Event Handler--//
const shoppingCartMinusIcon = document.getElementById("shoppingCartMinusIcon");
shoppingCartMinusIcon.addEventListener("click",function(){
    // --Shopping Cart Value--//
    const shoppingCartValue = document.getElementById("shoppingCartValue").value;
    const shoppingCartValueNumber = parseInt(shoppingCartValue);
    const shoppingCartValueUpdate = shoppingCartValueNumber -1;
    document.getElementById("shoppingCartValue").value = shoppingCartValueUpdate;

    // --Shopping Cart Product Price--//
    const shoppingCartProductPrice = document.getElementById("shoppingCartProductPrice").innerText;
    const shoppingCartProductPriceNumber = parseInt(shoppingCartProductPrice);
    const shoppingCartProductPriceUpdate = shoppingCartProductPriceNumber - 1219;
    // console.log(shoppingCartProductPriceUpdate);
    document.getElementById("shoppingCartProductPrice").innerText = shoppingCartProductPriceUpdate;
})