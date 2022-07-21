const btnMinus = document.querySelector('[data-action="minus"]'),
      btnPlus = document.querySelector('[data-action="plus"]'),
      counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', function() {
    if (parseInt(counter.innerHTML) > 1) {
        counter.innerHTML = --counter.innerHTML;
    }
});

btnPlus.addEventListener('click', function() {
    counter.innerHTML = ++counter.innerHTML; 
});

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
        }
    }
});