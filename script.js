document.addEventListener("DOMContentLoaded", function () {

    // SHOP BUTTON (hero section)
    const shopButton = document.querySelector("button");

    if (shopButton) {
        shopButton.addEventListener("click", function () {
            alert("Welcome to our clothing store!");
        });
    }

    // SIMPLE PRODUCT CLICK EFFECT
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("click", function () {
            alert("You selected a product!");
        });
    });

});