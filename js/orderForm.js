function orderForm() { 
    const productCount = document.querySelector('[data-product-count]'),
          formDelivery = document.querySelector('[data-form-delivery]'),
          formPrice = document.querySelector('[data-form-price]');

    const cartWrapper = document.querySelector('.cart-wrapper'),
          cartItems = cartWrapper.querySelectorAll('.cart-item'),
          deliveryCost = document.querySelector('.delivery-cost'),
          totalPrice = document.querySelector('.total-price');

    let productName = document.querySelector('[data-product-name]');

    let productNames = '';

    cartItems.forEach(item => {
        const productNameEl = item.querySelector('.cart-item__title');
        const productCountEl = item.querySelector('[data-counter]');

        productNames += `${productNameEl.innerText} - ${productCountEl.innerText}, `;
    });

 
        productName.value = productNames;
        console.log(productName.value);
    





    

    formDelivery.value = deliveryCost.innerText;
    formPrice.value = totalPrice.innerText;
}