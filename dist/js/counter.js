const btnMinus = document.querySelector('[data-action="minus"]'),
      btnPlus = document.querySelector('[data-action="plus"]'),
      counter = document.querySelector('[data-counter]');

window.addEventListener('click', function(e) {
    let counter;
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerHTML = ++counter.innerHTML; 
    }

    if (e.target.dataset.action === 'minus') {
        if (parseInt(counter.innerHTML) > 1) {
            counter.innerHTML = --counter.innerHTML;
        } else if (e.target.closest('.counter-wrapper') && parseInt(counter.innerHTML) === 1) {
            e.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }

    if (e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});