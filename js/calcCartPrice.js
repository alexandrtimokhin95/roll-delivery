function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = cartWrapper.querySelectorAll('.cart-item');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0;

    cartItems.forEach(item => {
        const countEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(countEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    });

    totalPriceEl.innerHTML = totalPrice;

    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}