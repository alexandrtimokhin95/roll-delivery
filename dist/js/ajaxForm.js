function ajaxForm() {
    const orderForm = document.querySelector('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    form.addEventListener('submit' , (e) => {
        e.preventDeafault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'send-order.php');

        request.setRequestHeader('Content-type', 'application/json');
        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        request.send(json);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            } else {
                successMessage(message.failure);
            }
        });
    });
}

    function successMessage(message) {
        const orderFormBlock = document.querySelector('.form-wrapper');

        orderFormBlock.classList.add('none');

        const successMessage = document.createElement('div');
        successMessage.classList.setAttribute('id', 'order-form');
        thanksModal.innerHTML = `
            <h5 class="card-title">${message.success}</h4>
        `;

        document.querySelector('#order-form').insertAdjacentHTML('afterend', successMessage);
        setTimeout(() => {
            successMessage.remove();
            orderFormBlock.classList.remove('none');
        }, 4000);
    }
